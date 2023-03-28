document.getElementById("menu_button").addEventListener("click", ()=>{
    console.log("click");
    if(document.getElementById("menu").classList.contains("open")){
        document.getElementById("menu").classList = "closed";
    }
    else{
        document.getElementById("menu").classList = "open";
    }
})

document.getElementById("menu_button").addEventListener("click", ()=>{
    if(document.getElementById("line2").classList.contains("change")){
        document.getElementById("line2").classList = "normal";
    }
    else{
        document.getElementById("line2").classList = "change";
    }
})