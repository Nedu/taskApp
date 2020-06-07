import React, { useState, useEffect } from 'react';
import { List } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import moment from 'moment';

import { CustomDialog } from '../../components/dialog/Dialog';
import AddTaskForm from '../../components/taskForm/AddTaskForm';
import TASK_DATA from '../tasks/TaskData';
import '../tasks/Task.scss'
import Task from '../../components/task/Task';

const Today = () => {
    const initialTasks = () => JSON.parse(window.localStorage.getItem('TASK_DATA')) || TASK_DATA
    const [tasks, setTasks ] = useState(initialTasks)
    const [isOpen, setIsOpen ] = useState(false)

    const handleDialogOpen = () => {
        setIsOpen(true)
    }

    const handleDialogClose = () => {
        setIsOpen(false)
    }

    const addTask = task => {
        setTasks([...tasks, task])
    };

    const toggleCheck = id => {
        const tasks = JSON.parse(window.localStorage.getItem('TASK_DATA'))
        const updatedTask = tasks.find(task => task.id === id)
        updatedTask.completed = !updatedTask.completed
        setTasks(tasks)
    }

    const deleteTask= id => {
        const tasks = JSON.parse(window.localStorage.getItem('TASK_DATA'))
        const filteredTasks = tasks.filter(task => task.id !== id)
        setTasks(filteredTasks)
    }

    const editTask = (id, updatedTask) => {
        const tasks = JSON.parse(window.localStorage.getItem('TASK_DATA'))
        const updatedTasks = tasks.map(task => {
            if(task.id === id) {
                return {
                    ...updatedTask
                }
            } else {
                return task
            }
        })
        setTasks(updatedTasks)
    }

    useEffect(() => {
        window.localStorage.setItem('TASK_DATA', JSON.stringify(tasks))
    }, [tasks])

    return (
        <div className='tasksContainer'>
            <h1>Today</h1>
            <h3>Overdue</h3>
            <div className='taskType'>
                {
                    tasks.filter(task => task.completed !== true &&  moment(task.dueDate).isBefore(moment().format('ll'), 'day'))
                    .map(({ id, ...overdueTaskProps }) => <Task key={id} {...overdueTaskProps} id={id} toggleCheck={toggleCheck} deleteTask={deleteTask} editTask={editTask} />)
                }
            </div>
            <h3>Today</h3>
            <List className='taskType'>
                {
                    
                    tasks.filter(task => task.completed !== true && moment(task.dueDate).isSame(moment().format('ll'), 'day')).map(({ id, ...otherTaskProps }) => <Task key={id} {...otherTaskProps} id={id} toggleCheck={toggleCheck} deleteTask={deleteTask} editTask={editTask} />)
                }
            </List>
            <div>
                <span className='addTask'><AddCircleIcon className='addTaskIcon' onClick={handleDialogOpen} />Add Task</span>
            </div>
            <CustomDialog 
                isOpen={isOpen} 
                handleClose={handleDialogClose}
                title='Add new task'
            >
                <AddTaskForm addTask={addTask} handleDialogClose={handleDialogClose}  />
            </CustomDialog>
        </div>
    );
};

export default Today;