import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const TaskListItem = ({dispatch, id, description = '', note = '', createdAt = 0, dueDate = 0, status = '', category = ''}) => {
    return (
        <Link to={`/edit/${id}`} className="list-item">
            <div>
                <h3 className="list-item__title">{description} </h3>
                <span className="list-item__sub-title">{note}</span>
                <br/><br/>{statusColor({status})}
            </div>
            <h4 className="list-item__data"><span className="show-for-mobile">Due </span>{moment(dueDate).format('MMMM Do, YYYY')} {dateStatus({dueDate,description})}</h4>
        </Link>
    );
}

const statusColor = ({status}) => {
    let statusClass = 'list-item__sub-title bad';
    if(status == 'Created' || status == 'Ongoing' || status == 'Complete'){
        statusClass = 'list-item__sub-title good';
    }else if(status == 'Closed'){
        statusClass = 'list-item__sub-title neutral';
    }
    return(
        <span className={statusClass}>{status}</span>
    );
};

const dateStatus = ({dueDate,description}) => {
    let overdueMessage = '(Overdue)';
    if(moment(dueDate).unix() < moment().unix()){
        overdueMessage = '(Overdue)';
    }else{
        overdueMessage = '(Due in '+moment(dueDate).toNow(true)+')';
    }
    return(
        overdueMessage
    );
};

export default TaskListItem;