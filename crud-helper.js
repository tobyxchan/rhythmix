// Connect to the Database
require('dotenv').config();
require('./config/database');

// Require the Mongoose Models
const User = require('./models/user');

// Local Variables
let user;
let users;