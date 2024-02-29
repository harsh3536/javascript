/* let num = [21,12,5,12,4,21,48,21,48];
delete num[1]
console.log(num.length); */


/* let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19];

let newArray = num.concat(num_more);
console.log(newArray);

console.log(num);
console.log(num_more); */

// Sort Method

/* let compare = (a, b) => {
    // return a - b;  // asseding order  use to compare function
    return b - a;       // desseding order
}
let num = [21215, 121, 21, 315, 51, 1, 5, 11, 2, 5151]
num.sort(compare);
console.log(num); */

/* let re = [3,45,2,421,8,41,84,1,24,]
re.reverse()
console.log(re); */


// Splice Method

/* let num = [21215, 121, 21, 315, 51, 1, 5, 11, 2, 5151]
num.splice(1, 4, 1111, 2222, 3333, 4444, 5555)
console.log(num); */

// show Delete item in splice method


/* let num = [21215, 121, 21, 315, 51, 1, 5, 11, 2, 5151]
let delete_item = num.splice(1, 4, 1111, 2222, 3333, 4444, 5555)
console.log(delete_item); */


let num = [21215, 121, 21, 315, 51, 1, 5, 11, 2, 5151]

let new_num = num.slice(1 ,5);

console.log(new_num);