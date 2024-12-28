//기존 객체리터럴방식과 바뀐 리터럴 방식
//1.기존
var sayNode = function() { //js는 함수를 객체로 인식함. 실제로 sayNode라는 함수를 실행하면 참조하는 함수가 실행
    console.log('Node');
}
var es ='ES';
var oldObject = { //객체 생성 리터럴
    sayJS:function(){console.log('JS');}, //객체의 속성값을 할당할때는 숫자, 문자열, 배열, 객체, 함수 등 어떤 데이터 타입이든 가능
    //즉 sayJS는 객체의 속성으로 메소드이지만 실행하면 할당한 함수가 실행(객체처럼 참조)
    sayNode:sayNode,
};
oldObject[es+6] = 'Fantastic';//속성명을 동적으로 생성

oldObject.sayNode();
oldObject.sayJS();
console.log(oldObject.ES6);

//2.바뀐 js
const newObject = {
    sayJS(){ //객체의 메서드에 함수를 연결할 때 :과 function을 붙이지 않아도됨
        console.log('JS');
    },
    sayNode, //속성명과 변수명이 겹치면 한번만 사용
    [es+6]: 'Fantastic',//리터럴 내부에서 생성 가능
};