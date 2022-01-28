const express = require('express');
const app = express();
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;


//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now listening on port ${PORT}!`);
});