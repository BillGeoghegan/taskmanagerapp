import React from 'react';
import { connect } from 'react-redux';
import TaskListItem from './TaskListItem';
import selectTasks from '../selectors/tasks';

//List of props to return
export const TaskList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Tasks</div>
            <div className="show-for-desktop">Task</div>
            <div className="show-for-desktop">Due</div>
        </div>
        <div className="list-body">
            {
                props.tasks.length === 0 ? (
                    <div className="list-item list-item__message">
                        <span>No Tasks Right Now!</span>
                    </div>
                ) : (
                    props.tasks.map((task) => {
                        return <TaskListItem key={task.id} {...task}/>;
                    })
                )
            }
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        tasks: selectTasks(state.tasks, state.filters)
    };
};

export default connect(mapStateToProps)(TaskList);