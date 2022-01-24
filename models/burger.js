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
        enum: ['Standard', 'Gluten-Free', 'Lettuce Wrap', 'Custom']
    },
    patty: {
        type: String,
        enum: ['Beef', 'Chicken', 'Veggie', 'Black Bean', 'Impossible', 'Custom']
    },
    temperature: {
        type: String,
        enum: ['N/A', 'Medium-Rare', 'Medium', 'Well-Done'],
    },
    cheese: {
        type: String,
        enum: ['None', 'Cheddar', 'Swiss', 'Pepper Jack', 'Bleu', 'American', 'Custom']
    },
    sauce: {
        type: [String],
        enum: ['None', ' Ketchup', ' Mustard', ' Mayonaise', ' Thousand Island', ' Sriracha', ' Hot Sauce', ' BBQ'],
        default: ['None'],
    },
    toppings: {
        type: [String],
        enum: ['None', ' Lettuce', ' Tomatoes', ' Raw Onions', ' Grilled Onions', ' Pickles', ' Bacon'],
        default: ['None'],
    },
    ingredients: [{
        type: [String],
    }],
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    userName: String,
    userAvatar: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Burger', burgerSchema);