var express = require('express');
var router = express.Router();
var request = require('request');


/* Search Route */
router.get('/', function(req, res, next) {
    res.render("search")
});

module.exports = router;
