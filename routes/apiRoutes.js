const router = require('express').Router();
const fs =  require('fs');
const path = require('path');
const notes = require('../db/db.json');

//get input from notes
router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results)
});

//create a new note
router.post('/notes', (req, res) => {
    const newNote = req.body;
    // write data to notes array
    notes.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'), 
        JSON.stringify(notes, null, 2)
    );
    res.json(notes);
});

module.exports = router;  