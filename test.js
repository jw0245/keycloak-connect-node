
const express = require('express');
const router = express.Router();
const testController = require('./controller/test-controller.js');
app.use('/test', testController);

router.get('/anonymous', function(req, res){
    res.send("Hello Anonymous");
});
router.get('/user', function(req, res){
    res.send("Hello User");
});

router.get('/admin', function(req, res){
    res.send("Hello Admin");
});

router.get('/all-user', function(req, res){
    res.send("Hello All User");
});


module.exports = router;










/* TripleDES 암호화 방식 테스트
const CryptoJS = require("crypto-js");
var t = "b";
var d = "john";
var key = CryptoJS.MD5(t).toString()
var key1 = CryptoJS.MD5("a").toString()
var param = CryptoJS.TripleDES.encrypt(d, key).toString();
console.log('encrypt',param) // it should return `john`. but it returns a different value.
console.log('decrypt',CryptoJS.TripleDES.decrypt(param, key).toString(CryptoJS.enc.Utf8))
*/