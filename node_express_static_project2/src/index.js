//*** only problenb -> can't pass api value src/index.js to  public html files ******
//  *** solution ***: static file casa html file undesr js file a api and all js ar kaj perform 
// korta hoba server basicaly routing ar kaj korba( because- a casa diff html file create 
// for all html file ,server thaka a la o sab js kaj normal project a jarokom hoi sa rokom hoba
// server only /basically rounting korba.)

//  ******* dynamic casa server tahka api data passs hoi **********
// Dynamicasa server thia pathano hi karon partial create hoi doc.geteleById a sab dia axcess
// kom kora hob ta a rut a thaka sakan thaka api data pass kora hoi and antoher benifit 
// html a js code api data likha possible  


let fs=require('fs');
let path=require('path')
let express=require('express');
 let app=express();
const PORT=process.env.PORT || 3000;

let staticPath=path.join(__dirname,'../public');

app.use(express.static(staticPath));

app.use((req,res,next)=>{
    next();

})

app.get('/',(req,res)=>{
    res.sendStatus(200);
    res.sendFile(path.join(staticPath,"index.html"))
 })
app.get('/home',(req,res)=>{
    res.sendFile(path.join(staticPath,"Home.html"))
})
app.get('/about',(req,res)=>{
    res.sendFile(path.join(staticPath,"about.html"))
})
app.get('/cart',(req,res)=>{
    res.sendFile(path.join(staticPath,"cart.html"))
})
app.get('/contact',(req,res)=>{
    res.sendFile(path.join(staticPath,"contact.html"))
})
// app.get('/contact:user',(req,res)=>{
//     res.send(req.params.user);
// })
 
app.get('*',(req,res)=>{
    res.sendFile(path.join(staticPath,"Error404.html"))
})
 
app.listen(PORT,'127.0.0.1',()=>{
    console.log('ok we understand');
})
