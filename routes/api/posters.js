const express = require('express');
const router = express.Router();

// @route   GET api/posters
// @desc    Test Route
// @access  Public
router.get('/', (req, res) => res.send('Posters route'));

module.exports = router;