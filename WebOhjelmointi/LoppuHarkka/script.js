const playButton = document.getElementById("playButton");
const topInput = document.getElementById("topInput");
const inputDefault = "listaa";
topInput.value = inputDefault;
// let topInputValue = topInput.value;

// console.log(topInputValue)

topInput.addEventListener("keypress" , (e) =>{
    if(e.key === "Enter"){
            e.preventDefault();
            playButton.click();
        }
            
});//keypress


const Action = () => {
    let topInputValue = topInput.value;
        switch(topInputValue){
            default:
                let errorMsg = document.createElement("span");
                errorMsg.id = "error";
                errorMsg.innerText = "komentoa ei tunnistettu";
                if(!document.getElementById("error")){
                    document.getElementById("rightText").appendChild(errorMsg);
                }//IF
                break;
            case "vaihda":
                Vaihda();
                topInput.value = inputDefault;
                break;
        }//Switch
}//Action()


//Värinvaihto
const Vaihda = () => {
    if(document.body.style.backgroundColor != "red"){
        document.body.style.backgroundColor = "red";
    }
    else{
        document.body.style.backgroundColor = "#2c2c2c";
    }
};//Vaihda