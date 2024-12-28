var express = require('express');
var User = require('../models').User; //시쿼라이즈를 사용해 데이터를 핸들링
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.findAll()
  .then((users)=>{
    res.json(users);
  })
  .catch((err)=>{
    console.error(err);
    next(err);
  });
});

router.post('/', function(req, res, next) {
  User.create({
    name:req.body.name,
    age:req.body.age,
    married:req.body.married,
  })
  .then((result)=>{
    console.log(`결과 ${result}`);
    res.status(201).json(result);
  })
  .catch((err)=>{
    console.error(err);
    next(err);
  });
});



module.exports = router;
