const burger = require('../models/burger');
const Burger = require('../models/burger');
const Ingredient = require('../models/ingredient')

module.exports = {
    index,
    show,
    new: newBurger,
    create,
    delete: deleteBurger,
}

function deleteBurger(req, res) {
    Burger.findOne({'burgers._id': req.params.id, 'burgers.user': req.user._id})
    .then(function(burger) {
      if (!burger) return res.redirect('/burgers');
      burger.remove(req.params.id);
    })
    .then(function() {
      res.redirect('/burgers/');
    }); 
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
    Burger.findById(req.params.id, function(err, burger) {
      Ingredient.find({ burger: burger._id}, function(err, ingredients) {
        res.render('burgers/show', { title: 'Burger Detail', burger, ingredients })
      });
    });
  };

function newBurger(req, res) {
    res.render('burgers/new', { title: 'Add Burger' });
  }

  function create(req, res) {
    var burger = new Burger(req.body, function(err, burger) {
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
    });
    burger.save(function(err) {
    if (err) return res.redirect('/burgers/new');
    console.log(burger);
    res.redirect(`/burgers/${burger._id}`);
  });
  }
