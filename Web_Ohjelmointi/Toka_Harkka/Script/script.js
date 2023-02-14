let muuttuvaluku = 10;
let autoLista = [
    "Toyota",
    "Volkswagen",
    "Opel",
    false,
    "Mercedes",
    "Volvo",
    "Seat",
    true,
    "Skoda",
    "Mitsubishi",
    "2",
    "Tesla",
    "Saab",
    "BMW",
    "Error!!!",
    "Lada",
    undefined,
    "Peugeot",
    "Kia",
    "Renault"
];


let ohjeArray = [
    "Upota minut html-sivulle ja toteuta seuraavat tehtävät",
    "Korjaa koodia niin, että se läpikäy napin painalluksella kaikki autoListan tiedot (nyt esim. Renault ei näy koskaan) ",
    "Listassa on virheitä (kaikki tiedot eivät ole automerkkejä) korjaa lista niin, että kaikki virheet muuttuvat Bugatti-merkkiin",
    "Kun nappia (Nappula) painetaan, lisää kyseinen auto UUTEEN listaan",
    "Kun sama merkki tulee uudestaan vastaan sitä ei enää lisätä listaan",
    "Tee ohjelmallisesti uusi nappi kun lista on täydellinen (16 merkkiä) kirjoita nappiin 'muuta'",
    "Kun 'muuta' nappia painetaan kaikki Bugatit muuttuvat falseksi ja muut automerkit trueksi",
    "Poista listasta kaikki falset ",
    "Tarkasta every:ä käyttäen sisältääkö lista yhtään falsea jos ei tulosta alkuperäinen autolista",
]

for (i = 0; i < ohjeArray.length; i++){
    let div = document.createElement("div");
    div.innerText =i + 1 + ". " + ohjeArray[i];
    document.body.appendChild(div);
    div.style.fontSize = "1.4em";
    if (i === ohjeArray.length -1){
        div.style.marginBottom = "20px";
    }
}

let newAutoLista = [];


let div = document.createElement("div");
div.id = "divi";
div.innerText = "Div";
document.body.appendChild(div);

let button = document.createElement("button");
button.id = "nappi";
button.innerText = "Nappula";
document.body.appendChild(button);

document.getElementById("nappi").addEventListener("click",function(){
    if(muuttuvaluku < autoLista.length-1){
        muuttuvaluku++;
    }
    else{
        muuttuvaluku = 0;
    }
    
    
    console.log("moi", muuttuvaluku);

    if(!newAutoLista.includes(autoListaBugatit[muuttuvaluku])){
        newAutoLista.push(autoListaBugatit[muuttuvaluku]);
        console.log(newAutoLista);
    }
    else{
        console.log("Ei lisätty");
    }

    let divi = document.getElementById("divi");
    divi.innerText = "Luku:" + muuttuvaluku;

    if( muuttuvaluku <= 5){
        divi.style.backgroundColor = "green";
    }else if(muuttuvaluku >= 6 && muuttuvaluku < 10){
        divi.style.backgroundColor = "yellow";
    }else{
        divi.style.backgroundColor = "red";
    }

    document.getElementById("palkki").innerHTML = autoListaBugatit[muuttuvaluku];
});

let teepalkki = () => {
    let palkki = document.createElement("div");
    palkki.id = "palkki";
    palkki.style.background = "green";
    palkki.style.height = "40px";
    palkki.style.minWidth = "60px";
    palkki.innerHTML = autoLista[muuttuvaluku];
    document.body.appendChild(palkki);
}
teepalkki();





function Bugatti(element){
    if(typeof element != "string" || element == "Error!!!" || element == "2"){
        element = "Bugatti";
    }
    return element;
}

let autoListaBugatit = autoLista.map(Bugatti);

console.log(autoListaBugatit);




