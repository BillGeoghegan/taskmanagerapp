import numeral from 'numeral';

export const CategoryCount = (tasks) => {
    //Reset count on filter change:
    let professionalCat = 0;
    let PersonalCat = 0;
    let leisureCat = 0;
    let familyCat = 0;
    let multipleCat = 0;
    let other = 0;
    //Count categories:
    tasks.map(task => {
        if(task.category=='Multiple'){
            multipleCat++;
        }if(task.category=='Professional'){
            professionalCat++;
        }else if(task.category=='Personal'){
            PersonalCat++;
        }else if(task.category=='Leisure'){
            leisureCat++;
        }else if(task.category=='Family'){
            familyCat++;
        }else{
            other++;
        }
    });
    let categoryCount = {
        professionalCategory: professionalCat,
        personalCategory: professionalCat,
        leisureCategory: leisureCat,
        familyCategory: familyCat,
        multipleCategory: multipleCat,
        othercategory: professionalCat
    }
    return categoryCount;
};

export const StatusCount = (tasks) => {
    //Reset count on filter change:
    let statCreated = 0;
    let statOngoing = 0;
    let statOnhold = 0;
    let statInvalid = 0;
    let statCritical = 0;
    let statComplete = 0;
    let statClosed = 0;
    //Count categories:
    tasks.map(task => {
        if(task.status=='Created'){
            statCreated++;
        }if(task.status=='Ongoing'){
            statOngoing++;
        }else if(task.status=='Onhold'){
            statOnhold++;
        }else if(task.status=='Invalid'){
            statInvalid++;
        }else if(task.status=='Critical'){
            statCritical++;
        }else if(task.status=='Complete'){
            statComplete++;
        }else if(task.status=='Closed'){
            statClosed++;
        }
    });
    let statusCount = {
        statusCreated: statCreated,
        statusOngoing: statOngoing,
        statusOnhold: statOnhold,
        statusInvalid: statInvalid,
        statusCritical: statCritical,
        statusComplete: statComplete,
        statusClosed: statClosed
    }
    return statusCount;
};
