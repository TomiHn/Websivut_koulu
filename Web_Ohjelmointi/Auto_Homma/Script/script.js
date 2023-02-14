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
let newAutoLista = [];
let autoListaBugatit = autoLista.map(Bugatti); //LISTAN KORJAUS


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
        div.style.marginBottom = "30px";
    }
}

let div = document.createElement("div");
div.id = "divi";
div.innerText = "Div";
div.style.fontSize = "1.4em";
document.body.appendChild(div);

let button = document.createElement("button");
button.id = "nappi";
button.innerText = "Nappula";
button.style.fontSize = "1.4em"
document.body.appendChild(button);

document.getElementById("nappi").addEventListener("click",function(){
    if(muuttuvaluku < autoLista.length-1){
        muuttuvaluku++;
    }
    else{
        muuttuvaluku = 0;
    }
    
    
    console.log("moi", muuttuvaluku);


    //DUPLIKAATTIEN POISTO
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

    console.log("length: " + newAutoLista.length)

    document.getElementById("palkki").innerHTML = autoListaBugatit[muuttuvaluku];

    //MUUTA NAPIN LUONTI
    let muuta = document.createElement("button");
    let nappiOn = document.getElementById("muuta");

    let mitsubishi = newAutoLista.filter(x => x === "Mitsubishi").length;


    if(!nappiOn){
        
        if(mitsubishi === 1){
            muuta.innerText = "Muuta";
            muuta.id = "muuta";
            muuta.style.fontSize = "1.4em"
            document.body.appendChild(muuta);
        }

        //MUUTA NAPPIIN KLIKKI
        muuta.addEventListener("click", function(){
            console.log("muuta painettu");
            //LISTAN MUUNNOS BOOLEANIKSI
            let autoListaMuutettu = newAutoLista.map(MuutaLista);
            console.log(autoListaMuutettu);
            //FALSEN POISTO
            for(i = 0; i < autoListaMuutettu.length; i++){
                if(autoListaMuutettu[i] == false){
                    autoListaMuutettu.splice(i,1);
                }
            }

            //LOPPUTARKASTUS
            let tarkastusTulos = autoListaMuutettu.every(TarkistaLista)
            console.log(autoListaMuutettu);
            
            if(tarkastusTulos){
                console.log(autoLista)
                console.log("Kaikki toimii?")
            }
            else{
                console.log("Joku meni vituiks")
            }
        })
    }
});







let teepalkki = () => {
    let palkki = document.createElement("div");
    palkki.id = "palkki";
    palkki.style.background = "green";
    palkki.style.height = "40px";
    palkki.style.minWidth = "60px";
    palkki.style.fontSize = "1.4em"
    palkki.innerHTML = autoLista[muuttuvaluku];
    document.body.appendChild(palkki);
}
teepalkki();

//LISTAN KORJAUS
function Bugatti(element){
    if(typeof element != "string" || element.includes("!")|| element == "2"){
        element = "Bugatti";
    }
    return element;
}
//BOOLEAN MUUTOS
function MuutaLista(element){
    if(element == "Bugatti"){
        element = false;
    }
    else if(element != "Bugatti"){
        element = true;
    }
    return element;
}
//LOPPUTARKASTUS
function TarkistaLista(element){
    if(element == true){
        return true;
    }
    else{
        return false;
    }
}



