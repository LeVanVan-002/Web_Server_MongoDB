var express = require('express');
var router = express.Router();
var hoadon = require('../../../models/hoadon.js')

//http://localhost:3000/them mở trang themhanghoa.ejs
router.route("/")
    .get( function (req, res, next) {
    res.render('themhanghoa.ejs');
  })
  //nhận từ action lưu vào database 
  .post( function (req, res, next) {
    if (!req.files || Object.keys(req.files).length === 0) {
      var hh = new hoadon({
        ngay: req.body.ngay,
        tien: req.body.tien
      })
      return hh.save(error => res.redirect('/'))
    }
    var hinh = req.files.hinhanh;
    var duongdan = 'public/image/' + hinh.name;
    hinh.mv(duongdan, function (err) {
      if (err)
        return res.status(500).send(err);
      var hh = new hoadon({
        ngay: req.body.ngay,
        tien: req.body.tien,
        hinhanh: hinh.name
      })
      ///sau khi thêm về trang chủ
      hh.save(error => res.redirect('/'))
    })
  });
  ////
  module.exports = router;