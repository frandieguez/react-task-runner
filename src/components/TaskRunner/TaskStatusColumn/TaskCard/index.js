import React from 'react';
import taskCardStyles from './TaskCard.module.scss';
import Icon from '@material-ui/core/Icon';

import PropTypes from 'prop-types';

/**
 * Component that renders a task indicating its current status, and if it
 * was already executed it shows the time that took to be executed.
 *
 * @param {Array} props the list of properties
 */
let TaskCard = (props) => {
  let icon;

  switch (props.task.status) {
    case 'RUNNING':
      icon = 'settings';
      break;

    case 'DONE':
      icon = 'done';
      break;

    case 'FAILED':
      icon = 'error'
      break;

    default:
      icon = 'notes'
      break;
  }

  return (
    <div className={taskCardStyles.taskCard}>
      <div className={`${taskCardStyles.taskIcon} ${icon}`}>
        <Icon> {icon} </Icon>
      </div>
      <div className={taskCardStyles.taskTitle}>
        {props.task.name}
        {['DONE','FAILED'].includes(props.task.status) && (
          <span>{` `} ({props.task.ttl / 1000} segs)</span>
        )}
      </div>
    </div>
  )
}

export default TaskCard;
