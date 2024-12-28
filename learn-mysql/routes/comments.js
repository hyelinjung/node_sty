var express = require('express');
var User = require('../models').User; //시쿼라이즈를 사용해 데이터를 핸들링
var Comment = require('../models').Comment;
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {
    Comment.findAll({
        include: { //include는 관련있는 모델을 불러올 수 있다. belongsTo등으로 연결해둬야 사용가능-> 사용자 id로 댓글 불러옴
            model: User,
            where: {id: req.params.id},
        },
    })
  .then((comments)=>{
    console.log(comments);
    res.json(comments);
  })
  .catch((err)=>{
    console.error(err);
    next(err);
  });
});

router.post('/', function(req, res, next) {
    Comment.create({
    commenter:req.body.id,
    comment:req.body.comment,
  })
  .then((result)=>{
    console.log(result);
    res.status(201).json(result);
  })
  .catch((err)=>{
    console.error(err);
    next(err);
  });
});

router.patch('/:id', function(req, res, next) {
    Comment.update({
      comment:req.body.comment
    },{
      where: {id:req.params.id}
    })
    .then((result)=>{
      res.json(result);
    })
    .catch((err)=>{
      console.error(err);
      next(err);
    });
  });
  
  router.delete('/:id', function(req, res, next) {
    Comment.delete({
      where:{id: req.params.id}
    })
    .then((result)=>{
      res.json(result);
    })
    .catch((err)=>{
      console.error(err);
      next(err);
    });
  });
module.exports = router;
