import React from 'react'
import PropTypes from 'prop-types';
import taskFormStyles from './TaskForm.module.scss';

class TaskForm extends React.Component {

  componentDidUpdate() {
    this.props.inputElement.current.focus()
  }

  render() {
    return (
      <form onSubmit={this.props.addTask} className={taskFormStyles.form}>
        Please add your new tasks with the form below:

        <input
            className={taskFormStyles.formInput}
            placeholder="Describe your next task"
            onChange={this.props.handleInput}
            value={this.props.formInfo.name}
            ref={this.props.inputElement}
            autoFocus
            />

        <button type="submit" className={taskFormStyles.formButton}> Queue it! </button>
      </form>
    )
  }
}

TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
  formInfo: PropTypes.object.isRequired,
  handleInput: PropTypes.func.isRequired,
  inputElement:PropTypes.object.isRequired,
}

export default TaskForm;
