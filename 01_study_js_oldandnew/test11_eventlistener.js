//노드는 대부분 이벤트를 기반으로 하는 비동기 방식으로 처리
//EventEmitter를 상속받은 객체는 on(), emit()를 사용할 수 있는데
//on()은 어떤 이벤트가 자신에게 왔을때 어떻게 처리할것인지 이벤트 리스너를 생성
//emit() 다른쪽으로 이벤트를 전달

//미리 정의되어있는 이벤트
/*process.on('exit',function(){ //내부적으로 상속받은 객체, 언제든지 사용가능
    console.log('exit 이벤트 발생');
});

setTimeout(function(){
    console.log('2초 후에 시스템 다운');
    process.exit();
},2000);*/

//내가 만든 이벤트
process.on('tick',function(count){
    console.log('tick이벤트 발생 %s',count);
});
setTimeout(function(){
    console.log('2초 후에 tick이벤트 전달');
    process.emit('tick','2');
},2000);