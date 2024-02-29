const nums = [1,2,3,4]

const myNums = nums.reduce( (aac , currval) => {
    console.log(`accumelator: ${aac} and current Value : ${currval}`);
    return aac + currval;
} , 10)
console.log(myNums);

const shoppingCart = [
    {
        course : "js",
        price : 3000
    },
    {
        course : "python",
        price : 6000
    },
    {
        course : "java",
        price : 5000
    }
]

const cart = shoppingCart.reduce( (acc , item) =>{
    return acc + item.price;
} , 1000)

console.log(cart);

// const arr = [1,2,3,4,5]

// const newarr = arr.reduce((h1,h2)=>{
//     return h1 +h2
// })
// console.log(newarr);