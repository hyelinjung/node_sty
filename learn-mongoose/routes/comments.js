var express = require('express');
var router = express.Router();
var Comment =require('../schemas/comment');

/* GET users listing. */
router.get('/:id', function(req, res, next) {
   Comment.find({commenter:req.params.id}).populate('commenter')
  .then((co)=>{res.json(co);})
  .catch((error)=>{console.error(error);next(error);});
});
router.post('/',function(req,res,next){
 const comment = new Comment({
      commenter:req.body.id,
      comment:req.body.comment,
      
  });
  comment.save()
  .then((result)=>{Comment.populate(result,{path:'commenter'});})
  .then((result)=>{
    console.log(result);
    res.status(201).json(result);
  })
  .catch((error)=>{
    console.error(error);
    next(error);
  });
});

router.patch('/:id', function(req, res, next) {
    Comment.updateOne({_id:req.params.id},{comment:req.body.comment})
   .then((co)=>{res.json(co);})
   .catch((error)=>{console.error(error);next(error);});
 });
 router.delete('/:id', function(req, res, next) {
    Comment.removeListener({_id:req.params.id})
   .then((co)=>{res.json(co);})
   .catch((error)=>{console.error(error);next(error);});
 });

module.exports = router;
