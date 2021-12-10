const express = require('express');
const router = express.Router();

const {
  createCart,
  deleteCart,
  getCart,
  updateCart,
} = require('../controllers/cartController');

router.route('/cart').post(createCart);
router.route('/cart/:id').patch(updateCart).get(getCart).delete(deleteCart);

module.exports = router;
