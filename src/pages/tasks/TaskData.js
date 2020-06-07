import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

const TASK_DATA = [
    {
        id: uuidv4(),
        title: 'Shopping',
        description: 'Go grocery shopping for the family',
        completed: true,
        dueDate: moment().format('ll')
    },
    {
        id: uuidv4(),
        title: 'Study',
        description: 'Study for exams',
        completed: false,
        dueDate: moment().format('ll')
    }
]

export default TASK_DATA