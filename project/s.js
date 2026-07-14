import { createServer } from "http";
import { readFile } from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = createServer(async(req,res)=>{
    if(req.method==="GET"){
        if(req.url === "/"){
           
            try{
             const data = await readFile(path.join(__dirname,"index.html"));
             res.writeHead(200,{"Content-Type": "text/html"});
             res.end(data);
            }catch(error){
             res.writeHead(404,{"Content-Type": "text/html"});
             res.end("404 page not found ")
            }
    } else 
         if(req.method==="GET"){
        if(req.url === "/style.css"){
           
            try{
             const data = await readFile(path.join(__dirname,"style.css"));
             res.writeHead(200,{"Content-Type": "text/css"});
             res.end(data);
            }catch(error){
             res.writeHead(404,{"Content-Type": "text/css"});
             res.end("404 page not found ")
            }
        }
    }
    }
})
const port = 3001;
server.listen(port,()=>{
    console.log(`server is running in  http://localhost:${port}`)
});