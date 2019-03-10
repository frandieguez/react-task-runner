import React from 'react';
import taskRunnerStyles from './Taskrunner.module.scss';
import Task from '../../libs/Task';

// Subcomponents
import TaskForm from './TaskForm';
import TaskStatusColumn from './TaskStatusColumn';

const MAX_TASK_IN_PARALLEL = 1;

/**
 * Component that handles serves handles the task execution and orchestrates
 * and updates all child components
 *
 * @author [Fran Dieguez](https://github.com/frandieguez)
 */
class TaskRunner extends React.Component {
  /**
   * Initializes the Component from a list of props.
   *
   * @param {Array} props The list of properties passed when the component starts
   */
  constructor(props) {
    super(props)

    let tasks = [];

    // In order to have some tasks when the app starts let's
    // create some of them
    for (let index = 0; index < 5; index++) {
      tasks.push(this.createTask({name: `Example task ${index + 1}`}))
    }

    // The state handles the list of tasks, the updated form information and
    // the running tasks
    this.state = {
      tasks: tasks,
      formInfo: { name: '' },
      runningTasks: 0,
    }

    this.inputElement = React.createRef();

    // List of available statuses grouped by execution meaning.
    this.statuses = [
      {title: 'Tasks running & pending', valid: ['PENDING', 'RUNNING']},
      {title: 'Tasks completed',         valid: ['DONE', 'FAILED'], reverse: true},
    ];
  }

  /**
   * Saves the current form information into the state so
   * the component can later use it to create a new task.
   *
   * @param {SyntheticEvent} e The event dispatched by the input onChange
   */
  handleInput = e => {
    const formInfo = {
      name: e.target.value
    };

    this.setState({
      formInfo,
    })
  }

  /**
   * Creates a Task object from the provided info.
   *
   * @param {Array} data The task information to create from
   */
  createTask = data => {
    return new Task(data.name);
  }

  /**
   * Handles the form submission event,
   *
   * @param {SyntheticEvent} e The event dispatched when the form is submitted
   */
  addTask = e => {
    e.preventDefault()
    const newTask = this.state.formInfo;

    if (newTask.name !== '') {
      let task = this.createTask(newTask);

      this.setState({
        tasks: [...this.state.tasks, task ],
        formInfo: { name: '', key: '' },
      }, () => {
        this.processQueue();
      });
    }
  }

  /**
   * Start the task queue processing when the component is mounted.
   */
  componentDidMount = () => {
    this.processQueue();
  }

  /**
   * Checks the task queue and executes them.
   * The design is open to run multiple tasks in parallel
   */
  processQueue() {
    if (this.state.runningTasks >= MAX_TASK_IN_PARALLEL) {
      return;
    }

    let pendingTasks = this.state.tasks.filter((task) => {
      return task.status === 'PENDING';
    });

    if (pendingTasks.length === 0) {
      return;
    }

    let task = pendingTasks.shift();

    this.runTask(task).then(()=> {
      this.processQueue();
    });
  }

  /**
   * Executes a provided task and updates its state in the list
   * @param {Task} task the task to execute
   */
  async runTask(task) {
    this.setState({
      runningTasks: this.state.runningTasks + 1
    })

    this.updateTaskStatus(task, 'RUNNING');

    let status = await task.run()

    this.updateTaskStatus(task, status);

    this.setState({
      runningTasks: this.state.runningTasks - 1
    });
  }

  /**
   * Updates a task status
   *
   * @param {Task} task the task to update its status
   * @param {string} status the status name
   */
  updateTaskStatus(task, status) {
    let index = this.state.tasks.indexOf(task);

    let tasks = this.state.tasks;
    task.status = status;
    tasks[index] = task;

    this.setState({
      tasks,
    });
  }

  /**
   * Renders the component
   */
  render() {
    return (
      <div>
        <span className={taskRunnerStyles.status}>Running: {this.state.runningTasks} / Total tasks: {this.state.tasks.length}</span>
        <div className={taskRunnerStyles.wrapper}>
          <div className={taskRunnerStyles.form}>
            <TaskForm
              addTask={this.addTask}
              inputElement={this.inputElement}
              handleInput={this.handleInput}
              onChange={this.handleInput}
              formInfo={this.state.formInfo} />
          </div>

          {this.statuses.map((status, i) => {
            let filteredTasks = this.state.tasks.filter((el) => {
              return status.valid.includes(el.status);
            });

            return (
              <div key={i}>
                <TaskStatusColumn tasks={filteredTasks} status={status} reverse={status.reverse} />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default TaskRunner
