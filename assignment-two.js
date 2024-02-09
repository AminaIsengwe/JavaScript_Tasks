// 1. Filter and show the product that will be bought when you don't have much money (Cheap one)
// 2. Filter and show the product that will be expensive in the array
// 3. Calculate the full price of all products combined
// 4. Calculate the full price of all products combined and remove products that are under $10
// 5. Filter and show the product that will be start with letter b at first postion
const items = [
    {name: 'Bike', price:100},
    {name: 'TV', price:200},
    {name: 'Album', price:10},
    {name: 'Book', price:5},
    {name: 'Phone', price:500},
    {name: 'Computer', price:1000},
];

const cheap=items.filter(i=>i.price<=10)
console.log(cheap)
const expensive=items.filter(i=>i.price>=500)
console.log(expensive)
const full=items.reduce((x,y)=> {return x+y.price},0)
console.log(full)
const greater=items.filter(i=>i.price>=10)
const sum=greater.reduce((x,y)=> {return x+y.price},0)
console.log(sum)
const startb=items.filter((element)=> element.name.toLowerCase().startsWith('b'))
console.log(startb)
