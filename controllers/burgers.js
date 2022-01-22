const Burger = require('../models/burger');

module.exports = {
    index,
    show,


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