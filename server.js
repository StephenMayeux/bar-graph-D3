const express = require('express');
const app = express();

app.use(express.static('public'));

const port = process.env.PORT || 3000;

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.listen(port, () => {
console.log('Express server has started on', port);

});
