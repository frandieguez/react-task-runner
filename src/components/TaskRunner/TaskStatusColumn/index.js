import React from 'react';
import columnStyles from './Taskstatuscolumn.module.scss';
import TaskCard from './TaskCard';

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
        {tasks.length > 0 && tasks.map((task) => {
          return (
            <TaskCard task={task} />
          )
        })}
      </div>
    </div>
  )
}

export default StatusColumn;
