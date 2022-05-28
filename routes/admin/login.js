var express = require('express');
var router = express.Router();
var user =require('../../models/user.js');
var bcrypt = require('bcrypt');

///////tìm kiếm
router.route("/")
.get(function (req, res, next) {
    res.render('dangnhap.ejs');
  })
  .post( function (req, res, next) {
   user.findOne({ username: req.body.tendangnhap},function (err, nguoidung)  {
      if(nguoidung) {
          bcrypt.compare(req.body.matkhau, nguoidung.password,function (err,same)  {
              if(same) 
                 {
                     req.session.userId = nguoidung._Id
                    res.redirect('/')
                 }
              else 
              res.redirect('/dangnhap')
          })
      }
      else 
      res.redirect('/dangnhap')
  })
  });
  module.exports = router;