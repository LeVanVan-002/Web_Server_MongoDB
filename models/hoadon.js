var db = require('mongoose')
db.connect('mongodb://127.0.0.1/qlhh')
var hoadonSchema = db.Schema({
    ngay: String,
    tien: Number,
    hinhanh : String
}, {
    versionKey: false
})
var hoadon = db.model('hoadon', hoadonSchema)
module.exports = hoadon //hoa đơn trong cmd hoadons có s  (mongoose là thế )