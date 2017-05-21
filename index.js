var http = require('http');
var url = require('url');
var request = require('request');

var port = process.env.PORT || 3000;

http.createServer(onRequest).listen(port);

function onRequest(req, res) {

    var queryData = url.parse(req.url, true).query;
    if (queryData.url) {
        request({
            url: queryData.url
        }).on('error', function(e) {
            res.end(e);
        }).pipe(res);
    }
    else {
        res.end("no url found");
    }
}
