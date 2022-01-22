const mongoose = require('mongoose');
// shortcut variable
const Schema = mongoose.Schema;

const burgerSchema = new Schema({
    name: {
        type: String,
        required: true
      },
    patty: {
        type: String,
        enum: ['Beef', 'Chicken', 'Veggie', 'Black Bean', 'Impossible']
    },
    temperature: {
        type: String,
        enum: ['None', 'Medium-Rare', 'Medium', 'Well-Done'],
      },
    cheese: {
        type: String,
        enum: ['None','Cheddar', 'Swiss', 'Pepper Jack', 'Bleu', 'American']
        },
    sauce: {
        type: String,
        enum: ['Ketchup', 'Mustard', 'Mayonaise', 'Sriracha', 'Hot Sauce', 'BBQ'],
    },
    toppings: {
        type: String,
        enum: ['Lettuce', 'Tomatoes', 'Raw Onions', 'Grilled Onions', 'Pickles', 'Bacon'],
    }
})

module.exports = mongoose.model('Burger', burgerSchema);