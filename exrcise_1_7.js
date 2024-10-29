// FIND() RETURNS FIRST MATCHING OBJECT OR UNDEFINED
// FINDINDEX()RETURNS INDEX TO THE FIRST OR -1
function isOver60(arrayValue) {
    return arrayValue > 99;
}
let numbers = [7, 9, 64, 60, 12, 13, 65, 62];
let firstValueOver60 = numbers.find(isOver60); // returns 64 - the actual object

if (firstValueOver60 === undefined) {
    console.log("No value over 60");
}



// index     0   1 *2*  3   4   5  6   7
//let numbers = [7, 9, *64, 60 ,12 13, 65, 62]
let index


