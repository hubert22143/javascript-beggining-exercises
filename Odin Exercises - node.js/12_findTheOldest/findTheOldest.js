const findTheOldest = function(peoples) {
    const oldestPerson = peoples.reduce((oldest,current)=> {
        const ageOldest = oldest.yearOfDeath ? oldest.yearOfDeath - oldest.yearOfBirth : new Date().getFullYear() - oldest.yearOfBirth;
        const ageCurrent = current.yearOfDeath ? current.yearOfDeath - current.yearOfBirth : new Date().getFullYear() - oldest.yearOfBirth;
        if(!current.yearOfDeath){
            return current;
        }
        return ageOldest > ageCurrent ? oldest : current;
    });
    return oldestPerson;

};


// Do not edit below this line
module.exports = findTheOldest;
