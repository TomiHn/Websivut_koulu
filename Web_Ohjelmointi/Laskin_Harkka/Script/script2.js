function findButton(id){
    return document.getElementById(id);
}

let buttons = document.querySelectorAll("button");
let text = document.getElementById("text1");
let clear = findButton("clear");
let nums = [];
let opers = [];


function calculator(){
    for(let i=0; i < buttons.length; i++){
        buttons[i].addEventListener("click", function(){
            value = this.innerHTML;
            if(text.innerHTML === "" || text.innerHTML == "0"){
                text.innerHTML = value;
            }
            else{
                text.innerHTML += value;
            }
            if (value === "Clear"){
                text.innerHTML = "";
                nums.length = 0;
                opers.length = 0;
            }
            if(value === "X" || value === "/" || value === "+" || value === "-"){
                nums.push(parseFloat(text.innerHTML));
                text.innerHTML = "";
                nums.push(value);
            }
            if(value === "="){
                nums.push(parseFloat(text.innerHTML));
                let sum = nums.join(" ");
                let endSum = 
                text.innerHTML = sum;
                console.log(eval(sum))
                console.log(nums)
                console.log(sum);
                // console.log(opers);
                // console.log(2+2*3)
            }
        })
    }
}

calculator()