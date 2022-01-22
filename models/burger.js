const mongoose = require('mongoose');
// shortcut variable
const Schema = mongoose.Schema;

const burgerSchema = new Schema({
    name: {
        type: String,
        required: true
      },
    temperature: {
        type: String,
        enum: ['Rare', 'Medium-Rare', 'Medium', 'Well-Done']
      },
    ingredients: [{
        type: Schema.Types.ObjectId,
        ref: 'Ingredient'
        }],
})

module.exports = mongoose.model('Burger', burgerSchema);