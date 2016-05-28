var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');
var ctrlLocationsInfor = require('../controllers/localInfor');
var ctrlLocationComent = require('../controllers/localInfoComent');
var ctrlOthers = require('../controllers/others');

/* LOCATION PAGES - GET home page \\ locationInfor || addReview. */
router.get ('/', ctrlLocations.homelist);
router.get ('/locationlist', ctrlLocations.localList);
router.get ('/locationlist/info', ctrlLocationsInfor.locationInfo);
router.get ('/locationlist/review/new', ctrlLocationComent.addReview);

/* OTHER PAGE - Get Sobre Nós === About */
router.get('/about', ctrlOthers.about);

module.exports = router;
