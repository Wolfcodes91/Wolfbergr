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
    Burger.findOneAndDelete(
        { _id: req.params.id }, function (err) {
            res.redirect('/burgers/');
        }
    )
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
        Ingredient.find({ burger: burger._id }, function (err, ingredients) {
            res.render('burgers/new', { title: 'Create Burger', burger, ingredients })
    });
};

function create(req, res) {
    console.log('req.body is being logged', req.body)
    var burger = new Burger(req.body, function (err, burger) {
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        Burger.findById(req.params.id)
            .populate('ingredients').exec(function (err, burger) {
                Ingredient.find(
                    { _id: { $nin: burger.customIngredient } },
                    function (err, ingredients) {
                        res.render('burgers', { title: 'Burger', burger, ingredients });
                    }
                )
            });
    });
    burger.save(function (err) {
        if (err) return res.redirect('/burgers/new');
        res.redirect(`/burgers/${burger._id}`);
    });
}
