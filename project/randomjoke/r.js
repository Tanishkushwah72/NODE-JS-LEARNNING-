import https from "https";
import chalk from "chalk";
const url  ="https://official-joke-api.appspot.com/random_joke";


https.get(url,(response)=>{
let data =" ";
response.on("data",(chunk)=>{
    data =data  +chunk;
});

response.on("end",()=>{
const joke =JSON.parse(data);
console.log(chalk.green("random jockes"));
console.log(chalk.red(joke.setup));
console.log(chalk.blue(joke.punchline));
});
})
.on("error",(err)=>{
console.log(chalk.yellow(err));
});
