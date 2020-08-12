const express = require('express');
const app = express();
const data = require('./src/data.json');
const path = require('path');
const PORT = process.env.PORT || 7000;

app.get('/api/fashion', (req, res) => {
	res.send(JSON.stringify(data));
});

app.use('/', express.static(path.join(__dirname, '/build')));

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}!`);
});
