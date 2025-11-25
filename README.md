FitTracker - Personal Workout Logger

Student Name: Kevin Nguyen

Assignment: 3 - CRUD + Authentication Operation

Course: INFR3120

FitTrack is a web-based application that is a “Workout Progress Tracker.”  It is designed to replace any type of physical logbook, allowing users to track their progress digitally.  The main goal is to help users track “progressive overload.”  This, in turn, makes the progression and monitoring process much more efficient.  By storing the data for each user in a cloud database (MongoDB), users can access their workout history remotely from any device.  


File Structure 
config/ - Database connection configuration (globals.js).

controllers/ - Logic for handling CRUD operations (workoutController.js).

models/ - Mongoose schema definition (Workout.js).

routes/ - URL route definitions (index.js, workout.js).

views/ - EJS templates for the frontend.

partials/ - Reusable components (header, footer, nav).

workouts/ - Specific pages for adding/editing/viewing workouts.

public/ - Static assets (CSS, images, client-side JS).

Technology Used
Node.js: Runtime environment for the backend.

Express.js: Web framework for handling routes and middleware.

MongoDB (Atlas): Cloud NoSQL database for storing workout data.

Mongoose: ODM (Object Data Modeling) library to interact with MongoDB.

EJS: Templating engine for rendering dynamic HTML pages.

Bootstrap 5: CSS framework for responsive and professional styling.

Dotenv: Module for managing environment variables.

Cmds to run the website
git clone [https://github.com/Kevin-Code55/Assignment3.git](https://github.com/Kevin-Code55/Assignment3.git)
cd Assignment3

npm install

CONNECTION_STRING=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/FitTracker
PORT=3000

node app.js

Citations/Credits
Lecture Videos
https://www.w3schools.com/bootstrap5/ https://www.w3schools.com/nodejs/nodejs_express.asp https://ejs.co/ https://zellwk.com/blog/crud-express-mongodb/
