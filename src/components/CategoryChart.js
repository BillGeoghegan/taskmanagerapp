import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import { connect } from 'react-redux';
import {CategoryCount} from '../selectors/tasksTotal';
import selectTasks from '../selectors/tasks';

export const Chart = ({taskCount, taskCountTotal, categoryCount}) => {
    let dataObj = {
        chartData: {
            labels: ['Professional','Personal', 'Leisure', 'Family','Multiple', 'Other'],
            datasets: [{
                label: 'Task Categories',
                data: 
                [
                    categoryCount.professionalCategory,
                    categoryCount.personalCategory,
                    categoryCount.leisureCategory,
                    categoryCount.familyCategory,
                    categoryCount.multipleCategory,
                    categoryCount.othercategory,
                ],
                backgroundColor: 
                [
                    '#12593f',
                    '#249e71',
                    '#50ce89',
                    '#9ee2bd',
                    '#74bcb3',
                    '#3d685d'
                ],
                borderWidth: 0,
                borderColor: '#777',
                hoverBackgroundColor: '#FF991F'
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
                        text: 'Categories',
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
        categoryCount: CategoryCount(visibleTasks)
    };
};

export default connect(MapStateToProps)(Chart);