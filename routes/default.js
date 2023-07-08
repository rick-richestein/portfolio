const express = require('express');

const path = require('path');

const router = express.Router();

router.get('/',(req,res,next)=>{
    console.log("HOME PAGE");
    res.sendFile(path.join(__dirname,'../','views','default.html'));
});

module.exports = router;