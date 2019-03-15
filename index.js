const express = require('express');
const request = require('request');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;


var url = 'http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-US';

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  next();
}

app.use(express.static('dist'))
app.use(allowCrossDomain)
app.get('/backgroundimage', function (req, res) {
  request.get({
    url: url
  }, (err, jsonRes, data) => {
    if (err) {
      console.log('Error:', err);
    } else if (jsonRes.statusCode !== 200) {
      console.log('Status:', jsonRes.statusCode);
    } else {
      // data is already parsed as JSON:
      //console.log('Image Requested:', data);
      var jsonObj = JSON.parse(data);
      res.send(jsonObj.images[0].url);
    }
  });

})
app.get('/links', function (req, res) {
  var links = JSON.parse(fs.readFileSync('links.json', 'utf8'));
  res.send(links);
})

// link-list
app.get('/link-list*', function (req, res) {
  var linksType = req.path.split("/")[2];
  var linksPath = linksType + '_links.json';
  console.log(linksPath);
  if (fs.existsSync(linksPath)) {
    var links = JSON.parse(fs.readFileSync(linksPath, 'utf8'));
    res.send(links);
  } else {
    res.send("");
  }
})

app.listen(port, () => console.log(`Listening on ${port}!`))