const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name:{
    type: String,
    required: 'This field is required.'
  },
  description:{
    type: String,
    required: 'This field is required.'
  },
  ingredients:{
    type: Array,
    required: 'This field is required.'
  },
  category:{
    type: String,
    enum: ['European', 'American', 'Chinese', 'Mexican', 'Indian', 'Korean', 'Japanese', 'Mediterranean', 'Vietnamese', 'Thai'],
    required: 'This field is required.'
  },
  image:{
    type: String,
    required: 'This field is required.'
  },
});


recipeSchema.index({ name: 'text', description: 'text'});
//Wildcard Indexing

module.exports = mongoose.model('Recipe', recipeSchema);
