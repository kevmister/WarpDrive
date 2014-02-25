var	express = require('express'),
	http = require('http'),
	app = express(),
	server = http.createServer(app);
server.listen(80);
app.use(express.static(__dirname+'/www'));

app.get('*', function(req, res){
	res.end('404 - stop goofing around error.');
});