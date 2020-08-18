const express = require("express");
const app = express();
const routes = require('./routes');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

app.use('(/margot)|(/margeaux)', routes);

app.get(/(xyz)$/, (req, res) => {
    res.send("That's all I wrote.");
});

app.get('/capital-letters/:id', (req, res) => {
    let val = req.params.id;
    let upper = val.toUpperCase()
    res.send(upper);
});

app.all('/:id/', (req, res) => {

    res.render('layout', {method: req.method , path: req.path, randomNum: 3 })
});



const port = 8081;

app.listen(port, () => console.log(`listening on port ${port}`));
