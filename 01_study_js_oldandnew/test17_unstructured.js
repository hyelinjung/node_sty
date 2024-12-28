//객체나 배열로부터 속성이나 요소를 쉽게 꺼낼 수 있다.
//1.일반적인
var candy={
    status:{
        name:'node',
        count:5,
    },
    getCandy:function(){
        this.status.count--;
        return this.status.count;
    },
};
var getCandy = candy.getCandy;
var count = candy.status.count;
//비구조화 할당 형식
const candy={
    status:{
        name:'node',
        count:5,
    },
    getCandy(){
        this.status.count--;
        return this.status.count;
    },
};
const {getCandy,status :{count}} = candy;//candy 객체안의 속성을 찾아 변수와 매칭.실행문이 끝나면 각각 변수들은 초기화 된것임
//배열도 같은 const{no,ob, , boo} =array; 중간의 공백은 무시