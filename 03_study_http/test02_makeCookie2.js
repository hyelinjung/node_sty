//쿠키를 보내면 사용자 식별
const http =require('http');
const url = require('url');
const fs = require('fs');
const qs = require('querystring');

const parseCookie = (cookie = '')=> //쿠키의 값이 없을시 기본값 ''
    cookie
    .split(';')
    .map(v=> v.split('='))//쪼개진 배열이 v로 들어옴
    .map(([k, ...vs]) => [k, vs.join('=')])
    .reduce((acc, [k, v]) => {
        acc[k.trim()] = decodeURIComponent(v);
        return acc;
    },{});

    http.createServer((req,res)=>{
        const cookie = parseCookie(req.headers.cookie);
        if(req.url.startsWith('/login')){
            console.log(`쿼리url확인: ${req.url}`);
            const {query} = url.parse(req.url); //모듈을 사용해 url를 객체로 파싱-> 비구조화 할당으로 할당
            const {id} = qs.parse(query);
            console.log(`쿼리name확인: ${id}`);
            const expriedDate = new Date();
            expriedDate.setMinutes(expriedDate.getMinutes() +5);
            res.writeHead(302,{
                Location: '/',
                'Set-Cookie': `name=${encodeURIComponent(id)};Expires=${expriedDate.toUTCString()};HttpOnly;Path=/`,
            }); //쿠키는 설정할때 각종 옵션을 넣을 수 있고, 옵션간에는 ;로 구분 , 주의)쿠키 값에는 특정문자나 공백(중요!)등이 포함되면 오류가 발생
            res.end();
        }else if(cookie.name){
            res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
            res.end(`${cookie.name}님 안녕하세요`);
        }else{
            fs.readFile('./test02.html',(err,data)=>{
                if(err) throw err;
                res.end(data);
            });
        }
    }).listen(8080,()=>{console.log('연결완');});
    