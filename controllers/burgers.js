const Burger = require('../models/burger');
const Ingredient = require('../models/ingredient')

module.exports = {
    index,
    show,
    new: newBurger


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

}

function newBurger(req, res) {
    res.render('burgers/new', { title: 'Add Burger' });
  }