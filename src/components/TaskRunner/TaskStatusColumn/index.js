import React from 'react';
import columnStyles from './Taskstatuscolumn.module.scss';
import TaskCard from './TaskCard';

let StatusColumn = (props) => {
  return (
    <div className={columnStyles.column}>
      <div className={columnStyles.columnTitle}>{props.status.title} ({props.tasks.length})</div>
      <div className={columnStyles.columnContents}>
        {props.tasks.length === 0 && <div>No tasks</div>}
        {props.tasks.length > 0 && props.tasks.map((task) => {
          return (
            <TaskCard task={task} />
          )
        })}
      </div>
    </div>
  )
}

export default StatusColumn;
