"use strict";
let Lname;
Lname = 'mekya';
let newName = Lname.toUpperCase();
console.log(newName);
let age;
age = 25;
let dob = '16';
let result = parseInt(dob);
let isValid = true;
console.log(isValid);
let empList;
empList = ["lydia", "shafiq", "muhaimin"];
let numList;
numList = [1, 2, 3, 4, 5];
// let results = numList.filter(num => num > 2);
// let results = numList.find(num => num === 2);
let results = numList.reduce((acc, num) => acc + num);
console.log(results);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Red;
console.log(c);
console.log('test message')
// cuit