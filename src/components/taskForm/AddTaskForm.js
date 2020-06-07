import React, { useState } from 'react';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import TextField from '@material-ui/core/TextField';
import MomentUtils from '@date-io/moment';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

import './TaskForm.scss';
import { Button } from '@material-ui/core';

const AddTaskForm = ({ addTask, handleDialogClose }) => {
    const [task, setTask] = useState({ title: '', description: '', dueDate: moment().format('ll'), completed: false });
    
    const handleChange = (event, dateType) => {
        if (dateType) {
            setTask({ ...task, dueDate: moment(event).format('ll') });
        } else {
            setTask({ ...task, [event.target.name]: event.target.value });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        task.id = uuidv4()
        addTask(task);
        handleDialogClose()
    }

    return (
        <form
            className='taskForm'
            onSubmit={handleSubmit}
        >
            <TextField
                variant="outlined"
                placeholder="Task title"
                margin="normal"
                onChange={handleChange}
                name="title"
                value={task.title}
            />
            <TextField
                id="filled-multiline-static"
                label="Task Description"
                multiline
                rows={4}
                placeholder="Task Description"
                variant="filled"
                name="description"
                value={task.description}
                onChange={handleChange}
            />
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="ll"
                    margin="normal"
                    id="date-picker-inline"
                    label="Date picker"
                    name="dueDate"
                    value={task.dueDate}
                    onChange={(event, dateType) => handleChange(event, dateType='yes')}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    />
            </MuiPickersUtilsProvider>
            <Button className='formButton' type='submit' disabled={!task.title || !task.description || !task.dueDate}>Add Task</Button>
        </form>
    );
};

export default AddTaskForm;