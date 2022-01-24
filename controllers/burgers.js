const burger = require('../models/burger');
const Burger = require('../models/burger');
const Ingredient = require('../models/ingredient');
const ingredients = require('./ingredients');

module.exports = {
    index,
    show,
    new: newBurger,
    create,
    delete: deleteBurger,
}

function index(req, res) {
    Burger.find({ 'burgers._id': req.params.id })
        .then(function (burgers) {
            res.render('burgers/index', { title: 'All Burgers', burgers });
        })
        .catch(function (err) {
            res.redirect('/burgers')
        });

}

function show(req, res) {
    Burger.findById(req.params.id, function (err, burger) {
        Ingredient.find({ burger: burger._id }, function (err, ingredients) {
            res.render('burgers/show', { title: 'Burger Detail', burger, ingredients })
        });
    });
};

function newBurger(req, res) {
    Ingredient.find({}, function (err, ingredients) {
        res.render('burgers/new', { title: 'Create Burger', ingredients })
    });
};

function create(req, res) {
    req.body.userId = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    if (req.body.ingredients === "None") {
        req.body.ingredients = [];
    } 
    Burger.create(req.body, function (err, burger) {
        if (err) return res.redirect('/burgers/new');
        res.redirect(`/burgers/${burger._id}`);
    });
}

function deleteBurger(req, res) {
    Burger.findOneAndDelete(
        { _id: req.params.id }, function (err) {
            res.redirect('/burgers/');
        }
    )
}