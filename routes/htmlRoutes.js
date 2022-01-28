const router = require('express').Router();
const notes = require('../db/db.json');
const path = require('path');
const fs =  require('fs');

//route to homepage
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

//route to notes page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

module.exports = router;