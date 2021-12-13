const express = require('express');
const router = express.Router();

const {
  createCart,
  deleteCart,
  getCart,
  updateCart,
} = require('../controllers/cartController');

router.route('/').post(createCart);
router.route('/:id').patch(updateCart).get(getCart).delete(deleteCart);

module.exports = router;
