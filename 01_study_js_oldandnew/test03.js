// var calc = {}; //객체 생성 후, 그 객체에 add속성을 추가하고 함수를 할당
// calc.add = function(a,b){return a+b;}
// console.log('모듈로 분리하기 전 calc.add 함수 호출 결과: %d',calc.add(10,10));

var calc = require('./module01');
console.log('모듈로 분리한 후 calc.add 함수 호출 결과: %d',calc.add(10,10));
