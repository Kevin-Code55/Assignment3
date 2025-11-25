const Workout = require('../models/Workout');

// Fetches the workout data the user inputed and displays the info
exports.list = async (req, res) => {
    //Sorts the log from newest to oldest
    const workoutList = await Workout.find().sort({ date: -1 });
    // Makes the data visable
    res.render('workouts/index', { 
        title: 'My Workout Log', 
        workouts: workoutList 
    });
};


// Shows the form in order to allow the user to put in a new workout 
exports.addPage = (req, res) => {
    res.render('workouts/add', { 
        title: 'Log New Workout' 
    });
};

// Creates and saves the workout from the user and gives the user a new form 
exports.create = async (req, res) => {
    // Create a new workout using the data from the form (req.body)
    await Workout.create(req.body);
    // Allows the user to go back to the list page
    res.redirect('/workouts');
};


// Allows the form to be edited 
exports.editPage = async (req, res) => {
    const id = req.params.id;
    // Lets the user find a specific workout in the data list 
    const workoutToEdit = await Workout.findById(id);
    res.render('workouts/edit', { 
        title: 'Edit Workout Entry', 
        workout: workoutToEdit 
    });
};


// Allows the user to update the form and saves it 
exports.update = async (req, res) => {
    const id = req.params.id;
    await Workout.findByIdAndUpdate(id, req.body);
    res.redirect('/workouts');
};

// Deletes a workout
exports.delete = async (req, res) => {
    const id = req.params.id;
    await Workout.findByIdAndDelete(id);
    res.redirect('/workouts');
};