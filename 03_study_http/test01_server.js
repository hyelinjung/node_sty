//http서버연결,응답보내기
const http = require('http');
http.createServer((req,res)=>{
    res.write('<h1>안녕하십니까?</h1>');
    res.end('<h3>내용 무</h3>');
}).listen(8080,()=>{
    console.log('서버와 연결중');
});