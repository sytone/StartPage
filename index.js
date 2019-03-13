const express = require('express');
const request = require('request');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;


var url = 'http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-US';

app.use(express.static('dist'))
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
          console.log('Image Requested:', data);
          var jsonObj = JSON.parse(data);
          res.send(jsonObj.images[0].url);
        }
    });
    
  })
  app.get('/links', function (req, res) {
    var links = JSON.parse(fs.readFileSync('links.json', 'utf8'));
    res.send(links);
  })
app.listen(port, () => console.log(`Listening on ${port}!`))




