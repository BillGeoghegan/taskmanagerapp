import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const TaskListItem = ({dispatch, id, description = '', note = '', createdAt = 0, dueDate = 0}) => {
    return (
            <Link to={`/edit/${id}`} className="list-item">
                <div>
                    <h3 className="list-item__title">{description}</h3>
                    <span className="list-item__sub-title">Due {moment(dueDate).format('MMMM Do, YYYY')}</span>
                </div>
                {/* <h3 className="list-item__data">{moment(dueDate).format('MMMM Do, YYYY')}</h3> */}
            </Link>
    );
}

export default TaskListItem;