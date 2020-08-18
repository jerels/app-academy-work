const express = require('express');
const app = express();
const { EntreeType, Entree } = require('./models');
const csurf = require('csurf');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const port = 8081;

const asyncHandler = handler => (req, res, next) => handler(req, res, next).catch(next);
const csrfProtection = csurf({ cookie: true });
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'pug');

app.get('/entrees/new', csrfProtection, asyncHandler(async (req, res) => {
  const entreeTypes = await EntreeType.findAll();

  res.render('new-entree-form', { entreeTypes, token: req.csrfToken() });
}));

app.post('/entrees', csrfProtection, asyncHandler(async (req, res) => {
  const entree = req.body;
  await Entree.create({
    name: entree.name,
    description: entree.description,
    price: entree.price,
    entreeTypeId: entree.entreeTypeId
  });

  res.redirect('/');
}));

app.get('/', asyncHandler(async (req, res) => {
  const entrees = await Entree.findAll({ include: EntreeType });
  res.render('entree-list', { entrees });
}))


app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});





























/* Do not change this export. The tests depend on it. */
try {
  exports.app = app;
} catch (e) {
  exports.app = null;
}
