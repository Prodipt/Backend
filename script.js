var arr = [1,2,3,4];

arr.forEach(function(val){
    console.log(val+1);
})

var newArr = arr.map(function(val){
    return val+1;
})
console.log(newArr);

var ans = arr.filter(function(val){
    if(val>2) return true;
})
console.log(ans);

var result = arr.find(function(val){
    if(val===3) return val;
})
console.log(result);

//indexOf

//arr.indexOf(3)     2

// Objects  - Key : value pair inside {}

{
    kuchBhi : "KUCHBHI" 
}
var obj = {
    pappu :96,
    Name : "hero",
    age : 22
}
Object.freeze(obj);
obj['age'] =23;

function abcd(){
    return "YEYEYYEY";
}


var val = abcd();
console.log(val);

// Async js Coding

// var blob = await fetch('https://randomuser.me/api/');
// var res = await blob.json();

// console.log(res);

// Line by Line code chale issey kehte h synchronous
// jo bhi code async nature ka ho, usey side stack me bhej do and agle code ko chalao jo bhi sync nature ka ho, jab bhi saara syn code chal jaaye, tab check karo ki async code complete hua ya nahi and agar wo complete hua to usey main stack me laao and chala do

async function acha(){
    var blob = await fetch('https://randomuser.me/api/')
    var res = await blob.json();

    console.log(res.results[0].name);
}
acha();

// Node.js Basics:
// Introduction to Node.js
// Installing Node.js and npm

// NOde and Npm
// working with node and npm
// npm init
// node basic usage
// Working with modules
// File system Operations


// Node.Js not a programming language, technology, framework, library
// It is JS runtime Environment

// JS is not for backend
// Js dont have functionalities to make backend
// Ryan Dahl
// Google Chrome ka v* engine ka code open source hai and ryan uss code me changes kr rha hai
// kyuki chrome ka v8 engine bana hai c++ mein
// fir usne soch ki humein to js mein code krna h