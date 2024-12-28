//암호화를 도와주는 모듈
//단방향 암호화- 암호 복호화 불가
//사용하는 해시 기법? 어떤 문자열을 정해진 길이의 문자열로 바꾸는것
const crypto = require('crypto');
console.log('base64',crypto.createHash('sha512').update('비밀번호').digest('base64'));
console.log('hex',crypto.createHash('sha512').update('비밀번호').digest('hex'));
console.log('base64_02',crypto.createHash('sha512').update('다른 비밀번호').digest('base64'));
//해시 알고리즘,암호화할 문장,인코딩 알고리즘

//2.다른 문자열인데 암호화하고 보니 같은 암호문자열로 나오는 경우 강력한 알고리즘으로 변경
//pbkdf2 알고리즘 : 기존 문자열에 salt라는 문자열을 붙이고 해시 알고리즘을 반복해 적용
crypto.randomBytes(64,(err,buf)=>{ //64바이트 길이의 문자열 생성
const salt = buf.toString('base64');
console.log('salt:',salt);
crypto.pbkdf2('비밀번호',salt,100000,64,'sha512',(err,key)=>{console.log('password:',key.toString('base64'));});
});//sha512로 변환된 결과값을 10만번 반복
