const express = require('express');
const path = require('path');
const app = express();


app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/js', express.static(path.join(__dirname, 'js')));

// Set Pug as the view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Serve the Pug template for the Food Blog
app.get('/', (req, res) => {
    res.render('content', {
        pageTitle: 'Food Blog',
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
