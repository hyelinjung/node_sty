//서버가 클라이언트를 파악하기 위해 응답과 같이 보내는 쿠키
//쿠키는 요청과 응답의 헤더에 저장.

//서버에서 쿠키생성->클라이언트에게 보내기
const http = require('http');
const parseCookie = (cookie = '')=> //쿠키의 값이 없을시 기본값 ''
    cookie
    .split(';')
    .map(v=> v.split('='))//쪼개진 배열이 v로 들어옴
    .map(([k, ...vs]) => [k, vs.join('=')])
    .reduce((acc, [k, v]) => {
        acc[k.trim()] = decodeURIComponent(v);
        return acc;
    },{});

//위의 코드에서 =>를 사용한 함수이니깐 명확하기 위해서 책과 다르게 =>{}를 사용했다-> 오류
//원인? 값을 반환하지 않아 undefined가 발생함. 함수는 내부에서 {}가 없는 단일 표현식 함수는 return을 명시적으로 적지 않아도 암묵적으로 반환값을 마지막 표현식의 값으로 반환한다. 즉 {}가 없어도 reduce가 반환한 최종 객체가 함수의 반환값이다. 만약 {}를 사용한다면  return cookie를 사용해야함.



http.createServer((req,res)=>{
 const cookie = parseCookie(req.headers.cookie);
 console.log(req.url,cookie);
 res.writeHead(200,{'Set-Cookie':'myCookie=test'});//클라이언트에게 myCookie라는 이름을 가진 쿠키를 심으라고 명령
 res.end('필승');
}).listen(8080,()=>{console.log('포트열림');});