import numeral from 'numeral';
export default (tasks) => {
    if(tasks.length === 0){
        return 0;
    }else{
        return tasks.length;
    }
};