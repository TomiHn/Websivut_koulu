window.onload=function(){
    
    function findButton(id){
        const btn = document.getElementById(id) 
        return btn
    }

    
    
    let buttons = document.querySelectorAll("button");
    let b1 = findButton("btn1");
    let bEqv = findButton("bEq");
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
            if(bEqv.contains(e.target)){
                console.log(text.innerHTML)
            }
    
        })
    })

}    

