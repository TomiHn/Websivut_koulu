
let mainElement = document.createElement("main");

//tää kirjoittaa sen bodyyn
document.body.appendChild(mainElement);

let container = document.createElement("div");
container.id = "main-container";
container.classList = "container"

//nyt sit laitetaan se container mainiin

mainElement.appendChild(container);

//laskin
let topDiv = document.createElement("div");
topDiv.id = "top-div";

let leftDiv = document.createElement("div");
leftDiv.id = "left-div";

let rightDiv = document.createElement("div");
rightDiv.id = "right-div";

container.appendChild(topDiv);
container.appendChild(leftDiv);
container.appendChild(rightDiv);

let inputField = document.createElement("input");
inputField.id = "input";
inputField.type = "text";
inputField.placeholder = "0";

topDiv.appendChild(inputField);

const buttonTexts = ["Clear", "7", "8", "9", "4", "5", "6", "1", "2", "3", "0", ","];
//console.log(buttonTexts);

for (let i = 0; i < buttonTexts.length; i++) {
    const element = buttonTexts[i];
    //console.log(element);
    
    let oneButton = document.createElement("button");
    oneButton.innerHTML = element;
    oneButton.id = "button-" + i;
    oneButton.classList = "button";

    

    if (i==0){
        oneButton.classList = "button button-clear";
    }
    if (i==11){
        oneButton.classList = "button button-comma";
    }

    oneButton.addEventListener("click", (e) =>{
        let clickedButton = e.target;
        if(clickedButton.innerText == ","){
            inputField.value += "."
        }
        else{
            inputField.value += clickedButton.innerText;
        }
        // console.log(clickedButton);
        if (i === 0){
            inputField.value = "";
        }
    });

    leftDiv.appendChild(oneButton);
}

function checkInput(formula){
    const forbidden = [
        "function",
        "Function",
        "[",
        "]",
        "{",
        "}",
        "()"
    ]

    let result = false;

    forbidden.forEach(element => {
        if (formula.includes(element)){
            result = true;
            console.log(element + " | " + formula)
        }
    })
    return result;
}

function Calc(formula){
    // console.log("Lasken " + formula);
    if(!checkInput(formula)){
        let sum = eval(formula);
        inputField.value = sum;
    }
    else{
        inputField.value = "Virhe!";
    }
}


const actionButtons = ["⁒", "X", "-", "+", "="];

for (let i = 0; i < actionButtons.length; i++) {
    const oneActionButtonText = actionButtons [i];

    let oneButton = document.createElement("button");
    oneButton.innerHTML = oneActionButtonText;
    oneButton.id = "action-button-" + i;
    oneButton.classList = "button";

    oneButton.addEventListener("click", (e) =>{
        let clickedButton = e.target;

        let newChar = clickedButton.innerText;
        if(newChar == "⁒"){
            newChar = "/";
        }
        newChar = newChar.replaceAll(/X/g,"*");


        if (newChar != "="){
            inputField.value += newChar;
        }
        else{
            Calc(inputField.value);
        }
    })

    rightDiv.appendChild(oneButton);
}



