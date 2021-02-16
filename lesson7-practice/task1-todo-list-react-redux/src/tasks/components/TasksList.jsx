import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Task from './Task';
import CreateTaskInput from './CreateTaskInput';
import * as tasksActions from '../tasks.actions';
import { tasksListSelector } from '../tasks.selectors';

const TasksList = ({ tasks, getTasksList, updateTask, deleteTask, createTask }) => {
  useEffect(() => {
    getTasksList();
  }, []);

  const sortedList = tasks.slice().sort((a, b) => a.done - b.done);

  return (
    <div className="todo-list">
      <CreateTaskInput onCreate={createTask} />
      <ul className="list">
        {sortedList.map(task => (
          <Task key={task.id} {...task} onChange={updateTask} onDelete={deleteTask} />
        ))}
      </ul>
    </div>
  );
};

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape()),
  getTasksList: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  createTask: PropTypes.func.isRequired,
};

const mapDispatch = {
  getTasksList: tasksActions.getTasksList,
  updateTask: tasksActions.updateTask,
  deleteTask: tasksActions.deleteTask,
  createTask: tasksActions.createTask,
};

const mapState = state => {
  return {
    tasks: tasksListSelector(state),
  };
};

export default connect(mapState, mapDispatch)(TasksList);
