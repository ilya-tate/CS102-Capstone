const express = require('express');
const router = express.Router();

const {
  createMom,
  deleteMom,
  getMom,
  getAllMoms,
  updateMom,
} = require('../controllers/momController');

router.route('/moms').get(getAllMoms).post(createMom);
router.route('/moms/:id').get(getMom).patch(updateMom).delete(deleteMom);

module.exports = router;
