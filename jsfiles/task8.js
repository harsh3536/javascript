const randomColor = function () {
    const hex = "0123456789ABCDEFGF"
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

// console.log(randomColor())

let z
function start() {
    function changeColor() {
        document.body.style.backgroundColor = randomColor()
    }
    z = setInterval (changeColor,1000)
}
function stop() {
    clearInterval(z)
}

document.querySelector("#start").addEventListener("click", start)
document.querySelector("#stop").addEventListener("click", stop)

document.querySelector("body").style.backgroundColor = "black"
document.querySelector("h1").style.color = "white"