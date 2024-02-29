const car = {
    name: "Swift",
    color: "Black",
    model: 232
}
const car2 = {
    name2: "Creta",
    color2: "White",
    model2: 333
}

const newCarObj = { ...car, ...car2 }
console.log(newCarObj);

// console.log(car);
// console.log(car.name);
// console.log(car.model);


const itemObj = {
    Sname : "Bhuro",
    Sid : "Aadhar Card",
    Roll_no : 20,
    Age : 19
}
itemObj.Age =  36 // Chnage the obj Value
console.log(itemObj.Sname);
console.log(itemObj["Roll_no"]);


const course = {
    coursename : "Code With Js",
    price : "$400",
    age :30
}

const {coursename :cn} = course

// console.log(coursename);
console.log(cn);


/* const arr = [1, 523, 563, 59, 78, 66]

const arr2 = arr.map((value , index, array) => {
   return value+2
})  
console.log(arr2); */


/* const arr = [1, 523, 563, 59, 78, 66, 9,3]

const arr2 = arr.filter((value, index) => {
    return value > 500 
})
console.log(arr2); */
/* 
const arr = [1, 523, 563, 59, 78, 66, 9, 3]

const arr2 = arr.reduce((h, hh) => {
    return h + hh
})
console.log(arr2); */
/* 
const shubham = (g) =>{
    console.log("Magan Choru Nirjar");
}

const nirjar = (s ,p) =>{
    shubham()
    return s+p
}
console.log(nirjar(2141,310)); */