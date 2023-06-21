let Lname : string;
Lname = 'mekya';

let newName = Lname.toUpperCase()

console.log(newName)

let age : number;
age = 25;

let dob = '16'
let result = parseInt(dob)

let isValid : boolean = true;

console.log(isValid)

let empList : string[];
empList = ["lydia", "shafiq", "muhaimin"];

let numList : Array<number>;

numList = [1, 2, 3, 4, 5];

// let results = numList.filter(num => num > 2);
// let results = numList.find(num => num === 2);
let results = numList.reduce((acc, num) => acc + num);

console.log(results)

enum Color {
  Red,
  Green,
  Blue
}

let c : Color = Color.Red;

console.log(c)