const express = require('express');
const router = express.Router();


// Purpose: Show the main list of all workouts
router.get('/', controller.list);
// Allows the user to add a workout by presenting the form
router.get('/add', controller.addPage);

//Allows the user to add a workout and keeps the data
router.post('/add', controller.create);

//Allows the user to edit the form
router.get('/edit/:id', controller.editPage);

//Allows the user to update the workout 
router.post('/edit/:id', controller.update);

//Allows the user to delete a workout
router.get('/remove/:id', controller.delete);

module.exports = router;