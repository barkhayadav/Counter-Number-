let count=0;
let value=document.querySelector(".value");
let increase=document.querySelector(".increase");
let decrease=document.querySelector(".decrease");
let reset=document.querySelector(".reset");

increase.addEventListener("click",function(){
    count++;
value.textContent=count;
})
decrease.addEventListener("click",function(){
    count--;
value.textContent=count;
})
reset.addEventListener("click",function(){
    count=0;
value.textContent=count;
})
