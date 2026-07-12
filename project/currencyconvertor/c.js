import chalk from "chalk";
import { response } from "express";
import https from "https";
import readline from "readline";

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
const apiKey = "fca_live_S4CqxEUKS0DH1SDTwTNjifYv9bNI61fVpuY7BxOQ";
const url  =  `https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}&base_currency=USD`;
https.get(url,(response)=>{
let data = "";
response.on("data",(chunk)=>{
data = data+chunk;
});
response.on("end",()=>{
const result = JSON.parse(data);
console.log(result);
rl.question("ENTER YOUR MONEY TO CONVERT ",(amount)=>{
rl.question("which contry (Example: INR, EUR, JPY):you want to convert your currency",(currency)=>{
currency =currency.toUpperCase();
const rate = result.data[currency];
if(!rate){
    console.log(chalk.yellow("invalid currency "));
    rl.close();
    return;
}
const convertedAmount = amount *rate;
 console.log(chalk.green("\n====== Currency Converter ======"));
console.log(chalk.yellow(`${amount} USD = ${convertedAmount.toFixed(2)} ${currency}`));
rl.close();
});
})
})
})
.on("error",(err)=>{
    console.log(chalk.red(err.message));
});