const http = require("http");
const server = http.createServer((req,res)=>{
if(req.url === "/"){
res.write("this is  server ");
res.end()
}else if(req.url==="/home"){
    res.write("this   ");
res.end();
}
});
const port = 3000;
server.listen(port,()=>{
console.log(`port chel gya ${port}`)
});