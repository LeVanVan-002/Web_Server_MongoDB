var db = require('mongoose')
var bcrypt =require('bcrypt')//mã hóa 
db.connect('mongodb://127.0.0.1/qlhh')
var userSchema = db.Schema({
    username: String,
    password: String
}, {
    versionKey: false
})
//trước khi lưu mã hóa 
userSchema.pre('save', function (next) {
    var user = this 
    //hash hàm băm 
    bcrypt.hash(user.password,10,function(err, encrypted) {
        user.password = encrypted
        next()
    })
})
var user = db.model('user', userSchema)
module.exports = user 