const express = require('express');

const app = new express();

app.use(express.static('public'));

app.get('/', (req, res) => res.render('home'));

app.listen(process.env.PORT || 3000, () => console.log('Server started'));
