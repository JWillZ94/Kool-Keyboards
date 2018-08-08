const mongoose = require('mongoose');

const kbSchema = mongoose.Schema({
  img:{
    type: String,
    required: true
  },
  condition:{
    type: String,
    required: true
  },
  feature:{
    type: String,
    required: false
  },
  type:{
    type: Array,
    required: true
  },
  interface: {
    type: Array,
    required: false
  },
  brand:{
    type: String,
    required: true
  },
  name:{
    type: String,
    required: true
  },
  price:{
    type: Number,
    required: true,
  },
  rating:{
    type: Number,
    required: true
  }
});

const Kb = module.exports = mongoose.model('Kb', kbSchema);
