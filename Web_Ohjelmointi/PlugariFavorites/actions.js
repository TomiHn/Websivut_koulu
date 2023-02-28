// console.log("tää vain favissa")

let linkContainer = document.getElementById("links");
let links = [
    {
        "name": "Twitch",
        "url": "https://www.twitch.tv/directory",
    },
    {
        "name": "Nordea",
        "url": "https://netbank.nordea.fi/login/"
    },
    {
        "name":"Youtube",
        "url": "https://www.youtube.com/"
    }
];

links.forEach(oneLink => {
    console.log(oneLink);
    // linkContainer.innerHTML += "<a target='_blank' href='" + oneLink.url + "'>" + oneLink.name + "</a><br>"
    
    let append = document.createElement("a");
    append.href = oneLink.url;
    append.target = "_blank";
    append.innerText = oneLink.name;
    linkContainer.appendChild(append);
});