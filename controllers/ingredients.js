const Ingredient = require('../models/ingredient');
const Burger = require('../models/burger');

module.exports = {
  create,
  new: newIngredient,
  addToIngredients,
  delete: deleteIngredient,
};

function deleteIngredient(req, res) {
    Ingredient.findOne({'ingredients._id': req.params.id, 'ingredients.user': req.user._id})
    .then(function(ingredient) {
      if (!ingredient) return res.redirect('/ingredients/new');
      ingredient.remove(req.params.id);
    })
    .then(function() {
      res.redirect('/ingredients/new');
    }); 
  }

function addToIngredients(req, res) {
    Burger.findById(req.params.burgerId, function(err, burger) {
      burger.ingredients.push(req.body.ingredientId);
      burger.save(function(err) {
        res.redirect(`/burgers/${burger._id}`);
      })
    })
  }

  function create(req, res) {
    req.body.burger = req.params.id;
    Ingredient.create(req.body, function(err, ingredient){
        res.redirect('/ingredients/new')
    });
};

  function newIngredient(req, res) {
    Ingredient.find({})
    .sort('name')
    .exec(function (err, ingredients) {
      res.render('ingredients/new', {
        title: 'Add Ingredient',
        ingredients
      });
    });
  }