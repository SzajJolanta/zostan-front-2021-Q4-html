const strPrim = "str1";
const strPrim2 = "str1";

if(strPrim === strPrim2)
{
    console.log("Te same teksty prymitywne są równe");
}

const strObj = new String("str1");
const strObj2 = new String("str1");

console.log(typeof strObj);
console.log(strObj === strObj2);
console.log(strObj.valueOf() === strObj2.valueOf());

// 
// const numObj 
const strNum = "1";
console.log(typeof strNum);
// Nuneric
const numObj = new Number(strNum);
console.log(typeof numObj);
console.log(numObj);
console.log(numObj.valueOf());
console.log(typeof numObj.valueOf());

// Pamietajcie ze new Number to nie to samo co funkcja Number!!!
const convInt = Number(strNum);
console.log(convInt);
console.log(typeof convInt);
