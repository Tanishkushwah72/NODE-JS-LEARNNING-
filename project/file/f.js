import readline from "readline";
import fs from "fs";
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
const filecreate=()=>{
rl.question("enter your file name ",(filename)=>{
rl.question("enter your file content",(content)=>{ 
fs.writeFile(`${filename}.txt`,content ,(err)=>{
if(err){
    console.log(`you have a error plese try again ,${err}`)
}else {
    console.log( `file ${filename} is successfully created`);
}
rl.close();
})
})
})
}
filecreate();