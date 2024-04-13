const findTheOldest = function(array) {
    const currentYear = new Date().getFullYear();

    let oldest = {
        name: "",
        age: -Infinity // Initialize age with negative infinity to ensure any person's age will be greater
    };

    for (let i = 0; i < array.length; i++) {
        const person = array[i];

        // If year of death is undefined, set it to the current year
        if (person.yearOfDeath === undefined) {
            person.yearOfDeath = currentYear;
        }

        // Calculate the age of the person
        const age = person.yearOfDeath - person.yearOfBirth;

        // Update the oldest object if the current person is older
        if (age > oldest.age) {
            oldest.name = person.name;
            oldest.age = age;
        }
    }

    return oldest; // Return the object containing the name and age of the oldest person
};

module.exports = findTheOldest;
