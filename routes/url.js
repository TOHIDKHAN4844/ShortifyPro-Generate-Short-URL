const express=require("express");
const {  handlegenerateNewShortURL,
         handleGetAnalytics,
         handleUSEofShortURL
 }=require("../controllers/url")

const router=express.Router();

router.post("/" , handlegenerateNewShortURL);

router.get('/:shortId', handleUSEofShortURL);

router.get('/analytics/:shortId', handleGetAnalytics);

module.exports=router;