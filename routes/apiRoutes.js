const router=require('express').Router()
const myntra=require('./myntra')
const flipkart=require('./flipkart')
const snapdeal=require('./snapdeal')

router.get('/flipkart',flipkart)

router.get('/snapdeal',snapdeal)

router.get('/myntra',myntra)

module.exports=router;