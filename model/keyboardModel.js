const mongoose = require('mongoose');

const kbSchema = mongoose.Schema({
  img: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  amount_in_stock: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  availability: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  condition: {
    type: String,
    required: true
  },
  feature: {
    type: String,
    required: false
  },
  interface: {
    type: Array,
    required: false
  },
  price: {
    type: Number,
    required: true,
  },
  type: {
    type: Array,
    required: true
  }
});

const Kb = module.exports = mongoose.model('Kb', kbSchema);
 
// All possible characteristics:
//
// Amount in stock: various
// Availability: In stock(include number), Out of stock
// Brands(10): BoxWave, IBM, SolidTek, H2O, MACHENIKE, Filco, Ducky, OEM, Man & Machine, Gintai
// Conditions(3): New, Used, Refurbished
// Features(2): Ergonomic, Cordless
// Interfaces(5): Wireless, PS/2, USB, Bluetooth, Infrared
// Types(9): Windows, Apple, Spill-Resistant, Ultra Thin, Full-Size, Backlit, Gaming, Mechanical, Large Print
