const Burger = require('../models/burger');

module.exports = {
  create,
  delete: deleteReview,
  edit: editReview,
};

function deleteReview(req, res) {
  Burger.findOne({'reviews._id': req.params.id, 'reviews.userId': req.user._id})
  .then(function(burger) {
    if (!burger) return res.redirect('/burgers/');
    burger.reviews.remove(req.params.id);
    return burger.save();
  })
  .then(function(burger) {
    res.redirect(`/burgers/${burger._id}`);
  }); 
}

function create(req, res) {
  Burger.findById(req.params.id, function(err, burger) {
    req.body.userId = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    burger.reviews.push(req.body);
    burger.save(function(err) {
      res.redirect(`/burgers/${burger._id}`);
    });
  });
}

function editReview(req, res) {
  console.log(req.body)
  Burger.findById(req.params.id, function(err, burger) {
    res.render('burgers/edit', {title: 'Edit Review'}, burger)
  })
}