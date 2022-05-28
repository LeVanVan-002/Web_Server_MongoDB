var express = require('express');
var router = express.Router();
var hoadon = require('../../../models/hoadon.js')

router.route("/")
.get( function (req, res, next) {
    hh = {}
    res.render('suahanghoa.ejs', { hh });
  })
  ////
  .post(function (req, res, next) {
    hoadon.findOne({
        _id: req.body.maso
      },
      (error, hh) => {
        if (!req.files || Object.keys(req.files).length === 0) {
          hh.ngay = req.body.ngay,
            hh.tien = req.body.tien
          return hh.save(error => res.redirect('/'))
        }
        var hinh = req.files.hinhanh;
        var duongdan = 'public/image/' + hinh.name;
        hinh.mv(duongdan, function (err) {
          if (err)
            return res.status(500).send(err);
          hh.ngay = req.body.ngay,
            hh.tien = req.body.tien,
            hh.hinhanh = hinh.name
          return hh.save(error => res.redirect('/'))
        });
      })
  })
  router.route("/:id")
  .get( function (req, res, next) {
    hoadon.findOne({
        // ngay: req.body.ngay
        _id: req.params.id
      },
      (error, hh) => {
        res.render('suahanghoa.ejs', {
          hh
        });
      })
  });
  module.exports = router;