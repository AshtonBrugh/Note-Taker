const router = require('express').Router();
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
    const newNotes = req.body;
    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        const pushedNotes = JSON.parse(data);
        notes.push(newNotes);  

    fs.writeFile('./db/db.json', JSON.stringify(pushedNotes), function(err) {
            if (err) throw (err)
    
        })
    })

        res.json(newNotes);
})

module.exports = router;