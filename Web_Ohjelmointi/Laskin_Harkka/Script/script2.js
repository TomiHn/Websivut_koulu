// function clearFunc(div){
//     document.getElementById("text1").innerHtml = "";
// }

// function bPush(id, num){
//     if (id.contains("click")){
//         text.innerHTML += num
//     }
// }

function findButton(id){
    return document.getElementById(id);
}

let buttons = document.querySelectorAll("button");
let text = document.getElementById("text1");
let clear = findButton("clear");
let nums = [];
let opers = [];


function calculator(){

    buttons.forEach(function(button){
        button.addEventListener("click", (e)=>{
            console.log("test")
            if(clear.contains(e.target)){
                text.innerHTML = "";
                nums.length = 0;
                opers.length = 0;
            }

            if(b1.contains(e.target)){
                text.innerHTML += "1";
            }

            if(b2.contains(e.target)){
                text.innerHTML += "2";
            }

            if(b3.contains(e.target)){
                text.innerHTML += "3";
            }

            if(b4.contains(e.target)){
                text.innerHTML += "4";
            }

            if(b5.contains(e.target)){
                text.innerHTML += "5";
            }

            if(b6.contains(e.target)){
                text.innerHTML += "6";
            }

            if(b7.contains(e.target)){
                text.innerHTML += "7";
            }

            if(b8.contains(e.target)){
                text.innerHTML += "8";
            }

            if(b9.contains(e.target)){
                text.innerHTML += "9";
            }

            if(b0.contains(e.target)){
                text.innerHTML += "0";
            }

            if(bCom.contains(e.target)){
                text.innerHTML += ".";
            }

            if(bSum.contains(e.target)){
                nums.push(parseInt(text.innerHTML));
                opers.push("+");
                text.innerHTML = "";
            }

            if(bMinus.contains(e.target)){
                nums.push(parseInt(text.innerHTML));
                opers.push("-");
                text.innerHTML = "";
            }

            if(bEqv.contains(e.target)){
                nums.push(parseInt(text.innerHTML));
                nums.length = 0;
                opers.length = 0;
                console.log(nums[0]);
            }
            
            if(bDiv.contains(e.target)){
                console.log(nums)
                console.log(opers)
            }
        })
    })
}

calculator()