var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));//템플릿 파일이 위치한 폴더
app.set('view engine', 'pug'); //app.set을 통해 익스프레스 애블 설정할 수 있다== 데이터를 app에 저장할 수 있다.

/*
내가 만든 미들웨어-요청이 들어올때 콘솔에 메시지를 찍는
*/
app.use(function(req,res,next){
  console.log(req.url,'저도미들웨어로 끼워주세용');
  next(); //주의!! 반드시 next()를 실행해야 다음 미들웨어로 넘어감
});

app.use(logger('dev')); //.use()-> 메서드의 인자로 들어있는 함수가 미들웨어. 클라이언트에서 요청이 들어오면 모든 미들웨어를 다 거치고 응답
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());// 동봉된 쿠키를 해석
app.use(session({ //세션에 대한 정보를 인자로 받는다
  resave: false,
  saveUninitialized: false,
  secret: 'secret code', //세션 쿠키의 서명, cookie-parser의 secret과 같게 설정
  cookie: {// 세션 쿠키에 대한 설정, 현재는 메모리에 세션을 저장함-> 배포시에는 store 옵션을 사용해 디비를 연결해 세션을 유지 추천
    httpOnly : true,
    secure: false,
  },
}));


app.use('/', indexRouter); //use 말고 http 메서드 get,post등 사용가능
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404)); //next의 인자값은 아래 에러 핸들러 콜백함수 인자로 들어감
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;//res.locals 을 사용해 객체를 변수에 저장해 템플릿에서 사용가능
  res.locals.error = req.app.get('env') === 'development' ? err : {};//개발환경일때만 표시

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app; //./bin/www에서 모듈을 사용함
