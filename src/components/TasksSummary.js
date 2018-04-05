import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectTasks from '../selectors/tasks';

export const TasksSummary = ({taskCount,taskCountTotal}) => {
        return(
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Viewing <span>{taskCount}</span> of {taskCountTotal} Tasks</h1>
                    <div className="page-header__actions">
                        <Link className="button" to="/Create">Add Task</Link>
                    </div>
                </div>
            </div>
        );
};

const MapStateToProps = (state) => {
    const visibleTasks = selectTasks(state.tasks, state.filters);
    const taskCountTot = state.tasks.length;
    return{
        taskCount: visibleTasks.length,
        taskCountTotal: taskCountTot
    };
};

export default connect(MapStateToProps)(TasksSummary);