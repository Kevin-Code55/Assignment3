const express = require('express');
const router = express.Router();

// Home Page and renders the splash page
router.get('/', (req, res) => {
    res.render('index', { 
        title: 'FitTracker - Home' 
    });
});

module.exports = router;