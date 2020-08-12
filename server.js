const express = require('express');
const app = express();
const data = require('./src/data.json');
const path = require('path');

app.get('/api/fashion', (req, res) => {
	res.send(JSON.stringify(data));
});

app.use('/', express.static(path.join(__dirname, '/build')));

app.listen(7000, () => {
	console.log('port listening on 7000');
});
