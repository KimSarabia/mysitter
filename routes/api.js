var express = require('express');
var router = express.Router();

router.use("/ocs", require("./ocs") );

module.exports = router;
