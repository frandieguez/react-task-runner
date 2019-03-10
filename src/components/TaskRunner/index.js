import React from 'react';
import taskRunnerStyles from './Taskrunner.module.scss';
import TaskForm from './TaskForm';
import Task from '../../libs/Task';

import TaskStatusColumn from './TaskStatusColumn';

class TaskRunner extends React.Component {

  constructor(props) {
    super(props)

    // Gonna create some tasks on start to debug
    let tasks = [];
    for (let index = 0; index < 5; index++) {
      tasks.push(this.createTask({name: `Example task ${Math.random()}`}))
    }

    // The state handles the list of tasks and the current form information
    this.state = {
      tasks: tasks,
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

  createTask = data => {
    return new Task(data.name);
  }

  addTask = e => {
    e.preventDefault()
    const newTask = this.state.formInfo.name;

    if (newTask.name !== '') {
      let task = new Task(newTask);

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
              <TaskStatusColumn tasks={filteredTasks} status={status} />
            </div>
          )
        })}
      </div>
    )
  }
}

export default TaskRunner
