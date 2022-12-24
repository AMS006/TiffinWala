const express = require('express');
const { addReview, getReview } = require('../controllers/review');
const { isUser } = require('../middleware/isUser');
const router = express.Router()

router.post('/',isUser, addReview);

router.get('/', getReview)

module.exports = router