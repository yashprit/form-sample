const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config');

var multer  = require('multer');
var upload = multer({ dest: 'uploads/' })

var AWS = require('aws-sdk');
AWS.config.loadFromPath('./s3_config.json');
var s3Bucket = new AWS.S3( { params: {Bucket: 'sample'} } );

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.post('/form', upload.single('profile'), function(req, res){
	console.log(req.body);
	res.sendStatus(200);


	/**

	AWS account is not avaible

	var buf = new Buffer(req.body.profile.replace(/^data:image\/\w+;base64,/, ""),'base64')

	var data = {
    Key: req.body.name, 
    Body: buf,
    ContentEncoding: 'base64',
    ContentType: 'image/jpeg'
  };
  s3Bucket.putObject(data, function(err, data){
      if (err) { 
        res.sendStatus(500)
      } else {
        res.sendStatus(200)
      }
  });**/

})

app.listen(3000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('devServer is running at http://localhost:3000/');
});
