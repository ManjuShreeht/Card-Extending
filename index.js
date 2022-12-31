// document.getElementsByTagName("div").innerHTML="<h1>hii</h1>"
// let x=document.getElementsByClassName('c');
// x[1].innerHTML="pppppppppp";

// let s=document.querySelector('div').style.color="green";
// console.log(s);
// s.forEach(v=>{
//     v.style.color="red";
// })

let x=document.querySelectorAll('.box');
x.forEach(v=>{
    v.addEventListener("click",function(){
        removeActiveclass();
        v.classList.add("active");
    })
})
function removeActiveclass(){
    x.forEach(v=>{
        v.classList.remove("active");
    })
}