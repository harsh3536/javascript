const arr = [1, 2, "Harsh", 512, 12, 21];
// const arr2 = [1, 2, "Harsh", 512, 12, 21];


// const newarr = arr.push(3);
// console.log(newarr);
// console.log(arr);

// const newarr = arr.pop();
// console.log(newarr);

// const newarr = arr.slice(1, 3);
// console.log(newarr);


// const newarr = arr.splice(1, 2,5,13,321,541,1,23);
// console.log(newarr);
// console.log(arr);

// const newarr = arr.join("-");
// console.log(newarr);



// const newarr = arr.unshift(32);
// console.log(newarr);
// console.log(arr);

// const newarr = arr.shift();
// console.log(newarr);

// const newarr = arr.toString();
// console.log(newarr);

// const newarr = arr.at(5);
// console.log(newarr);


// delete arr[2]
// console.log(arr);

// const newarr = arr.concat(arr2);
// console.log(newarr);

// const newarr = arr.copyWithin(4);
// console.log(newarr);


// const arr3 = [[1,2],[3,4,],[5,6]]
// console.log(arr3.flat());

// const newarr = arr.toSpliced(0,2);
// console.log(newarr);
/* 
const c = (a,b)=>{
    return a-b;   // assendng order
    // return b-a;
}
const newarr = arr.sort(c);
console.log(newarr); */

// const newarr = arr.reverse();
// console.log(newarr); 


const arr2 = ["Harsh", 512, 12, 21,5];

const c = (value)=>{
    return value < 18;   
}

const newarr = arr2.findIndex(c);
console.log(newarr); 