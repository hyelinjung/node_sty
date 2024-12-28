//1.os:웹 브라우저에 사용되는 자바스크립트는 운영체제의 정보를 가져올 수 없지만 노드는 os 모듈에 정보가 담겨 있어 가져올 수 있다.
//2.path:폴더와 파일의 경로를 쉽게 조작할 수 있도록도와주는 모듈 왜? 윈도우와 리눅스는 \와 /로 다르기 때문
/**상대경로와 절대경로
 * 절대경로는 루트 폴러나 노드 프로ㅔ스가 실행되는 위치가 기준. 상재 경로는 현재 파일이 기준이 된다.현재 파일과 같은 결로면 점 하나
 * 상위 경로면 점두개 .. 를 사용해 표현
 * C:\study_node\study_node_dev 에서 C:\로 가고 싶으면 절대경로에서는 그냥 C:\입력, 상대경로에서는 ..\.. 해야함.
 */
//3.url-방식 두가지
const url = require('url');
const URL =url.URL;//생성자,주소받으면 속성에 맞게 대입됨
const geturl =new URL('https://www.google.com/search?q=study');
console.log('new URL():',geturl); //속성 중 쿼리스트링을 객체화한거 있음
console.log('nrl.format():',url.format(geturl));
console.log('------------------------------------');//다른 방식
const parsedUrl = url.parse('https://www.google.com/search?q=study');
console.log('url.parse()',parsedUrl);
console.log('url.format()',url.format(parsedUrl));
