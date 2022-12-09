document.getElementById("menu_button").addEventListener("click", ()=>{
    console.log("click");
    if(document.getElementById("menu").classList.contains("open")){
        document.getElementById("menu").classList = "closed";
    }
    else{
        document.getElementById("menu").classList = "open";
    }
})

