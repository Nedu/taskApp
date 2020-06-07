import React, { useState } from 'react';
import { ListItem, ListItemIcon, Checkbox, ListItemText, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import './Task.scss';
import { dateFormat } from '../../utils/dateFormat';
import { CustomDialog } from '../dialog/Dialog';
import EditTaskForm from '../taskForm/EditTaskForm';

const Task = ({ id, title, description, completed, dueDate, toggleCheck, deleteTask, editTask }) => {
    const [isOpen, setIsOpen ] = useState(false)

    const handleDialogOpen = () => {
        setIsOpen(true)
    }

    const handleDialogClose = () => {
        setIsOpen(false)
    }

    return (
        <>
            <ListItem className='taskItem'>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={completed}
                        disableRipple
                        inputProps={{ 'aria-labelledby': id }}
                        color="primary"
                        onClick={() => toggleCheck(id)}
                    />
                </ListItemIcon>
                <ListItemText
                    id={id}
                    completed={completed ? 1 : 0}
                    primary={title}
                    secondary={<Typography style={{ color: dateFormat(dueDate).color}}>{dateFormat(dueDate).text}</Typography>}
                    // style={{ color: dateFormat(dueDate).color}}
                />
                <EditIcon onClick={handleDialogOpen} color="primary" />
                <DeleteIcon onClick={() => deleteTask(id)}  />

                <CustomDialog 
                    isOpen={isOpen} 
                    handleClose={handleDialogClose}
                    title='Edit task'
                >
                    <EditTaskForm currentTask={{id, title, description, completed, dueDate}} editTask={editTask} handleDialogClose={handleDialogClose}  />
                </CustomDialog>
            </ListItem>  
        </>
    )
}

export default Task;