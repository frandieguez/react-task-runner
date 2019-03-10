import React from 'react'
import PropTypes from 'prop-types';
import taskFormStyles from './TaskForm.module.scss';

/**
 * Component that renders a form with input + button and propagates
 * events upwards when the user submits the form.
 */
class TaskForm extends React.Component {

  /**
   * Focuses the input after the component was mounted
   */
  componentDidUpdate() {
    this.props.inputElement.current.focus()
  }

  // Renders the component
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

// Default values for the props
TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
  formInfo: PropTypes.object.isRequired,
  handleInput: PropTypes.func.isRequired,
  inputElement:PropTypes.object.isRequired,
}

export default TaskForm;
