 const fs = require("fs")

 
//  console.log("Hello World 1");

 //This is  synchronous function --Blocking function
//let data = fs.readFileSync("./abc.txt", {encoding:"utf-8"})
//console.log(data);


//This is asynchronous function --Non Blocking function
// fs.readFile("./abc.txt", {encoding:"utf-8"},(err, data)=>{
//     console.log(data);
// })

// console.log("Hello World 2");


//Writing into a file
 fs.writeFileSync("./abc.txt", "Welcome to yotube", {encoding:"utf-8"})
 console.log("Writing done!");

// fs.writeFile("./abc.txt", "async writing", {encoding:"utf-8"}, (err)=>{
//     //console.log(err);
//     if(!err){
//         console.log("No Error");
//     }
    
// })


//add the data into existing file
fs.appendFile("./abc.txt", "\nThis is appended data", {encoding:"utf-8"}, (err)=>{
    if(!err){
        console.log("Data added");
    }
})