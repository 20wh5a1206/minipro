var express = require('express');
var router = express.Router();
var dbLib = require("../lib/fetchUtils")

router.get('/data', dbLib.getData)

module.exports =router;