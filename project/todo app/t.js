import readline from "readline";
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
const todos = [];
const showmenu= () =>{
console.log("\n 1: add a task ");
console.log(" 2: view a task ");
console.log(" 3: exit ");
rl.question("choose a option",handleinput);
}
const handleinput =(option)=>{  
    if(option==="1"){
        rl.question("enter a task",(task)=>{
        todos.push(task);
        console.log("task added ",task);
        
     showmenu();
    }) 
        
    }else if(option==="2"){
            console.log("\n your todo list is here");
            todos.forEach((task,index)=>{
           console.log(`${index+1}.${task}`);
            })
    showmenu();
    } else if(option==="3"){
    console.log("good byeeeeeeeeeee");
    rl.close();
    }else {
        console.log("invalid option plese try again");
        showmenu();
    }
}
showmenu();
 