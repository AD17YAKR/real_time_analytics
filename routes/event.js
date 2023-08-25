const express = require('express');
const router = express.Router();
const { createEvent, getAggregatedEventData } = require('../controllers/event');

router.route('/events').post(createEvent);

router.route('/metrics').get(getAggregatedEventData);

module.exports = router;
