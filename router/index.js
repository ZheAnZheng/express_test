const express=require('express')
const router=express.Router()
const home=require('./home.js')
const nav=require('./nav/nav.js')
router.use('/',home)
router.use("/", nav);

module.exports=router;