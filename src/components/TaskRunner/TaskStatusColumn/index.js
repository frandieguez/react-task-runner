import React from 'react';
import columnStyles from './Taskstatuscolumn.module.scss'

let StatusColumn = (props) => {
  return (
    <div className={columnStyles.column}>
      <div className={columnStyles.columnTitle}>{props.status.title} ({props.tasks.length})</div>
      <div className={columnStyles.columnContents}>
        {props.tasks.length === 0 && <div>No tasks</div>}
        {props.tasks.length > 0 && props.tasks.map((task) => {
          return (
            <div>{task.name}</div>
          )
        })}
      </div>
    </div>
  )
}

export default StatusColumn;
