let str = 'JAn Kowalski';

// flagi: po wyrażeniu regularnym lub dla RegExp jako drugi parametr
// flagi: i: case insensitive, nie bierze pod uwage wielkosci liter
// flagi: g: powoduje podmianę wszystkich wystapien, a nie tylko pierwszego

const regExp1 = /a/gi;

const regExpContr = new RegExp("a", "g")

str = str.replace(regExp1, 'b');

console.log(str);