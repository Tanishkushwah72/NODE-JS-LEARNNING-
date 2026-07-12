const fs  = require("fs/promises");
const path  = require("path");
const filepath = path.join(__dirname,"app.txt");
// async function createfile(){
//     try{
//          await fs.writeFile(filepath,"this is again tanish");
//          console.log("file is created successfuly")
//     }catch(err){
//         console.log(err);
//     } 
// };
// createfile();
//READ A DAATA
// async function readfile(){
//     try{
//        const data =  await fs.readFile(filepath,"utf-8");
//         console.log(data)
//     }
//    catch(err){
//     console.log(err);
//    } 
// };
// readfile();

async function filedelete(){
    try{
         await fs.unlink(filepath);
         console.log("file is delete successfuly")
    }catch(err){
        console.log(err);
    } 
};
filedelete();

