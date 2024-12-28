//서버쪽 자바스크립트
const http = require('http');
const fs = require('fs');
const users ={};

http.createServer((req,res)=>{
 if(req.method === 'GET'){
    if(req.url ==='/'){
        fs.readFile('./test03.html',(err,data)=>{
            if(err) throw err;
            res.end(data);
        });
    }else if(req.url ==='/about'){
        fs.readFile('./test03_about.html',(err,data)=>{
            if(err)throw err;
            res.end(data);
        });
    }else if(req.url ==='/users'){
       return res.end(JSON.stringify(users));
    }
    res.writeHead(404,'NOT FOUND');
    res.end('NOT FOUND');
 }else if(req.method ==='POST'){

 }else if(req.method ==='PUT'){

 }else if(req.method ==='DELETE'){

 }
 res.writeHead(404,'NOT FOUND');
 res.end('NOT FOUND');
}).listen(8080,()=>{
    console.log('포트 열림');
});
