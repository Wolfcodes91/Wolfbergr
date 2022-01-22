const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
  name: '',
  position: {
      type: String,
      enum: ['patty', 'cheese', 'sauce', 'toppings'],
  }
});

module.exports = mongoose.model('Ingredient', ingredientSchema);