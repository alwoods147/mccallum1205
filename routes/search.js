var express = require('express');
var router = express.Router();
var request = require('request');


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render("search")
});

module.exports = router;
