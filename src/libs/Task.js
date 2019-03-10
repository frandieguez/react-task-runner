import PropTypes from 'prop-types'

/** Class representing a task. */
class Task {
  /**
   * Creates a task.
   *
   * @param {string} name - The name of the task.
   */
  constructor(name) {
    this.key    = Date.now();
    this.name   = name;
    this.status = 'PENDING';
  }
}

Task.propTypes = {
  key: PropTypes.number.isRequired,
  name: PropTypes.func.isRequired,
  status: PropTypes.oneOf(['PENDING', 'RUNNING', 'DONE', 'FAILED']),
}

export default Task;
