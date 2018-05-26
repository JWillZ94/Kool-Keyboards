const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username:{
    type: String,
    required: true
  },
  password1:{
    type: String,
    required: true
  },
  password2:{
    type: String,
    required: true
  },
  first_name:{
    type: String,
    required: true
  },
  last_name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  }
});

const User = module.exports = mongoose.model('User', userSchema);
