const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Poster = require('../../models/Poster');
const User = require('../../models/User');

// @route   POST api/posters
// @desc    Create a post
// @access  Private
router.post(
    '/',
    [
        auth,
        [
            check('images', 'image is required').isArray(1, 5),
            check('description', 'Enter description').notEmpty(),
        ],
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const user = await User.findById(req.user.id).select('-password');

            if (user.admin) {
                const newPoster = new Poster({
                    images: req.body.images,
                    description: req.body.description,
                    user: req.user.id,
                });

                const poster = await newPoster.save();

                res.json(poster);
            } else {
                return res.status(401).send('User Unauthorized');
            }
        } catch (err) {
            console.error(err.message);
            res.status(500).send('server error');
        }
    }
);

module.exports = router;
