// 1. Create a navbar and change the color of its first element to red.

// 2. Create a table without tbody. Now use "view page source" button to check whether it has a tbody or not.

// 3. Create an element with 3 children. Now change the color of first and last element to green.

// 4. Write a JS code to change background of all <li> tags to cyan.

// 5. Which of the following is used to look for the farthest ancestor that matches a given CSS selector.

// a) matches    b) closest

// c) contains    d) none of these

//      Q1

document.getElementsByTagName("ul")[0].firstElementChild.style.color = "red"

//      Q2

// Ans : No

//      Q3


document.getElementsByTagName("div")[0].firstElementChild.style.color = "green"
document.getElementsByTagName("div")[0].lastElementChild.style.color = "green"

// let ans = document.querySelectorAll("p");
// ans[0].style.color = "green"
// ans[2].style.color = "green"

//      Q4

Array.from(document.getElementsByTagName("li")).forEach((element)=>{
    element.style.color = "cyan";
})


//      Q5

// none of these
