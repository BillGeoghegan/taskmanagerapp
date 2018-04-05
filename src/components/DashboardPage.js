import React from 'react';
import TasksSummary from './TasksSummary';
import CategoryChart from './CategoryChart';
import StatusChart from './StatusChart';
import DueDateChart from './DueDateChart';
import TaskList from './TaskList';
import TaskListFilters from './TaskListFilters';

const DashboardPage = () => (
    <div>
        <div className="chart-section show-for-desktop">
            <CategoryChart/>
            <StatusChart/>
            <DueDateChart/>
        </div>
        <div className="chart-section show-for-mobile">
            <StatusChart/>
        </div>
        <TaskListFilters/>
        <TaskList/>
    </div>
);

export default DashboardPage;