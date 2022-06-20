let randomArray = ['Barry', 'Berry', 'Sjakie', 'Frrits', 'Fristi', 'Meneer Pannenkoek']

let myFilter = function (array) {
    array.forEach(function(name) {
        if (name.includes('rr')) {
            return name;
        } else {
            return;
        }
    })
    console.log(array);
    Array.from(array);
}

console.log('Array voor function:', randomArray); 

let filteredArray = myFilter(randomArray);

console.log('Array na function:', filteredArray)
