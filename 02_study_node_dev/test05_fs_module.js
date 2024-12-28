//fs모듈로 파일에 쉽게 접근 가능
const fs = require('fs');
fs.readFile('./test05_readme.txt',(err,data)=>{
    if(err) throw err;
    console.log(data); 
    console.log(data.toString()); //버퍼는 사람이 읽을 수 없으므로 문자열로 변환
});

//파일 생성
fs.writeFile('./write.txt','글이 입력됨다',(err)=>{
    if(err)throw err;
    fs.readFile('./write.txt',(err,data)=>{
        if(err) throw err;
       
        console.log(data.toString());
    });
});