"use strict";

const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/', (req, res) => {

  var options = { method: 'GET',
      url: 'http://192.168.43.1:6624/osc/info',
    };

    request(options, function (err, response, body) {
      (err) ? response.status(400).send(err) : res.send(body);
    });
});

router.post('/', (req, res) => {

  var options = { method: 'POST',
  url: 'http://192.168.43.1:6624/osc/commands/execute',
  body: '{\n "name": "camera.takePicture"\n}\n    ' };

  request(options, function (err, response, body) {
    (err) ? response.status(400).send(err) : res.send(body);
  });
});


module.exports = router;
