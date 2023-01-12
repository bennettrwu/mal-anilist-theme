var express = require('express');

const app = express();

app.use(express.static(__dirname));
app.listen(8080);

app.get('/:file', (req, res) => {

	console.log(__dirname + '\\' + req.params.file)
	res.sendFile(__dirname + '\\' + req.params.file);
})