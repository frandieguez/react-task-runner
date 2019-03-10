import React from 'react';
import taskCardStyles from './TaskCard.module.scss';

let TaskCard = (props) => {

  return (
    <div className={taskCardStyles.taskCard}>
      <div className={taskCardStyles.taskTitle}>
        {props.task.name}
      </div>
    </div>
  )
}

export default TaskCard;
