//any and unknown types

//Any variables
let value:any;
let names:any;
let trues:any;

//Unknown variables
let values:unknown;
let valuess:unknown;
let truess:unknown;
let falses:unknown;

//that contain any value 
value = 5;
console.log("Number: " + `${value + 10}`);

names = "ricky";
console.log("Name: " + `${names.toUpperCase()}`);

trues = true;
console.log("bool: " + `${trues + 1}`);


//that contain unkown value
values = 5;
valuess = "picardal"
truess = true;
falses = true;


if(typeof values === "number"){
    console.log("Number: " + `${values + 20}`);
}

if(typeof valuess === "string"){
    console.log("Name: " + `${valuess.toUpperCase()}`);
}

if(typeof truess === "boolean"){
  console.log("Bool: " + `${truess === falses}`);
}
