//파일 읽어들이기 동기와 비동기 차이
var fs = require('fs');
/*
var data =fs.readFileSync('./read.txt','utf-8');//동기식으로
console.log(data);*/

//동기식
fs.readFile('./read.txt','utf-8',function(err,data){//콜백함수에서 오류err 발생으로 문제확인
    console.log(data);
});
console.log('비동기여서 먼저 읽힐 수도');

//파일생성
fs.writeFile('./outfile.txt','utf-8',function(err){
    if(err){
        console.log('파일생성 중 에러발생');
    }
});
console.log('파일생성 완료!');
