var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');

//GET'S
router.get('/',  indexController.index);
router.get('/allCertifications',  indexController.certificados);


module.exports = router;
