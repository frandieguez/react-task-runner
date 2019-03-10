import React from 'react';
import taskRunnerStyles from './Taskrunner.module.scss';
import TaskForm from './TaskForm';

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
    console.log(this.state.formInfo)
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

        <div>running & pending</div>

        <div>done & failed</div>
      </div>
    )
  }
}

export default TaskRunner
