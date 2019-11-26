const express = require('express')
const router = express.Router()


// 首页
router.get('/index', function (req, res) {

  // Student.find((err,data) => {
  //   if(err){
  //     return res.status(500).send("server error 500")
  //   }
  //   res.render('index.html',{
  //     students : data
  //   })
  // })
  res.send('hello word')
})




module.exports = router