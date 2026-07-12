const fs = require("fs/promises");
const path  = require("path");
const  filename = "app.txt";
const filepath  = path.join(__dirname,filename);
console.log(filepath);
// // const writefile = fs.writeFile(filepath,"this is new way to create file in nodes js",(err)=>{
// //     if (err) 
// //     console.log(err);
// // return;
// // });
// // console.log(writefile);

// // const readfile =fs.readFile(filepath,"utf-8")
// // .then((data)=>{
// // console.log(data);
// // })
// // .catch((err)=>{
// // console.log(err);
// // });
// fs.unlink(filepath)
//     .then(() => {
//         console.log("File deleted successfully!");
//     })
//     .catch((err) => {
//         console.log(err);
//     });