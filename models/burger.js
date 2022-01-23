const mongoose = require('mongoose');
// shortcut variable
const Schema = mongoose.Schema;

const burgerSchema = new Schema({
    name: {
        type: String,
        required: true
      },
    bun: {
        type: String,
        enum: ['Standard', 'Gluten Free', 'Lettuce Wrap']
    },
    patty: {
        type: String,
        enum: ['Beef', 'Chicken', 'Veggie', 'Black Bean', 'Impossible']
    },
    temperature: {
        type: String,
        enum: ['N/A', 'Medium-Rare', 'Medium', 'Well-Done'],
      },
    cheese: {
        type: String,
        enum: ['None','Cheddar', 'Swiss', 'Pepper Jack', 'Bleu', 'American']
        },
    sauce: {
        type: [String],
        enum: ['None', 'Ketchup', 'Mustard', 'Mayonaise', 'Sriracha', 'Hot Sauce', 'BBQ'],
        default: ['None'],
    },
    toppings: {
        type: [String],
        enum: ['None', 'Lettuce', 'Tomatoes', 'Raw Onions', 'Grilled Onions', 'Pickles', 'Bacon'],
        default: ['None'],
    },
    ingredients: [{
        type: Schema.Types.ObjectId,
        ref: 'Ingredient',
    }],
    user: {type: Schema.Types.ObjectId, ref: 'User'},
        userName: String,
        userAvatar: String,  
    }, {
    timestamps: true      
});

module.exports = mongoose.model('Burger', burgerSchema);