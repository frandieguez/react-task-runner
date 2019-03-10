import PropTypes from 'prop-types'
import { getRandomNumber, sleep } from '../libs/utils';

const MIN_SECONDS = 2;
const MAX_SECONDS = 10;
const MILISECONDS_IN_A_SEC = 1000;

/** Class representing a task. */
class Task {
  /**
   * Creates a task.
   *
   * @param {string} name - The name of the task.
   */
  constructor(name) {
    this.key    = Math.random();
    this.name   = name;
    this.status = 'PENDING';
  }

  async run() {
    this.ttl =
      getRandomNumber(MIN_SECONDS, MAX_SECONDS)
      * MILISECONDS_IN_A_SEC;

    // Complete the task after the ttl time.
    await sleep(this.ttl);

    return (Math.round(Math.random()) === 0) ? 'FAILED' : 'DONE';
  }
}


Task.propTypes = {
  key: PropTypes.number.isRequired,
  name: PropTypes.func.isRequired,
  status: PropTypes.oneOf(['PENDING', 'RUNNING', 'DONE', 'FAILED']),
}

export default Task;
