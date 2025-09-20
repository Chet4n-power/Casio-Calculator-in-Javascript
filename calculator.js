let screen = document.querySelector("#display")
console.log(screen);


let b = document.getElementsByClassName("btn")
console.log(b);
for(let i = 0; i < b.length; i++)
{
    b[i].addEventListener("click", ()=>{screen.value = screen.value + b[i].innerHTML})
}
let c = document.getElementById("x")
c.addEventListener("click",() => {screen.value = null})

let d = document.getElementById("y")
d.addEventListener("click", () => {screen.value = screen.value.slice(0,-1)})

let answers = document.getElementById("ans")
answers.addEventListener("click", () => { let newval = eval(screen.value).toString(); screen.value = newval;})