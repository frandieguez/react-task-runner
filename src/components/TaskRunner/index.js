import React from 'react';
import taskRunnerStyles from './Taskrunner.module.scss';
import TaskForm from './TaskForm';
import Task from '../../libs/Task'

class TaskRunner extends React.Component {

  constructor(props) {
    super(props)

    // The state handles the list of tasks, the current form information
    // and the tasks that are running
    this.state = {
      tasks: [],
      formInfo: { name: '' },
    }

    this.inputElement = React.createRef();
    this.statuses = [
      {title: 'Tasks running & pending', valid: ['PENDING', 'RUNNING']},
      {title: 'Tasks completed',         valid: ['DONE', 'FAILED']},
    ];
  }

  handleInput = e => {
    const formInfo = {
      name: e.target.value
    };

    this.setState({
      formInfo,
    })
  }

  addTask = e => {
    e.preventDefault()
    const newTask = this.state.formInfo.name;

    if (newTask.name !== '') {
      let task = new Task(newTask.name);

      this.setState({
        tasks: [task, ...this.state.tasks ],
        formInfo: { name: '', key: '' },
      })
    }
  }

  render() {

    return (
      <div className={taskRunnerStyles.wrapper}>
        <div className={taskRunnerStyles.form}>
          <TaskForm
            addTask={this.addTask}
            inputElement={this.inputElement}
            handleInput={this.handleInput}
            onChange={this.handleInput}
            formInfo={this.state.formInfo} />
        </div>



        {this.statuses.map((status) => {
          let filteredTasks = this.state.tasks.filter((el) => {
            return status.valid.includes(el.status);
          });

          return (
            <div>
              <div>{status.title}</div>
              ({filteredTasks.length})
            </div>
          )
        })}
      </div>
    )
  }
}

export default TaskRunner
