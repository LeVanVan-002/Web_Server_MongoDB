var express = require('express');
var router = express.Router();
var user =require('../../models/user.js');

///////tìm kiếm
router.route("/")
.get( function (req, res, next) {
    res.render('dangky.ejs');
  })
  .post( function (req, res, next) {
  var nguoidung = new user({
      username: req.body.tendangnhap,
      password: req.body.matkhau
  })
  nguoidung.save(err => res.redirect('/'))
  });
  module.exports = router;