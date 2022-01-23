const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
  name: [''],
  position: {
      type: String,
      enum: ['Bun', 'Patty', 'Cheese', 'Sauce', 'Toppings'],
  },
  userId: {type: Schema.Types.ObjectId, ref: 'User'},
        userName: String,
        userAvatar: String,  
    }, {
    timestamps: true   
});

module.exports = mongoose.model('Ingredient', ingredientSchema);