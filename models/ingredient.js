const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
  name: [''],
  position: {
      type: String,
      enum: ['Bun', 'Patty', 'Cheese', 'Sauce', 'Toppings'],
  }
});

module.exports = mongoose.model('Ingredient', ingredientSchema);