const express = require('express');
const router = express.Router();
const ingredientsCtrl = require('../controllers/ingredients');

router.get('/ingredients/new', ingredientsCtrl.new);

router.post('/ingredients', ingredientsCtrl.create);

router.post('/burgers/:burgerId/ingredients', ingredientsCtrl.addToIngredients);



module.exports = router;