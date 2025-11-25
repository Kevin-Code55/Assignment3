const express = require('express');
const router = express.Router();
const controller = require('../controllers/workoutController');


// Shows the list of workouts 
router.get('/', controller.list);


//Shows the form to add a new workout
router.get('/add', controller.addPage);

//Shows the form and allows a workout to be added
router.post('/add', controller.create);

//Shows the form to allow edits
router.get('/edit/:id', controller.editPage);

//Shows the form to allow edits and saves the edits
router.post('/edit/:id', controller.update);

//Allows the user to delete a workout
router.get('/delete/:id', controller.delete);

module.exports = router;