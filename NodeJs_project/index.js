const http=require('http');
const url=require('url');

let fs=require('fs');
var request=require('requests');

const homeFile=fs.readFileSync('home.html','utf-8')

 let server=http.createServer((req,res)=>{
    
if(req=='/'){
     requests('https://api.openweathermap.org/data/2.5/weather?q=pune&appid=4c66188ce0091ce667540247b0a3efb1',  { streaming })
     .on('data',(chunk)=>{
    let dat=  JSON.parse(chunk);
    // obj data ka arr ta convert now we get arry of an obj
    let arr=[dat];
        console.log(arr);
    })
     .on('end',(err)=>{
if(err){
    return console.log('connection',err);

}
console.log('end');
    })
 }
  
});

 server.listen(8000,'127.0.0.1',()=>{
    console.log('ok')
 })
 