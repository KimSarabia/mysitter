"use strict";

const express = require('express');
const router = express.Router();
const request = require('request');
const Jimp = require("jimp");

// get setup enviroment
// router.get('/', (req, res) => {
//
//   var options = { method: 'GET',
//       url: 'http://192.168.43.1:6624/osc/info',
//     };
//
//     request(options, function (err, response, body) {
//       (err) ? response.status(400).send(err) : res.send(body);
//     });
// });


// Take a picutre
router.post('/', (req, res) => {

  var options = { method: 'POST',
  url: 'http://192.168.43.1:6624/osc/commands/execute',
  body: '{\n "name": "camera.takePicture"\n}\n    ' };

  request(options, function (err, response, body) {
    (err) ? response.status(400).send(err) : res.send(body);
  });

});

// get File Path
router.post('/Path/:id', (req, res) => {

  var objBody = { 
    id: req.params.id
  };

  var ret = JSON.stringify(objBody);

  var options = { method: 'POST',
  url: 'http://192.168.43.1:6624/osc/commands/status',
  body: ret };

  request(options, function (err, response, body) {

    // console.log('bodybodybodybody', body);

    (err) ? response.status(400).send(err) : res.send(body);
  });

});

// get Picture
router.post('/Pictures/:fileParam', (req, res) => {

  var url = { 
    fileUrl: req.params.id
  };

  var ret = JSON.stringify(url);

  var options = { method: 'POST',
    url: 'http://192.168.43.1:6624/osc/commands/execute',
    headers:
     {
       accept: 'image/jpeg',
       'content-type': 'application/json'
     },
    body:
     { name: 'camera.getFile',
       // parameters: { fileUrl: '/media/e/DCIM/Camera/20160716_014638.jpg' } },
       parameters: { fileUrl: ret } },
    json: true };

    request(options, function (err, response, body) {
        (err) ? response.status(400).send(err) : res.send('body');
    });

});

// Delete Picture
router.post('/Delete', (req, res) => {

  var options = { method: 'POST',
    url: 'http://192.168.43.1:6624/osc/commands/execute',
    headers:
     {
         'content-type': 'application/json' },
    body:
     { name: 'camera.delete',
       parameters: { fileUri: '/media/e/DCIM/Camera/20160716_014638.jpg' } },
    json: true };

    request(options, function (err, response, body) {
      (err) ? response.status(400).send(err) : res.send(body);
    });

});

module.exports = router;
