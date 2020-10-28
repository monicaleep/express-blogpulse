let express = require('express')
let db = require('../models')
let router = express.Router()

router.post('/',(req,res)=>{
  // create a new comment using req.body
  db.comment.create(req.body)
  .then(createdComment=>{
    // redirect to the article we were viewing
    res.redirect(`/articles/${req.body.articleId}`)
  })
})

module.exports = router
