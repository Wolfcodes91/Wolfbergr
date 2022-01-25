const Burger = require('../models/burger');
const burgers = require('./burgers');

module.exports = {
  create,
  delete: deleteReview,
  edit,
  update
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

function edit(req, res) {
  Burger.findOne({"reviews._id": req.params.id}, function(err, burger) {
    const review = burger.reviews.id(req.params.id)
    console.log(review)
    res.render('reviews/edit', {title: 'Update Review', review})
  })
}

function update(req, res) {
  Burger.findOne({"reviews._id": req.params.id}, function(err, burger) {
    const review = burger.reviews.id(req.params.id);
    review.content = req.body.content;
    review.rating = req.body.rating;
    burger.save(function(err) {
      res.redirect(`/burgers/${burger._id}`);
    });
  });
}