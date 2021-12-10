const express = require('express');
const router = express.Router();

const { uploadProductImage } = require('../controllers/uploadController');

router.route('/upload').post(uploadProductImage);

module.exports = router;
