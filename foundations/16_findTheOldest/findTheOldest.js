const findTheOldest = function(arr) {
    return arr.reduce((oldestPerson, currentPerson) => {
        let currentDeathYear;
        let oldestDeathYear;
        if (!Object.hasOwn(currentPerson, "yearOfDeath")) {
            currentDeathYear = new Date().getFullYear()
        } else {
            currentDeathYear = currentPerson.yearOfDeath
        }
        if (!Object.hasOwn(oldestPerson, "yearOfDeath")) {
            oldestDeathYear = new Date().getFullYear()
        } else {
            oldestDeathYear = oldestPerson.yearOfDeath
        }
        const oldestPersonAge = oldestDeathYear - oldestPerson.yearOfBirth
        const currentPersonAge = currentDeathYear - currentPerson.yearOfBirth
        if (currentPersonAge > oldestPersonAge) {
            return currentPerson
        } else {
            return oldestPerson
        }
    })
};

// Do not edit below this line
module.exports = findTheOldest;
