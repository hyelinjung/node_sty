//html파일을 불러들여와 res
const http = require('http');
const fs = require('fs');
http.createServer((req,res)=>{
fs.readFile('./test01.html',(err,data)=>{
if(err)throw err;
res.end(data);//버퍼로 보내도됨
});
}).listen(8080,()=>{console.log('포트연결 중비중');});