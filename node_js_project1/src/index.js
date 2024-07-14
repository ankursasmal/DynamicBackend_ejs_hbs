// problemb 1 -> can't pass api value 
//  *** solution ***: static file casa html file undesr js file a api and all js ar kaj perform 
// korta hoba server basicaly routing ar kaj korba( because- a casa diff html file create 
// for all html file ,server thaka a la o sab js kaj normal project a jarokom hoi sa rokom hoba
// server only /basically rounting korba.)


// problemb 2 -> css ,js file can't define if declear outside then it not work because 
// path only hyml file parjanto but css and js parjanto nai ta hochanna

let fs=require('fs');
let http=require('http');
let path=require('path');
const PORT = process.env.PORT || 8000;

let staticPath=path.join(__dirname,'../public');
let server=http.createServer((req,res)=>{
    if(req.url==='/'){
      const fileStream = fs.createReadStream(path.join(staticPath,'index.html'));

      fileStream.pipe(res);
 
   }
 
   
else   if(req.url==='/home'){
   const flistream=fs.createReadStream(path.join(staticPath,'home.html'));

   //  fs.readFile(path.join(staticPath,'Home.html'),'utf-8'  ,(e,data)=>{
   //  res.end(data);
   //  }) 
   flistream.on('data', (chunk) => {
          res.write(chunk);
       });


     flistream.on('end', (chunk) => {
          res.write('chunk');
       });

        }
   else    if(req.url==='/contact'){
        fs.readFile(path.join(staticPath,'contact.html'),'utf-8'  ,(e,data)=>{
        res.end(data);
        }) 
        
           }
    else  if(req.url==='/about'){
            fs.readFile(path.join(staticPath,'about.html'),'utf-8'  ,(e,data)=>{
            res.end(data);
            }) 
            
               }
    else if(req.url==='/cart'){
                fs.readFile(path.join(staticPath,'cart.html'),'utf-8' ,(e,data)=>{
                res.end(data);
                }) 
                
                   }
    
    else  {
        // res.writeHead(404,{'Content-type:'text/html'});
        res.end('no');
    }
    
})
 server.listen(PORT,'127.0.0.1',()=>{
    console.log("ok");
 })
