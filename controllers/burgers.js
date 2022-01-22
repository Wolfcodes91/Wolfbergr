const Burger = require('../models/burger');
const Ingredient = require('../models/ingredient')

module.exports = {
    index,
    show,
    new: newBurger,
    create,

}

function index(req, res) {
    Burger.find({})
  .then(function(burgers) {
    res.render('burgers/index', { title: 'All Burgers', burgers });
  })
  .catch(function(err){
    res.redirect('/burgers')
  });

}

function show(req, res) {
    Burger.findById(req.params.id)
    .populate('ingredients')
    .exec(function(err, burger) {
      Ingredient.find(
        // Query Object
        {_id: {$nin: burger.ingredient}},
        function(err, ingredients) {
          res.render('burgers/show', { title: 'Burger Detail', burger, ingredients });
        }
      );
    });
}

function newBurger(req, res) {
    res.render('burgers/new', { title: 'Add Burger' });
  }

  function create(req, res) {
    var burger = new Burger(req.body);
  burger.save(function(err) {
    // one way to handle errors
    if (err) return res.redirect('/burgers/new');
    console.log(burger);
    // for now, redirect right back to new.ejs
    res.redirect(`/burgers/${burger._id}`);
  });
  }