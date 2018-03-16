import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';


export default class TaskForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            description: props.task ? props.task.description : '',
            note: props.task ? props.task.note : '',
            createdAt: props.task ? moment(props.task.createdAt) : moment(),
            dueDate: props.task ? moment(props.task.dueDate) : moment(),
            calendarFocused: false,
            error: undefined
        };
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onNoteChange = (e) => {
        const note = e.target.value;    //must set it to variable as it's a live state and constantly changing...
        this.setState(() => ({ note }))
    };
    onDateChange = (dueDate) => {
        if(dueDate){
            this.setState( () => ({dueDate}));
        }
    };
    onFocusChange = ({focused}) => {
        this.setState( () => ({calendarFocused: focused}));
    };
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description){
            this.setState( () => ({error: 'Please provide description of task.'}));
        } else {
            // Clear the error
            this.setState( () => ({error: undefined}));
            this.props.onSubmit({
                description: this.state.description,
                createdAt: this.state.createdAt.valueOf(),
                dueDate: this.state.dueDate.valueOf(),
                note: this.state.note
            })
            console.log('Submitted.');
        }
    };
    render() {
        return (
                <form className="form" onSubmit={this.onSubmit}>
                    {this.state.error && <p className="form__error">{this.state.error}</p>}
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        className="text-input"
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <SingleDatePicker 
                        date={this.state.dueDate}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}              //Show only one month picker instead of 2 default
                        isOutsideRange={() => false}    //Make every day false without any logic test
                    />
                    <textarea
                        className="textarea"
                        placeholder="Add a note about your task (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <div>
                        <button
                            className="button"
                            type="submit"
                            value="Submit"
                        >Save Task</button>
                    </div>
                </form>
        )
    }
}