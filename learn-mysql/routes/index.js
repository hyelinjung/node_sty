var express = require('express');
var User = require('../models').User; //시쿼라이즈를 사용해 데이터를 핸들링
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/',function(req,res,next){
  User.findAll()
  .then((users)=>{
    res.render('sequelize',{users});
  })
  .catch((err)=>{
    console.error(err);
    next(err);
  });
});

module.exports = router;
