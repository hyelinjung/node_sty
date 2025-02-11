const express = require('express');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');


const pageRouter = require('./routes/page');

const app = express();
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');
//app.set('view engine','ejs');
app.set('port',process.env.PORT || 8001);

console.log('SECRET_KEY:', process.env.COOKIE_SECRET);

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
//app.use(cookieParser('nodebirdsecret'));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave:false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie:{
        httpOnly:true,
        secure:false,
    },
}));
app.use(flash());
app.use('/',pageRouter);
app.use((req,res,next)=>{
    const err = new Error('Not Found');
    err.status =404;
    next(err);
});

app.use((err,req,res,next)=>{
   res.locals.message = err.message;
   console.log('에러발생',err.message);
   res.locals.error = req.app.get('env') === 'development' ? err : {};
   res.status(err.status ||500);
   res.render('error');
});

app.listen(app.get('port'),()=>{
    console.log(app.get("port"),'번 포트에서 대기중');
});

