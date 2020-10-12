//====================METHOD FOREACH ROGER

const allcars = {}

myeach = (array, callback) => {
    for(let i = 0; i < array.length; i++) {
        callback(array[i], i);
    }
}

console.log(allcars);

const cars = [1, 4, 50, 38, 9, 19];

myeach(cars, function(car, index){
    console.log(`The element ${car} is at position ${index}`)
})

//=====================METHOD FILTER ROGER

function myFilter(array, callback) {
    const newArray = [];
    for(let i = 0; i < array.length; i++ ) {
        if(callback(array[i]) === true) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

function getyoungs(age) {
    return age < 35;
}

const ages = [42, 68, 21, 19, 25, 56, 33];

const young = myFilter(ages, getyoungs);
console.log(young);

//======================METHOD MAP ROGER
const guitars = [10, 800, 450, 25, 78, 90, 761, 54, 1678];
function multiGuitars(guitars) {
    return guitars * 10;
}

function myMap(array, callback) {
    const newArray = [];
    for(var i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]));
    }

    return newArray;
}

const amountGuitars = myMap(guitars,multiGuitars);

console.log(amountGuitars);

//=========================METHOD FIND ROGER

const array = [1.5, 2, 450, 350124, 800, 2580];

myFind = (array, callback) => {
    let number = 0;
    for (let i = 0; i < array.length; i++){
       number = callback(array[i]);
       if(number)  {
            number = array[i];
            return number;
        }
    }
    
}

let numbers = array.find(element => element < 3);

function lowNumber(number) {
    return number < 3;
}

const test = myFind(array, lowNumber);

console.log(test);

//=========================METHOD FIND INDEX ROGER

const financesBooks = [
    {name: 'Father Rich father poor', price: '20$'},
    {name: 'Financial Wisdom: Money is made in the Mind', price:'16,35$'},
    {name: 'The little book to invest with common sense', price:'14$'}
]

let book = financesBooks.findIndex (bk => bk.name === 'Father Rich father poor')

myfindIndex = (array, callback) => {
    for (let i = 0; i < array.length; i++){
        if(callback(array[i])) {
            return i;
        }
    }
}

const positions = myfindIndex((financesBooks), (index) => {
    return index.name === 'Father Rich father poor';
})

console.log(positions);


//======================METHOD CONTAINS ROGER
const containsNames = ['Roger','Yehezkel','Reyes','Yeshayahú'];

function myContains(array, callback) {
    
    for(let i=0; i < array.length; i++) {

        if(callback(array[i])){
            return true;
        }
    }

} 

function findNames(user) {
    return user == 'Reyes';
}

const proofContains = myContains((containsNames), (findNames) => {
    return findNames == 'Reyes';
})

console.log(proofContains);

//==========================METHOD PLUCK ROGER

const modelsGuitars = [
    {model: 'Carvin', color:'blue'},
    {model: 'Gibson', color:'red'},
    {model: 'Fender', color:'yellow'}
]

function myPluck(array, callback) {
    const data = [];
    for(let i=0; i<array.length; i++) {
        data.push(callback(array[i]));
    }
    return data;
}

const testPluck = myPluck((modelsGuitars), (findModelsGuitar) => {
    return findModelsGuitar.model;
})

console.log(testPluck);

//=======================METHOD WITH OUT ROGER

const stackNumbers = [100, 5, 400, 80, 211, 4, 5, 1, 1]

function myWithOut(array, callback) {
    const newArray = [];
    for(let i=0; i < array.length; i++) {
        if(callback(array[i])){
            newArray.push(array[i])
        }
    }
    return newArray;
}

const stackWithOut = myWithOut((stackNumbers), (remove) => {
    return remove !== 1 && remove !== 5 ;
})

console.log(stackWithOut);
