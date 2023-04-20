const playButton = document.getElementById("playButton");
const topInput = document.getElementById("topInput");
const rightText = document.getElementById("rightText");
const leftText = document.getElementById("leftText");
const inputDefault = "listaa";
topInput.value = inputDefault;

const commands = ["listaa", "vaihda", "google", "Tompsa", "Nums", "piirrä", "tee popup", "funktio"];
// let topInputValue = topInput.value;

// console.log(topInputValue)

topInput.addEventListener("keypress" , (e) =>{
    if(e.key === "Enter"){
            e.preventDefault();
            playButton.click();
        }//IF
});//keypress


const Action = (commandList, input, button, rTextField, lTextField) => {
    let topInputValue = input.value;
        switch(topInputValue){
            default:
                rTextField.innerHTML = "";
                let errorMsg = document.createElement("span");
                errorMsg.id = "error";
                errorMsg.innerText = "komentoa ei tunnistettu";
                if(!document.getElementById("error")){
                    document.getElementById("rightText").appendChild(errorMsg);
                    input.value = "";
                }//IF
                break;
            case "vaihda":
                rTextField.innerHTML = "";
                Vaihda();
                input.value = "";
                // RemoveChildren(rTextField);
                // RemoveChildren(lTextField)
                break;
            case "listaa":
                Listaa(commandList, input, button);
                break;
            case "google":
                rTextField.innerHTML = "";
                let gLink = document.createElement("a");
                gLink.id = "link";
                gLink.innerText = "Google";
                gLink.href = "https://www.google.fi/";
                gLink.target = "_blank";
                if(!document.getElementById("link")){
                    rTextField.appendChild(gLink);
                }
                break;
        }//Switch
}//Action()


//Värinvaihto, vaihtaa myös punaisesta takaisin alkuperäiseen
const Vaihda = () => {
    if(document.body.style.backgroundColor != "red"){
        document.body.style.backgroundColor = "red";
    }//IF
    else{
        document.body.style.backgroundColor = "#2c2c2c";
    }//ELSE
};//Vaihda

//Listaa
const Listaa = (list, input, button) =>{
        list.forEach((command, index) => {
            let oneCommand = document.createElement("div");
            oneCommand.innerText = `${index + 1}: ${command}`;
            oneCommand.style.cursor = "pointer";
            oneCommand.style.fontSize = "1.3em";
            oneCommand.style.marginBottom = "10px";
            oneCommand.classList = "commands";
            oneCommand.id = "command";
            oneCommand.addEventListener("click", () =>{
                input.value = command;
                button.click();
            });//Click

            //Estetään listan moninkertainen tulostus
            let leftColumn = document.getElementById("leftText");
            let exists = false;
            //Loopataan lapsielementit ja vertaillaan niiden tekstiä
            for(let i = 0; i < leftColumn.children.length; i++){
                if(leftColumn.children[i].textContent === oneCommand.textContent){
                    exists = true;
                    break;
                }//IF
            }//For
            if(!exists){
                leftColumn.appendChild(oneCommand);
            }
        });//ForEach
}//Listaa

//Tekstikenttien tyhjennys
const RemoveChildren = (element) =>{
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}