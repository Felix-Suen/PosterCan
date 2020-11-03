const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

// @route   POST api/users
// @desc    Register User
// @access  Public
router.post(
    '/',
    [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Please Enter a valid password').isLength({ min: 6 }),
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        res.send('User route');
    }
);

module.exports = router;
