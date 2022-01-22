const Ingredient = require('../models/ingredient');
const Burger = require('../models/burger');

module.exports = {
  new: newIngredient,
  create,
  addToIngredients,
};

function addToIngredients(req, res) {
  Burger.findById(req.params.burgerId, function(err, burger) {
    burger.ingredients.push(req.body.ingredientId);
    burger.save(function(err) {
      res.redirect(`/burgers/${burger._id}`);
    })
  })
}

function create(req, res) {
  Ingredient.create(req.body, function (err, ingredient) {
    res.redirect('/ingredients/new');
  });
}

function newIngredient(req, res) {
  Ingredient.find({})
  .sort('name')
  .exec(function (err, ingredients) {
    res.render('ingredients/new', {
      title: 'Add Ingredients',
      ingredients
    });
  });
}