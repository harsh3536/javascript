let t = document.body.firstElementChild.firstElementChild
console.log(t);
console.log(t.rows);
console.log(t.caption);
console.log(t.tHead);


// let ctitle = document.getElementById("Cardid")
// ctitle.style.color = 'red'


let ctitles = document.querySelectorAll(".card-title")
ctitles[0].style.color = "red"
ctitles[1].style.color = "yellow"
ctitles[2].style.color = "orange"