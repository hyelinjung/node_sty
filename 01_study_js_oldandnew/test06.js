//배열은 []로 생성, 자바와 달라 같은 타입만 넣지 않아도 됨
//함수를 배열 객체에 투가
var array =[{age:10,name:'kim'},{age:20,name:'ju'}];
// var add = function(a,b){return a+b};
// array.push(add);
// console.dir(array);
// console.log(array[2](10,10));

//forEach()를 사용해 배열의 모든 값을 확인하기.forEach()는 함수를 인자로 받고 그 함수는 배열의 길이만큼 반복해서 호출된다
array.forEach(function(item,index){
    console.log('요소값:'+item.name+'인덱스 %d',index);
});

