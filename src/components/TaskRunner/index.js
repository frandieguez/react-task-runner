import React from 'react';
import taskRunnerStyles from './Taskrunner.module.scss';

class TaskRunner extends React.Component {
  render() {

    return (
      <div className={taskRunnerStyles.wrapper}>
        <div className={taskRunnerStyles.form}>
          form
        </div>

        <div>running & pending</div>

        <div>done & failed</div>
      </div>
    )
  }
}

export default TaskRunner
