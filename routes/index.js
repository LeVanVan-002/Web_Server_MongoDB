var express = require('express');
const {
  count
} = require('../models/hoadon.js');
var router = express.Router();
var hoadon = require('../models/hoadon.js')

/* GET home page. */

router.get('/', function (req, res, next) {
  res.redirect('/1');

});
router.get('/:page', function (req, res, next) {
  var perPage = 3
  var page = req.params.page || 1
  hoadon
    .find()
    .skip((perPage * page) - perPage)
    .limit(perPage)
    .exec(function (err, dshh) {
      hoadon.countDocuments((err, count) => {
        if (err) return next(err)
        res.render('xemhoadon.ejs', {
          dshh,
          current: page,
          pages: Math.ceil(count / perPage),
          timkiem: false
        });
      })
    })

});
module.exports = router;