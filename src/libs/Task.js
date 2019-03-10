import PropTypes from 'prop-types'

/** Class representing a task. */
class Task {
  /**
   * Create a point.
   * @param {number} x - The x value.
   * @param {number} y - The y value.
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
