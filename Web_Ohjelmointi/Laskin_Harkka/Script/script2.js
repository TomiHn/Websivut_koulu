function findButton(id){
    return document.getElementById(id);
}

let buttons = document.querySelectorAll("button");
let display = document.getElementById("text1");
let clear = findButton("clear");
let nums = [];


function calculator(){
    for(let i=0; i < buttons.length; i++){
        buttons[i].addEventListener("click", function(){
            input = this.innerHTML;
            if(display.innerHTML === "" || display.innerHTML == "0"){
                display.innerHTML = input;
            }
            else{
                display.innerHTML += display;
            }
            if (input === "Clear"){
                display.innerHTML = "";
                nums.length = 0;
            }
            if(input === "*" || input === "/" || input === "+" || input === "-"){
                nums.push(parseFloat(display.innerHTML));
                display.innerHTML = "";
                nums.push(input);
            }
            if(input === "="){
                nums.push(parseFloat(display.innerHTML));
                let sum = nums.join(" ");
                display.innerHTML = eval(sum);
                console.log(nums);
                // if(input === "*" || input === "/" || input === "+" || input === "-"){
                //     nums.length = 0;
                //     nums.push(parseFloat(display.innerHTML));
                //     nums.push(input);
                // }
            }
        })
    }
}

calculator()