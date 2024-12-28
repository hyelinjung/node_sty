//객체를 만듦과 동시에 초기화
var Obj ={
    age: 10,
    name: 'kim',
    add: function(a,b){return a+b}
}

console.dir(Obj);
console.log('함수값 %d',Obj.add(10,10));