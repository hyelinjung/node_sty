//별도의 모듈 파일을 만들고 그안에서 이벤트를 처리함
var util = require('util');
var EventEmitter = require('events').EventEmitter;

var Calc = function(){ //객체 생성
    var self = this; //this를 사용해 자기자신을 가리키고 그 객체 인자에 접근가능
    this.on('stop',function(){
        console.log('객체에 stop 이벤트 발생');
    });
};
util.inherits(Calc,EventEmitter);//해당 객체에 상속
Calc.prototype.add = function(a,b){
    return a+b;
}

module.exports = Calc; //해당 클래스 모듈을 사용할때 Calc객체 참조할 수 있게
module.exports.title = 'calculator';