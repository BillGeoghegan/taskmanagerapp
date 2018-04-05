import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import { connect } from 'react-redux';
import {StatusCount} from '../selectors/tasksTotal';
import selectTasks from '../selectors/tasks';

export const Chart = ({taskCount, taskCountTotal, statusCount}) => {
    let dataObj = {
        chartData: {
            labels: ['Created','Ongoing', 
            'On Hold', 'Invalid','Critical',
             'Complete', 'Closed'],
            datasets: [{
                data: 
                [
                    statusCount.statusCreated,
                    statusCount.statusOngoing,
                    statusCount.statusOnhold,
                    statusCount.statusInvalid,
                    statusCount.statusCritical,
                    statusCount.statusComplete,
                    statusCount.statusClosed
                ],
                backgroundColor: 
                [
                    '#92a6b2',
                    '#3a4775',
                    '#060e19',
                    '#0f2442',
                    '#263f99',
                    '#3b4a63',
                    '#4d61a8'
                ],
                borderWidth: 0,
                hoverBackgroundColor: '#ffb238'
                }],
            }
        }
    let defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'bottom'
    }
    return (
        <div className="chart">
            <Pie
                data={dataObj.chartData}
                width={90}
                height={70}
                options={{
                    title:{
                        display: defaultProps.displayTitle,
                        text: 'Status',
                        fontSize: 25
                    },
                    legend:{
                        display: defaultProps.displayLegend,
                        position: defaultProps.legendPosition
                    }
                }}
            />
        </div>
    );
}

const MapStateToProps = (state) => {
    const visibleTasks = selectTasks(state.tasks, state.filters);
    const taskCountTot = state.tasks.length;
    return{
        taskCount: visibleTasks.length,
        taskCountTotal: taskCountTot,
        statusCount: StatusCount(visibleTasks)
    };
};

export default connect(MapStateToProps)(Chart);