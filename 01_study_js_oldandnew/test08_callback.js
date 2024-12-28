//1.콜백함수
/*function add(a,b,callback){
    var result = a+b;
    callback(result);
}

add(10,10,function(a){
    console.log('콜백함수 실행');
    console.log(a);
});*/

//2. 콜백함수+함수의 반환값이 또 다른 함수
function add(a,b,callback){
    var count =0;
    var result = a+b;
    callback(result);

    var add_function = function(){
        count++;
        console.log(count);
        return a+'+'+b+'='+result;
    };
    return add_function;
}

var return_funcion = add(10,10,function(a){
    console.log('콜백함수');
    console.log(a);
});
//함수에서 함수가 반환될때는 부모 함수 내부의 설정한 변수에 접근가능
//-> 부모함수는 return 되어서 메모리에서 사라져 접근불가하더라도 특수하게 이경우는 가능 == 클로저(Closure)
console.log(return_funcion());
console.log(return_funcion());
console.log(return_funcion());