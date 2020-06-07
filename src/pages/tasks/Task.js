import React, { useState, useEffect } from 'react';
import { List } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import TASK_DATA from './TaskData';
import Task from '../../components/task/Task';
import './Task.scss';
import AddTaskForm from '../../components/taskForm/AddTaskForm';
import { CustomDialog } from '../../components/dialog/Dialog';

const Tasks = () => {
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
            <h1>Tasks</h1>
            <List>
                {
                    tasks.filter(task => task.completed !== true).map(({ id, ...otherTaskProps }) => <Task key={id} {...otherTaskProps} id={id} toggleCheck={toggleCheck} deleteTask={deleteTask} editTask={editTask} />)
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

export default Tasks;