const express = require('express');
const app = express();

app.use(express.json({ extended: false }));
app.use(express.static('./views'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (request, response) => {
    return response.render('index');
});

app.listen(8080, () => {
    console.log("server is running on 8080");
})