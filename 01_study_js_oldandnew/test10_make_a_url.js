//주소문자열->객체(parse()) 객체->문자열(format())
var url = require('url');
var obj_url = url.parse('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%9A%B4%EB%8F%99');
var string_url = url.format(obj_url);

var querystring = require('querystring');
var param = querystring.parse(obj_url.query);//쿼리문자열을 파라미터로 분리하여 객체의 속성값으로 지정

 console.log('쿼리의 값 %s',param.query);
 console.log('원상복구 %s',querystring.stringify(param));

console.log('문자열 %s',string_url);
console.dir(obj_url);