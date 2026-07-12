// const fs =require("fs");
// const path=require("path");
// const filename = "text.txt";
// const filepath = path.join(__dirname,filename);
// console.log(__filename);
// // const writefile =fs.writeFileSync(
// // filename,"hello everyone my nname is tanish kushwah","utf-8");
// // console.log(writefile);

// const readfile =fs.readFileSync(filepath,"utf-8");
// console.log(readfile);
// const appendfilr = fs.appendFileSync(
// filepath,"\n this is  the updated data ","UTF-8");
const fs = require("fs");
const path = require("path");
const filename  = "text.txt";
const filepath = path.join(__filename);
console.log(filepath);

const writefile =fs.writeFileSync(
filename,"hello everyone my nname is tanish kushwah","utf-8");
console.log(writefile);

const newfilename  = "updated.txt";
const newfilepath = path.join(__dirname,newfilename);
const rename = fs.renameSync(filepath,newfilepath);
console.log(rename);

