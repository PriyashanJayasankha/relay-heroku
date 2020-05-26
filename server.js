const express = require('express');

var app = express();
app.use(express.static('./dist/relay'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/relay/'});
});

app.listen(process.env.PORT || 8080);
