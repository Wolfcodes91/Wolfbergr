const Ingredient = require('../models/ingredient');
// const Burger = require('../models/burger');

module.exports = {
  create,
  new: newIngredient,
//   addToBurger,
  delete: deleteIngredient,
};

function deleteIngredient(req, res) {
    Ingredient.findOneAndDelete(
        {_id: req.params.id}, function(err) {
            res.redirect('/ingredients/new');
          }
    )
}

// function addToBurger(req, res) {
//     Burger.findById(req.params.burgerId, function(err, burger) {
//       burger.ingredients.push(req.body.ingredientId);
//       burger.save(function(err) {
//         res.redirect(`/burgers/${burger._id}`);
//       })
//     })
//   }

  function create(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;  
    Ingredient.create(req.body, function(err, ingredient){
        res.redirect('/ingredients/new')
    });
};

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