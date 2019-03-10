import React from 'react';
import taskRunnerStyles from './Taskrunner.module.scss';
import TaskForm from './TaskForm';
import Task from '../../libs/Task';

import TaskStatusColumn from './TaskStatusColumn';

class TaskRunner extends React.Component {

  constructor(props) {
    super(props)

    let tasks = [];

    // Gonna create some tasks on start to debug
    for (let index = 0; index < 5; index++) {
      tasks.push(this.createTask({name: `Example task ${index + 1}`}))
    }

    // The state handles the list of tasks and the current form information
    this.state = {
      tasks: tasks,
      formInfo: { name: '' },
      runningTasks: 0,
    }

    this.inputElement = React.createRef();
    this.statuses = [
      {title: 'Tasks running & pending', valid: ['PENDING', 'RUNNING']},
      {title: 'Tasks completed',         valid: ['DONE', 'FAILED'], reverse: true},
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

  createTask = data => {
    return new Task(data.name);
  }

  addTask = e => {
    e.preventDefault()
    const newTask = this.state.formInfo;

    if (newTask.name !== '') {
      let task = this.createTask(newTask);

      this.setState({
        tasks: [...this.state.tasks, task ],
        formInfo: { name: '', key: '' },
      })
    }
  }

  render() {

    return (
      <div>
        <span>Running: {this.state.runningTasks} / Total tasks: {this.state.tasks.length}</span>
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
