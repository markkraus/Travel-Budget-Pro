// author Ben Mullin
// routes.js for budget actions

const express = require('express');
const router = express.Router();
const budgetController = require('./controllers');

// Define routes
router.get('/budget', budgetController.getBudget);
router.post('/budget', budgetController.createBudget);
router.put('/budget/:id', budgetController.updateBudget);
router.delete('/budget/:id', budgetController.deleteBudget);

module.exports = router;
