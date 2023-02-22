// var fruits = ["orange", "apple", "banana"];
// console.log(fruits);

// var len = fruits.length;
// console.log(len);

var veggies = new Array(3);
veggies = ["mushroom", "capsicum", "tomato", "onion"]
console.log(veggies);

var trees = new Array("Palm", "Coconut", "Mango");
console.log(trees)

trees.push('Guava');
console.log(trees)

trees.pop()
console.log(trees)

trees.unshift('Orange')
console.log(trees)

trees.shift()
console.log(trees)

trees.reverse()
console.log(trees)

trees.sort()
console.log(trees)

let k = trees.splice(0, 2)
console.log(trees)
console.log(k)

trees.splice(2,2, trees[0], trees[0]);
console.log(trees)

var onlyPalm = trees.concat(trees);
console.log(onlyPalm)

trees = ["Palm", "Coconut", "Mango"];
console.log(onlyPalm.indexOf('Palm'))
console.log(onlyPalm.lastIndexOf('Palm'))

console.log(onlyPalm.join('-'))

// using -1 is only in python
console.log(trees.slice(-3));

let fruits = ['Grapes', 'Orange', 'Apple', 'Pine-apple', 'Banana', 'Custard','kiwi']

// Every method
console.log(fruits.every((str)=>{
    if(str.length>4)
        return true;
    else
        return false;
}))


// Filter method
var smallFruits = fruits.filter((str)=>{
    if(str.length<=5)
        return true;
    else
        return false;
})
console.log(smallFruits)


// Find method
console.log(fruits.find((str)=>{
    return str.includes('k');
}))


// forEach method
fruits.forEach((element)=>{
    console.log(element.includes('a') || element.includes('e'));
})

// reduce method

var palmFarm = onlyPalm.reduce((element, total)=>{
    total+=element;
    return total;
})

console.log(palmFarm);