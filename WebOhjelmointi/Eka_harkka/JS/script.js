// document.getElementById("nappi").addEventListener("click", ()=>{
//     console.log("terve")
//     var myDiv = document.getElementById("div")
//     if(myDiv.innerHTML === "Tekstiä"){
//         myDiv.innerHTML = ""
//     }
//     else{
//         myDiv.innerHTML = "Tekstiä"
//     }
// });

// document.getElementById("nappi").addEventListener("click", ()=>{
//     console.log("terve")
// })

// console.log("Terve");

// const nappi = document.getElementById("nappi")
// const konsoli = document.getElementById("div")
// const body = document.body;


// let klikit = 0

// nappi.addEventListener("click", (e)=>{
//     klikit++;
//     // console.log("Terve " + klikit);
//     // konsoli.innerText = "> Terve " + klikit
//     konsoli.innerText = ">w:" + body.clientWidth + " h:" + body.clientHeight

//     // console.log(body)
//     // console.dir(body)

//     console.log(body.clientHeight);
//     console.log(body.clientWidth);


// });

const nappi = document.getElementById("nappi");
const divi = document.getElementById("div");

nappi.addEventListener("click", (e)=>{
    divi.style.width = "200px"
    // console.log("1")
    // document.getElementById("div").style.width = "200px"
});