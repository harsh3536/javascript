// New array Value 

let num = [20, 30, 40];

let a = num.map((value,index,array)=>{
    console.log(value,index,array);
    return value + 1; 
})

console.log(a);