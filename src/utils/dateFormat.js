import moment from 'moment';

export const dateFormat = (dueDate) => {
    const now = moment()
    const due = moment(dueDate).format("YYYY-MM-DD")
    const today = moment().format("YYYY-MM-DD")
    const dueDateFormatted = moment(dueDate).format("MMMM Do YYYY")
    const tomorrow = moment(now.add(1, 'days')).format("MMMM Do YYYY");
    const yesterday = moment(now.subtract(2, 'days')).format("MMMM Do YYYY");
    const dueDateFinal = {
        color: '',
        text: ''
    };

    if(today === due) {
        dueDateFinal.text = 'Due Today';
        dueDateFinal.color = '#419F56';
    } else {
        if(moment(due).isBefore(today)) {
            dueDateFinal.color = '#D44F46';
            if(dueDateFormatted === yesterday) {
                dueDateFinal.text = 'Due Yesterday';
            }else {
                dueDateFinal.text = `Due ${dueDateFormatted}`;
            }
        } else {
            dueDateFinal.color = '#3F51B5';
            if(dueDateFormatted === tomorrow) {
                dueDateFinal.text = 'Due Tomorrow';
            } else {
                dueDateFinal.text = `Due on ${dueDateFormatted}`;
            }
        }
    }
    return dueDateFinal;
}
