const{odd,even} = require('./test02_module');
const m2 = require('./test03_module_2');
function checkString(str){
    if(str.lenght%2){
        return odd;
    }
    return even;
}

console.log(m2(3));
console.log(checkString('hi'));

//ES2019모듈 사용 위의 코드가 아래처럼 바뀐다.
import { odd,even } from './test02_module';
//함수선언은 같음
export default checkString; //함수를 모듈로 사용한다고 하면
//사소한 차이 = 파일의 확장자를 .mjs로 지정, 실행 시 node --experimental-modules 파일명  처럼 해야함