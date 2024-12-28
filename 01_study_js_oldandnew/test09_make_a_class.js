//객체 지향처럼 함수로 class같은 원본을 만들고 인스턴스 생성 가능
function Person(name,age){//생성자
    this.name = name; //속정을 만들거나 접근하고 싶으면 this사용
    this.age = age;
}
Person.prototype.walk = function(speed){ //prototype은 객체 자신을 가리킴 즉 Person.walk과 같음
    return speed;
}

var p1 = new Person('kim',20);
var p2 = new Person('ji',30);
console.log(p1.name+'의 속도는'+p1.walk(10));