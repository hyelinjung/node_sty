var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){// 내가 코딩
  next('route');// 라우터에서만 동작하는 특별한 기능-> 인자로 route인경우 연결된 나머지 미들웨어 건너뜀
  },function(req,res,next){console.log('실행되지 않음');next()},function(req,res,next){console.log('실행되지 않음');next()});
  
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('실행됨');
  res.render('index', { title: 'Express' }); //pug로 html을 렌더링할때 {..}객체를 변수로 집어넣는다.
});



module.exports = router;
/*
응답 메서드
1)send ->만능! 버퍼데이터,html코드,json 다 가능
2)sendFile ->파일을 보낼때
3)json->json데이터
4)redirect->다른 라우터로 보냄
5)render->템플릿 엔진을 렌더링할때
6)status().send()-> 응답코드를 작성할 수 있음 */
