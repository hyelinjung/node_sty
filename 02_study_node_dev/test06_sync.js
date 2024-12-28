//동기와 비동기 메서드 흐름
/**
 * ※비동기 함수는 백그라운드에서 어떻게 실행되는가?
백그라운드에서 실행된다는 말은 메인스레드와 별개의 작업이 병렬로 실행된다는 말로 
크게 프로그램의 주요 흐름이 진행되는 곳은 메인 스레드이고 비동기 작업은(예: setTimeout, 파일 읽기, HTTP 요청 등) 백그라운드 큐에서 처리되고,작업이 끝난 뒤 콜백 함수를 이벤트 큐에 추가한다.
이때 이벤트 루프가 콜백 큐에서 작업을 하나씩 꺼내 메인 스레드로 전달한다.
※노드에서 동기-블로킹 방식은 백그라운드 작업이 끝나야 return된다. 비동기-호출한 함수가 바로 return되어 다음작업으로 넘어가고, 백그라운드 작업 완료 여부는 신경쓰지 않고
나중에 백그라운드가 알림을 줄때 처리 */
const fs = require('fs');
console.log('시작');
fs.readFile('./test05_readme.txt',(err,data)=>{
    if(err) throw err;
      console.log('1:',data.toString()); 
});
fs.readFile('./test05_readme.txt',(err,data)=>{
    if(err) throw err;
      console.log('2:',data.toString()); 
});
fs.readFile('./test05_readme.txt',(err,data)=>{
    if(err) throw err;
      console.log('3:',data.toString()); 
});
fs.readFile('./test05_readme.txt',(err,data)=>{
    if(err) throw err;
      console.log('4:',data.toString()); 
});

console.log('끝');

//2.동기
console.log('시작');
let sync = fs.readFileSync('./test05_readme.txt');
console.log('1:',sync.toString()); 
sync =fs.readFileSync('./test05_readme.txt');
console.log('2:',sync.toString()); 
sync =fs.readFileSync('./test05_readme.txt');
console.log('3:',sync.toString()); 
console.log('끝');
//백그라운드가 작업하는 동안 메인 스레드는 놀고있어 비효율적임

//3.그럼 비동기를 사용하고 순서를 유지하고 싶으면-> 콜백함수 사용-> 하지만 콜백 지옥에 갇힘->promise나 async/await로 해결가능