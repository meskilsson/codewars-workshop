//MÅL:
// Ta reda på vem som åt kakan beroende på datatyp.

// INPUTS: Vilka variabler som kommer till funktionen och vilken typ de har:

// String, number(integer).


// RETURN: Vad ska skickas tillbaka efter beräkning eller behandling av inputs och vilken typ har den – tex. result: decimaltal.

// Namnet på den som åt kakan i en textinterpolering.


// STEG 1: Beskriv nu i tur och ordning (STEG 2, osv.)

// Om input är en sträng, placera Zach i den tomma variablen "name" och returnera Zach åt kakan. 
// Om input är ett nummer, placera Monica i den tomma variablen "name" och returnera Monica åt kakan.
// Om input är något annat, placera "the dog" i den tomma variablen "name" och returnera hunden åt kakan.



function cookie(x){

  let name = "";
  
  if(typeof x === "string") {
    name += "Zach";
  } else if (typeof x === "number") {
    name += "Monica";
  } else {
    name += "the dog";
  }

return `Who ate the last cookie? It was ${name}!`
} 