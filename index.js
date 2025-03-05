const express = require('express');
const app = express();

const courses = require('./data');

app.use(express.urlencoded({ extended: true })); //app.use cai dat middle wares
app.use(express.static('./views')); //allow to use static resourses such as css,js,imgs

app.set('view engine', 'ejs'); //declare to inform that app will use engine ejs to render the web page
app.set('views', './views'); // content render's web page will in the folder "views"

app.get('/', (request, response) => {
    return response.render('index', { courses });
});

app.listen(8080, () => {
    console.log("server is running on 8080");
})