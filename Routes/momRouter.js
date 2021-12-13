const express = require('express');
const router = express.Router();

const {
  createMom,
  deleteMom,
  getMom,
  getAllMoms,
  updateMom,
} = require('../controllers/momController');

router.route('/').get(getAllMoms).post(createMom);
router.route('/:id').get(getMom).patch(updateMom).delete(deleteMom);

module.exports = router;
