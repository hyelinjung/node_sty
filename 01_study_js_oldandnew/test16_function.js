//화살표 함수
//1.기본
function add(x,y){
    return x+y;
}
//2.
const add2 = (x,y)=>{return x+y;}
//3.
const add3 = (x,y)=>x+y;//리턴 생략가능
//4
const add4 = (x,y) => (x+y);

//this 바인딩 차이
//1.
/*변수에 this를 저장하는이유? js에서는 this는 함수가 호출될 때 결정되는데,
 foreach 내부의 콜백함수에서 this는 메서드를 호출한 객체를 가리킴.
  즉, relation객체를 가리키지 않고, foreach 의 콜백 함수 자체를 호출한 컴텍스트를 가리킴
 */
var relation={
    name:'zero',
    friends:['neo','hero','xero'],
    log:function(){
        var that = this;
        this.friends.forEach(function(fri){//배열의 각 요소에 대해 반복하면서 각 친구 이름을 fri이라는 매개변수로 전달
            console.log(that.name,fri);
        });
    },
};

//2.
/**
 * 1.번의 function을 사용시 this는 동적으로 결정.foreach 호출에 의해 새로운 this값을 가질수 있어 that을 사용해 this를 참조해야함
화살표 함수는 this가 정적으로 외부 this를 상속받는다.
 */
const relation2={
    name:'zero',
    friends:['xo','lin','la'],
    log(){
        this.friends.forEach(fri=>{
            console.log(this.name,fri);
        });
    },
};