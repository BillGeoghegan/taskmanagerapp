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
            status: props.task ? props.task.status : '',
            category: props.task ? props.task.category : '',
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
    onStatusChange = (e) => {
        const status = e.target.value.toString();
        this.setState(() => ({ status }));
    };
    onCategoryChange = (e) => {
        const category = e.target.value.toString();
        this.setState(() => ({ category }));
    };
    onFocusChange = ({focused}) => {
        this.setState(() => ({calendarFocused: focused}));
    };
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description){
            this.setState(() => ({error: 'Please provide description of task.'}));
        } else {
            this.setState( () => ({error: undefined}));
            this.props.onSubmit({
                description: this.state.description,
                createdAt: this.state.createdAt.valueOf(),
                dueDate: this.state.dueDate.valueOf(),
                note: this.state.note,
                status: this.state.status,
                category: this.state.category
            });
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
                    <div className="select-dropdowns">
                        <p>Status:</p>
                        <select
                            className="select-option"
                            value={this.state.status}
                            onChange={this.onStatusChange}
                        >
                            <option value="Created" className="option good">Created</option>
                            <option value="Ongoing" className="option good">Ongoing</option>
                            <option value="Onhold" className="option bad">On hold</option>
                            <option value="Invalid" className="option bad">Invalid</option>
                            <option value="Critical" className="option bad">Critical</option>
                            <option value="Complete" className="option good">Complete</option>
                            <option value="Closed" className="option neutral">Closed</option>
                        </select>
                        <p>Category:</p>
                        <select
                            className="select-option"
                            value={this.state.category}
                            onChange={this.onCategoryChange}
                        >
                            <option value=""></option>
                            <option value="Personal">Personal</option>
                            <option value="Professional">Professional</option>
                            <option value="Family">Family</option>
                            <option value="Leisure">Leisure</option>
                            <option value="Multiple">Multiple</option>
                        </select>
                    </div>
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