//양방향 암호화? key를 사용해 암호를 복호화
const crypto = require('crypto');

//해당 알고리즘은 32바이트 키를 사용해야함. 열쇠는 3바이트 문자열이므로 오류발생, 아래 해결 코드
let key = Buffer.from('열쇠','utf-8'); //버퍼로 해당 길이 확인하고 나머지 부분은 0으로 패딩
if (key.length < 32) {
    // 키가 32바이트보다 짧으면 패딩을 추가
    key = Buffer.concat([key, Buffer.alloc(32 - key.length)]);  // 나머지 바이트는 0으로 채운다.
}
const iv = crypto.randomBytes(16);
const cipher = crypto.createCipheriv('aes-256-cbc',key,iv);//해당 알고리즘을 사용하는 암호화 객체 생성
let result = cipher.update('암호화할 문장','utf8','base64');// 2.입력 데이터 형식 3. 출려되는 암호문 형식
result+= cipher.final('base64');//암호화된 데이터의 마지막 부분 반환
console.log('암호화:',result);

//복호화
const decipher = crypto.createDecipheriv('aes-256-cbc',key,iv);
let deresult = decipher.update(result,'base64','utf8');
deresult+=decipher.final('utf8');
console.log('암호디코딩:',deresult);
