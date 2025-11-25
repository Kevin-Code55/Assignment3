// Import Mongoose
const mongoose = require('mongoose');


// Gives the structure for the document in workouts and what info is given 
const workoutSchema = new mongoose.Schema({
    exercise: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});


// Exports the model and allows interaction with workouts
module.exports = mongoose.model('Workout', workoutSchema);