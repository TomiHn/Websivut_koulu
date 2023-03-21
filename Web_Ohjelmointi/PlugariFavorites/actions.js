let linkContainer = document.getElementById("links");
linkContainer.style.width = "200px";
function initProgram(_storedLinks){
    console.log(_storedLinks);
    linkContainer.innerHTML = "";

    _storedLinks.forEach(link => {
        let oneLink = document.createElement("a");
        oneLink.href = link.url;
        oneLink.innerText = link.name;
        oneLink.target = "_BLANK";
        linkContainer.appendChild(oneLink);
    })
};

//Linkin poisto
function RemoveFromList(e, index){
    console.log("remove element; ", e);
    
}

let storedLinks = [];
chrome.storage.sync.get(["listOfLinks"], function(result){
    // document.getElementById("links").innerHTML = "Ei dataa";
    if(result.listOfLinks){
        // document.getElementById("links").innerHTML = "Dataa";
        storedLinks = JSON.parse(result.listOfLinks);
        initProgram(storedLinks);
    }
});

let addNew = document.createElement("button");
addNew.innerHTML = "❤️";
addNew.classList = "icon add-icon";
document.body.appendChild(addNew);

//Options nappi
let modifyList = document.createElement("button");
modifyList.innerHTML = "⚙️";
modifyList.classList = "icon gear-icon"
document.body.append(modifyList);

modifyList.addEventListener("click", function(){
    linkContainer.innerHTML = "";
    console.log("xd")
    storedLinks.forEach((link, index) => {
        let oneLink = document.createElement("div");
        oneLink.classList = "delete-button";
        oneLink.innerHTML = "<span class='icon delete-icon'>-</span><span class='delete-text'>" + link.name + "</span>";
        oneLink.onclick = (e) => {
            RemoveFromList(e, index);
        }
        linkContainer.appendChild(oneLink);
    })

    modifyList.style.display = "none";
    let cancelModify = document.createElement("button");
    document.body.appendChild(cancelModify);
    cancelModify.innerHTML = "❌";
    cancelModify.addEventListener("click", function(){
        initProgram(storedLinks);
        modifyList.style.display = "inline-block";
        cancelModify.remove();
        console.log("xdd");
    })
});

async function GetCurrentTab(){
    let queryOptions = {active: true, lastFocusedWindow: true};
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
};

const AddTab = () => {
    GetCurrentTab().then((tab) => {
        // console.log(tab);
        // console.log(tab.favIconUrl);
        let favIcon = false;
        if(tab.favIconUrl){
            favIcon = tab.favIconUrl;
        }//if

        storedLinks.push({
            "name":tab.title,
            "url":tab.url,
            "favicon":favIcon
        });//storedlinks

        // console.log("ennen", storedLinks);
        const value = JSON.stringify(storedLinks);
        // console.log("jälkeen" ,value);
        // console.log("decoded", JSON.parse(value));

        chrome.storage.sync.set({listOfLinks:value}, function(){
            console.log(tab.title + "Lisättiin");
            storedLinks = JSON.parse(value);
            initProgram(storedLinks);
        });//set


    });//then
}//GetCurrentTab

addNew.addEventListener("click", function(){
    AddTab();
});//EventListener










// console.log("tää vain favissa")

// let links = [
//     {
//         "name": "Twitch",
//         "url": "https://www.twitch.tv/directory",
//     },
//     {
//         "name": "Nordea",
//         "url": "https://netbank.nordea.fi/login/"
//     },
//     {
//         "name":"Youtube",
//         "url": "https://www.youtube.com/"
//     },
//     {
//         "name": "Mahjong",
//         "url": "https://mahjon.gg/"
//     },
//     {
//         "name": "Leetcode",
//         "url": "https://leetcode.com/"
//     }
// ];
// links.forEach(oneLink => {
    //     console.log(oneLink);
    //     // linkContainer.innerHTML += "<a target='_blank' href='" + oneLink.url + "'>" + oneLink.name + "</a><br>"
    
    //     let append = document.createElement("a");
//     append.href = oneLink.url;
//     append.target = "_blank";
//     append.innerText = oneLink.name;
//     linkContainer.appendChild(append);
// });