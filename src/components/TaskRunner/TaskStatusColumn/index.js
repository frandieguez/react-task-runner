import React from 'react';
import PropTypes from 'prop-types';
import columnStyles from './Taskstatuscolumn.module.scss';
import TaskCard from './TaskCard';

/**
 * Component that iterates over all the tasks and shows those that are in an
 * specific status.
 *
 * The component allows to render the list in reverse mode.
 *
 * @param {Array} props the list of properties
 */
let StatusColumn = (props) => {
  let tasks = props.tasks;

  if (props.reverse) {
    tasks = tasks.reverse()
  }

  return (
    <div className={columnStyles.column}>
      <div className={columnStyles.columnTitle}>{props.status.title} ({tasks.length})</div>
      <div className={columnStyles.columnContents}>
        {tasks.length === 0 && <div>No tasks</div>}
        {tasks.length > 0 && tasks.map((task, i) => {
          return (
            <TaskCard key={i} task={task} />
          )
        })}
      </div>
    </div>
  )
}

// Default values for the props
StatusColumn.defaultProps = {
  reverse: false,
  tasks: []
}

// Type definition for the props
StatusColumn.propTypes = {
  reverse: PropTypes.bool,
  tasks: PropTypes.array.isRequired
}

export default StatusColumn;
