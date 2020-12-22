// ++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++ Router for methods to create/modify families +++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++

const express = require('express');
const familiesController = require('../controllers/familiesController');

const router = express.Router();

// +++++++++++++++++++++++++++++++++++++++++++++
// +++ Methods to create and delete families +++
// +++++++++++++++++++++++++++++++++++++++++++++

// request to retrieve families (for display on landing page)
// router.get('/', familiesController.getFamilies, (req, res) => {
//   res.send('getting families');
// });

// request to create a family
router.post('/addfamily', familiesController.addFamily, (req, res) => {
  res.send('adding families');
});

// request to delete a family
router.delete('/deletefamily', familiesController.deleteFamily, (req, res) => {
  res.send('family deleted');
});

// +++++++++++++++++++++++++++++++++++++++++++++++++
// +++ Methods to add/remove users from families +++
// +++++++++++++++++++++++++++++++++++++++++++++++++

// request to get users in a family

// request to add to a family
router.post('/add-family-member', familiesController.addMember, (req, res) => {
  res.send('family member added');
});

// request to delete users from a family
// router.delete('/remove-family-member', familiesController.removeMember, (req, res) => {
//   res.send('family member removed');
// });

module.exports = router;
