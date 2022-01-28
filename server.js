const express = require('express');
const app = express();
const routes = require('./routes/index');

const PORT = process.env.PORT || 3001;


//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/', routes);
app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`API server now listening on port ${PORT}!`);
});