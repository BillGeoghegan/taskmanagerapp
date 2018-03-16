import React from 'react';
import TasksSummary from './TasksSummary';
import TaskList from './TaskList';

const DashboardPage = () => (
    <div>
        <TasksSummary/>
        <TaskList />
    </div>
);

export default DashboardPage;