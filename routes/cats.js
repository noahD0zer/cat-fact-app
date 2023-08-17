var express = require('express');
var router = express.Router();

//get cat index
router.get('/', function(req,res,next) {
  res.redirect("/cats/fact")
});
//get cats/fact
router.get('/fact', async function(req,res,next) {
  let catFact = await fetch("https://catfact.ninja/fact")
  .then(res => res.json())
  res.render("cat/fact", { title: "Cat Fact", fact:catFact.fact })
});


/* GET users listing. */
//router.get('/', function(req, res, next) {
//  res.send('respond with a resource');
//});

module.exports = router;
