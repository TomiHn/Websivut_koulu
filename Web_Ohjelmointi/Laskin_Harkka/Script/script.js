let buttons = document.querySelectorAll("button");
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
const b5 = document.getElementById("b5");
const b6 = document.getElementById("b6");
const b7 = document.getElementById("b7");
const b8 = document.getElementById("b8");
const b9 = document.getElementById("b9");
var text = document.getElementById("text1");

buttons.forEach(function(button){
    button.addEventListener("click", (e)=>{
        console.log("test")
        if(b1.contains(e.target)){
            // console.log("test1")
            text.innerHTML += "1"
        }
        if(b2.contains(e.target)){
            // console.log("test2")
            text.innerHTML += "2"
        }
        if(b3.contains(e.target)){
            // console.log("test2")
            text.innerHTML += "3"
        }
        if(b4.contains(e.target)){
            // console.log("test2")
            text.innerHTML += "4"
        }
        if(b5.contains(e.target)){
            // console.log("test2")
            text.innerHTML += "5"
        }
        if(b6.contains(e.target)){
            // console.log("test2")
            text.innerHTML += "6"
        }
        if(b7.contains(e.target)){
            // console.log("test2")
            text.innerHTML += "7"
        }
        if(b8.contains(e.target)){
            // console.log("test2")
            text.innerHTML += "8"
        }
        if(b9.contains(e.target)){
            // console.log("test2")
            text.innerHTML += "9"
        }
    })
})

