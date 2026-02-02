/*let x = 10;
let y = 5;
console.log("Sum:", x + y);
console.log("Difference:", x - y);
console.log("Product:", x * y);
console.log("Quotient:", x / y); 
*/

/*let x = true
let y = "Hello world"
console.log(x, y) */
/*
let x = [1, 2, 3, 4, 5]
console.log(x[0]) //access 1
console.log(x[1]) //access 2
console.log(x[2]) //access 3
console.log(x[3]) //access 4
console.log(x[4]) //access 5 

console.log(x.length) //length of array*/

/*let x = [1, 4, [2, 3], true, false, "hello", "world"]
for (let i = 0; i < x.length; i++) {
    console.log(x[i])
}*/

/*let x = [12, 2+3, [true,5], 0, 1, "Hello", "World"]
let y  = (x[5])
console.log(x[2][0]) //access true in nested array
console.log(x[2][1]) //access 5 in nested array
console.log(y)*/

/*let x = [12, 2+3, [true,5], 0, 1, "Hello", "World"]
for (let i = 0; i < x.length; i++) {
    if (typeof x[i] === "number") {
        console.log(x[i])
    }
}*/

/*let x = []
x[0] = 100
console.log
x[7] = 544
console.log(x)*/

//PRINT THE UNIQUE ELEMENTS FROM TWO ARRAYS

/*let y = [0, 0 , 1, 2, 1, 3, 3 ,5, 5]
let x = [1, 1, 1, 2, 2, 3 ,3, 4, 4, 9]

for (let i = 0; i < x.length; i++){ 
    if (counts[x[i]]){
        counts[x[i]] ++
    }
    else {
        counts[x[i]] = 1
    }
}    

for (let i = 0; i < y.length; i++) {
    if (counts[y[i]]){
        counts[y[i]] ++
    }
    else {
        counts[y[i]] = 1
    }
    
}*/

/*let y = [0, 0 , 1, 2, 1, 3, 3 ,5, 5]
let x = [1, 1, 1, 2, 2, 3 ,3, 4, 4, 9]

console.log("Unique in x:")
for (let i = 0; i < x.length; i++) {
    if (x.indexOf(x[i]) === x.lastIndexOf(x[i])) {
        console.log(x[i])
    }
}

console.log("Unique in y:")
for (let i = 0; i < y.length; i++) {
    if (y.indexOf(y[i]) === y.lastIndexOf(y[i])) {
        console.log(y[i])
    }
}*/

/*let y = [0, 0 , 1, 2, 1, 3, 3 ,5, 5]
let x = [1, 1, 1, 2, 2, 3 ,3, 4, 4, 9]
for (let i = 0; i < x.length; i++) {
    let counter = 0
    for (let j = 0; j < x.length; j++) {
        if (x[i] === x[j]) {
            counter+=1
        }
    }
    if (counter === 1) {
        console.log(x[i])
    }
}*/

//^^^ REPEAT FOR Y ARRAY ^^^