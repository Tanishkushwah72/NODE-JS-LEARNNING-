const events = require("events");
const emit = new  events();
//normal-------------------------------------------------

// emit.on("great",()=>{
// console.log(`hello boy`);
// });
// emit.emit("great",);
//WITH DATA ---------------------------------------------

// emit.on("great",(name)=>{
// console.log(`hello boy  ${name}`);
// });
// emit.emit("great","TANISH");
 
//WITH MULTIPEL DATA-----------------------------------------------

// emit.on("student",(name,age,city)=>{
//     console.log(`name is ${name}`);
//     console.log(`age is ${age}`);
//     console.log(`city is ${city}`);
// });
// emit.emit("student","tanish","20","kota");
//MULTIPEL LISTNERS-------------------------------------

// emit.on("login", () => {
//     console.log("User Logged In");
// });
// emit.on("login", () => {
//     console.log("Email Sent");
// });
// emit.on("login", () => {
//     console.log("Activity Saved");
// });
// emit.emit("login");
