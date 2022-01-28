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

//get input from notes
router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results)
});

//create a new note
router.post('/notes', (req, res) => {
    const newNote = req.body;
    notes.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notes, null, 2)
    );
    res.json(notes);
})

module.exports = router;