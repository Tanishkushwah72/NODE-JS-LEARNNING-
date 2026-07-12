const fs = require("fs");
const path  = require("path");
const  filename = "hello1.txt";
const filepath  = path.join(__dirname,filename);
console.log(filepath);
const writefile = fs.writeFile(filepath,"this is new way to create file in nodes js",(err)=>{
    if (err) 
    console.log(err);
return;
});
console.log(writefile);

// const readfile= fs.readFile(filepath,"utf-8",(err,data)=>{
//     if(err){
//     console.log(err);
//     return;
// }
//  console.log(data);
// });

// const deletefile =fs.unlink(filepath,(err)=>{
//     if(err){
//     console.log(err);
//     return;
//     }
// });
// console.log("file delete sucssesfully");
const  updatedfile = "hello2.txt";
const filepath1 = path.join(__dirname,updatedfile);
console.log(filepath1);
const rename = fs.rename(filepath,updatedfile,(err)=>{
    if(err){
        console.log(err);
        return;
    }
});
console.log(rename);