let str = "JaAn Kowalski";

// flagi: g - zamienia wszystkie wystapienia
// flaga: i - case insensitive, nie bierze pod uwage
// flaga: m - 

const regex = /a/gi;
const regexConstr = new RegExp('a', 'gi');

const strOut = str.replace(regexConstr, 'b');
console.log(strOut);
