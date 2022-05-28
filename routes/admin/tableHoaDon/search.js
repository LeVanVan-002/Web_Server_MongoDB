var express = require('express');
var router = express.Router();
var hoadon = require('../../../models/hoadon.js')

///////tìm kiếm
router.route("/")
.get( function (req, res, next) {
    res.render('timhoadon.ejs');
  })
  .post( function (req, res, next) {
    hoadon.find({
      // tìm theo ngày hàng hóa 
      ngay: {$regex: req.body.ngay , $options: 'i'} 
      // tìm kiếm tương đối theo 
      ///$options: 'i' tìm kiếm mặt hàng ko phân biệt hoa thường 
    }, (error, dshh) => {
      res.render('xemhoadon.ejs', {
        dshh,
        timkiem: true
      });
    })
  });
  module.exports = router;