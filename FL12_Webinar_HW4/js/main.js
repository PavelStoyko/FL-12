/*task1*/
const maxElement = (arr) => Math.max(...arr);
/*task2*/
    function copyArray(arr) {
        return [...arr];
    }
    const array = [1, 2, 3];
    const copiedArray = copyArray(array);
    console.log(array, copiedArray);
    console.log(array === copiedArray);
/*task3*/
const object = {name: 123};
const destrObj = {...object};
const addUniqueId = (destrObj) => ({...destrObj, id: Symbol('id')});
console.log(addUniqueId(object));
/*task4*/
const oldObj = { name: "Someone", details: { id: 1, age: 11, university: 'UNI' } }
const regroupObject = (oldObj) => {
    return newObj = {
        university: oldObj.details.university,
        user: {
            age: oldObj.details.age,
            firstName: oldObj.name,
            id: oldObj.details.id
        }
    }
}
/*task5*/
    function findUniqueElements(arr) {
        const set = new Set(arr);
        return [...set];
    }
    const array = [1, 1, 23, 3, 4, 5, 6, 5, 4, 23, 2, 1, 1, 1, 1, 1];
    console.log(findUniqueElements(array));
/*task6*/
const phoneNumber = '0123456789';
const hideNumber = num => num.slice(-4).padStart(num.length,'*');
console.log(hideNumber(phoneNumber));
/*task7*/
const required = () => {
    throw new Error('Missing property');
};
function add(a = required(), b = required()) {
    return a + b;
}
/*task8*/
const getName = () => {
    const fetchPromise = fetch('https://jsonplaceholder.typicode.com/users');
    return fetchPromise.then(response => response.json())
        .then(users => {
            const res = users.map(user => user.name).sort();
            console.log(res);
        }).catch(error => {
            console.log(`Error: ${error}`);
        })
};
/*task9*/
    async function logNamesAsync(url) {
        try {
            const response = await fetch(url);
            const users = await response.json();
            const names = [];
            for (let user of users) {
                names.push(user.name);
            }
            names.sort();
            console.log(names);
        } catch (error) {
            console.log(`ERROR: ${error.stack}`);
        }
    }