
let randomArray = ['Barry', 'Berry', 'Sjakie', 'Frrits', 'Fristi', 'Meneer Pannenkoek']

let nameFilter = function(array) {
    array.forEach(function (name) {
        return name.includes('rr');
    })
}

console.log(nameFilter(randomArray))



/*
const words = ['Barry', 'Berry', 'Sjakie', 'Frrits', 'Fristi', 'Meneer Pannenkoek'];


const result = words.filter(function (word) {
    return word.includes('rr');
})
console.log(result);
*/

