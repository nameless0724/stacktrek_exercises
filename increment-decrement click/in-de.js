const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const num = document.querySelector(".num");

let x = 0;
plus.addEventListener("click", ()=>{
    x++;
    x = (x < 10) ? "0" + x : x;
    num.innerText = x;
    console.log(x);
})

minus.addEventListener("click", ()=>{
    if(x > 0){
        x--;
        x = (x < 10) ? "0" + x : x;
        num.innerText = x;
    }
})