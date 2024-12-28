//노드에서는 기본적인 내장 객체와 내장 모듈을 제공
/*1.process.env
서버나 데이터베이스의 비번을 코드에 직접입력하는 것은 위험
const secretId= process.env.SECRET_ID
const secretPwd = process.env.SECRET_CODE같이 대체하고 env에 속성을 직접 설정*/
//2.실행중인 노드 프로세스 강종
let i =1;
setInterval(()=>{
    if(i ===5){
        console.log('종료');
        process.exit();
    }
    console.log(i);
    i++;
},1000);