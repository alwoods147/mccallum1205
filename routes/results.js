var express = require('express');
var router = express.Router();
var request = require('request');

/* GET flickr API data */
router.get('/', function(req, res, next) {
    var query = req.query.search;
        request("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=f453152a1f0ef1edb66306c832ae29a1&format=json&nojsoncallback=1&per_page=250&tags=" + query, function(error, response, body){
        if(!error && response.statusCode==200){
            var data = JSON.parse(body)
            res.render("results", {data: data, body:body});
        }
    });
});

module.exports = router;
