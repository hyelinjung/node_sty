//배열에서 중간 객체 삭제시 delete를 사용하면 공간은 사라지지 않아 undefined가 뜸
//splice()를 사용해 추가,삭제 ->1.시작할 위치 인덱스 ,2 삭제할 개수 or 추가면 0 ,3 추가할 객체
var array =[{age:10,name:'kim'},{age:20,name:'ju'},{age:20,name:'qu'}];
array.splice(1,0,{age:20,name:'au'});
console.dir(array);
array.splice(1,1);
console.dir(array);
//배열 복사 slice() 1.시작 위치 ,2 끝 위치
var t =array.slice(0,2);
console.dir(t);
var t2 = array.slice(0,1);
console.dir(t2);
console.dir(array);
