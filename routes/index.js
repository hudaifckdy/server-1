const express = require('express');

const router = express.Router();


router.post('/login',(req,res)=>{

 console.log(req.body);
 res.json({status:200})
})

router.get('/',(req,res)=>{
  res.end('hiii')
})


module.exports = router;