// 1. Dependencies
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');

// 2. Load Environment Variables
dotenv.config();

//Imports global config files
const config = require('./config/globals');

// Starts the app
const app = express();

// View Variable
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Connects to the data base
mongoose.connect(config.db.connectionString)
    .then(() => console.log('Connected to MongoDB successfully!'))
    .catch(err => {
        console.error('Connection Error:', err);
        // Optional: Exit process if DB connection fails
        // process.exit(1); 
    });

// Routes
const indexRouter = require('./routes/index');
const workoutRouter = require('./routes/workout'); // Ensure filename is singular 'workout.js'

app.use('/', indexRouter);
app.use('/workout', workoutRouter);


app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler
app.use(function(err, req, res, next) {
  // for local testing and running
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', { title: 'Error' });
});

// Starts the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;