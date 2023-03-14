let linkContainer = document.getElementById("links");
function initProgram(_storedLinks){
    console.log(_storedLinks);

    storedLinks.forEach(link => {
        let oneLink = document.createElement("a");
        oneLink.href = link.url;
        oneLink.innerText = link.name;
        oneLink.target = "_BLANK";
        linkContainer.appendChild(oneLink);
    });
};

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

async function GetCurrentTab(){
    let queryOptions = {active: true};
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