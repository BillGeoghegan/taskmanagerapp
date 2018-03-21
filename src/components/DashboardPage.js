import React from 'react';
import TasksSummary from './TasksSummary';
import TaskList from './TaskList';
import TaskListFilters from './TaskListFilters';

const DashboardPage = () => (
    <div>
        <TasksSummary/>
        <TaskListFilters/>
        <TaskList />
    </div>
);

export default DashboardPage;