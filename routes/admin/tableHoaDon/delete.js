var express = require('express');
var router = express.Router();
var hoadon = require('../../../models/hoadon.js')

///////http://localhost:3000/xoa

router.route("/")
.get( function (req, res, next) {
    res.render('xoahanghoa.ejs');
  })
  ////
  .post( function (req, res, next) {
    hoadon.deleteOne({
      ngay: req.body.ngay
    }, error => res.redirect('/'))
  })
  ////nhấn nút xóa theo id
  router.route("/:id")
  .get( function (req, res, next) {
    hoadon.deleteOne({
      _id: req.params.id
    }, error => res.redirect('/'))
  });
  
module.exports = router;