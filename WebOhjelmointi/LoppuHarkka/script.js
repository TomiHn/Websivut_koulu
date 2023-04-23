const playButton = document.getElementById("playButton");
const topInput = document.getElementById("topInput");
const rightText = document.getElementById("rightText");
const leftText = document.getElementById("leftText");
const inputDefault = "listaa";
topInput.value = inputDefault;

const commands = ["listaa", "vaihda", "google", "tomi", "100", "piirrä", "tee popup", "funktio"];
// let topInputValue = topInput.value;

// console.log(topInputValue)

topInput.addEventListener("keypress" , (e) =>{
    if(e.key === "Enter"){
            e.preventDefault();
            playButton.click();
        }//IF
});//keypress


const Action = (commandList, input, button, rTextField, lTextField) => {
    let inputNumber = parseInt(input.value, 10);
    switch(input.value){
        //Katsotaan switch casella mitä käyttäjä syöttää ja tehdään sen perusteella asioita
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
            input.value = "";
            Vaihda();
            break;
        case "listaa":
            Listaa(commandList, input, button, lTextField);
            break;
        case "google":
            input.value = "";
            Google(rTextField);
            break;
        case "tomi":
            input.value = "";
            Tomi(rTextField);
            break;
        case "100":
            TextGen(100, rTextField);
            input.value = "";
            break;
        //Tarkistetaan onko inputti numero välillä 1 - 999,               Tässä jos edelliset ehdot täyttyy, palautetaan annettu numero,
        //                                                                Muuten palautetaan null, ja siirrytään default caseen
        case (inputNumber >= 1 && inputNumber <= 999 && !isNaN(inputNumber) ? input.value : null):
            TextGen(input.value, rTextField);
            input.value = "";
            break;
        case "piirrä":
            Piirra(rTextField);
            break;
    }//Switch
}//Action()

//Estetään asioiden moninkertainen tulostus
const DeleteChildren = (element, bottomSide) =>{
    let exists = false;
    //Loopataan lapsielementit ja vertaillaan niiden tekstiä
    for(let i = 0; i < bottomSide.children.length; i++){
        if(bottomSide.children[i].textContent === element.textContent){
            exists = true;
            break;
        }//IF
    }//For
    if(!exists){
        bottomSide.appendChild(element);
    }
}

//Värinvaihto, vaihtaa myös punaisesta takaisin alkuperäiseen
const Vaihda = () => {
    if(document.body.style.backgroundColor != "red"){
        document.body.style.backgroundColor = "red";
    }//IF
    else{
        document.body.style.backgroundColor = "#2c2c2c";
    }//ELSE
};//Vaihda

//Listan printtaus
const Listaa = (list, input, button, leftColumn) =>{
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

            DeleteChildren(oneCommand, leftColumn);
        });//ForEach
}//Listaa

//Google linkki
const Google = (rTextField) => {
    rTextField.innerHTML = "";
    let gLink = document.createElement("a");
    gLink.id = "link";
    gLink.innerText = "Google";
    gLink.href = "https://www.google.fi/";
    gLink.target = "_blank";
    gLink.style.textDecoration = "none";
    gLink.style.fontSize = "1.3em";
    if(!document.getElementById("link")){
        rTextField.appendChild(gLink);
    }//If
}//Google

//Tomi
const Tomi = (rTextField) =>{
    rTextField.innerHTML = "";
    let img = document.createElement("img");
    img.src = "./IMG/omakuva.jpg";
    img.width = "200px"
    img.height = "200px";
    img.style.height = "100%";
    img.style.width = "100%";
    rTextField.appendChild(img);
}//Tomi

//Tekstin luonti
const TextGen = (inputValue, rTextField) =>{
    // console.log(inputValue);
    rTextField.innerHTML = "";
    let textLines = [];
    for(let i = 0; i < inputValue; i++){
        textLines[i] = (`${i}: generoitua tekstiä <br/>`)
    }//For
    textLines.forEach(oneText => {
        let oneTextLine = document.createElement("span");
        oneTextLine.innerHTML = oneText;
        rTextField.appendChild(oneTextLine);
    });////ForEach
}//TextGen

//Ympyrän piirtäminen
const Piirra = (rTextField) =>{
    rTextField.innerHTML = "";
    let cnv = document.createElement("canvas");
    // cnv.width = "250px";
    cnv.height = 250;
    cnv.id = "myCanvas";
    let ctx = cnv.getContext("2d");
    ctx.beginPath();
    ctx.arc(150, 125, 100, 0, Math.PI * 2); // Outer circle
    ctx.stroke();
    rTextField.appendChild(cnv);
}//Piirra