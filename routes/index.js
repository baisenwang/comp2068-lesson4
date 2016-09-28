var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lesson 4',
                        message: 'This is a message.' });
});

// Get random page
router.get('/random', function (req, res, next) {
    // generate random #
    var randomNumber = Math.random();
    res.render('random', {title: 'random',
        randomNumber:randomNumber})
})

module.exports = router;
