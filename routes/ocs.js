"use strict";

const express = require('express');
const router = express.Router();
const request = require('request');


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
router.post('/Path', (req, res) => {

  var options = { method: 'POST',
  url: 'http://192.168.43.1:6624/osc/commands/status',
  body: '{\n    "id" : "CCS64ec8"\n}' };

  request(options, function (err, response, body) {
    (err) ? response.status(400).send(err) : res.send(body);
  });

});

// get Picture
router.post('/Pictures', (req, res) => {

  var options = { method: 'POST',
    url: 'http://192.168.43.1:6624/osc/commands/execute',
    headers:
     {
       accept: 'image/jpeg',
       'content-type': 'application/json'
     },
    body:
     { name: 'camera.getFile',
       parameters: { fileUrl: '/media/e/DCIM/Camera/20160716_012309.jpg' } },
    json: true };

    request(options, function (err, response, body) {
      (err) ? response.status(400).send(err) : res.send(body);
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
       parameters: { fileUri: '/media/e/DCIM/Camera/20160716_012309.jpg' } },
    json: true };

    request(options, function (err, response, body) {
      (err) ? response.status(400).send(err) : res.send(body);
    });

});





module.exports = router;
