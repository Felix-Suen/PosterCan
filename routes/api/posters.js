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
                return res.status(401).json({msg: 'User Unauthorized'});
            }
        } catch (err) {
            console.error(err.message);
            res.status(500).send('server error');
        }
    }
);

// @route   GET api/posters
// @desc    Get all posters
// @access  Public
router.get('/', async (req, res) => {
    try {
        const posters = await Poster.find().sort({ date: -1 });
        res.json(posters);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error');
    }
});

// @route   GET api/posters/:id
// @desc    Get poster by ID
// @access  Public
router.get('/:id', async (req, res) => {
    try {
        const poster = await Poster.findById(req.params.id);
        
        if (!poster) {
            return res.status(404).json({ msg: "Poster not found" });
        }
        
        res.json(poster);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: "Poster not found" });
        }
        res.status(500).send('server error');
    }
});

// @route   DELETE api/posters/:id
// @desc    delete a poster
// @access  Private
router.delete('/:id', auth, async (req, res) => {
    try {
        const poster = await Poster.findById(req.params.id);
        
        if (!poster) {
            return res.status(404).json({ msg: "Poster not found" });
        }

        if (poster.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: "User not authorized" });
        }

        await poster.remove();
        
        res.json({ msg: "Poster removed" });
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: "Poster not found" });
        }
        res.status(500).send('server error');
    }
});

module.exports = router;
