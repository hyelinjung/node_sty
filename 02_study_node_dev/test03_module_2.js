//모듈1을 참조하는 모듈
const{odd,even}=require('./test02_module');
function check(num){
    if(num%2){//자바스크립트에서는 1은 true 0은 false. 자바는 boolean타입으로 조건을 명시해야함
        return odd;
    }
    return even;
}
module.exports = check; //함수나 변수도 대입가능