const express = require('express');
const path = require('path');
const exphbs = require('express-handlebar')
const methodOverride

// Inizializadores
const app express();

// Settings
app.set('port', process.env.PORT || 3000);
app.set('view', path.join(__dirname, 'views'));
app.engine('hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDirs: path.join(app.get('views'), 'partials'),
    extname:'.hbd'
}));
app.set('view-engine', )

// Middelwares
app.use(express.urlencoder(({extended:false}));
app.use(methodOverride('_method'))
app.use(session({
    secret: 'myscecretapp',
    resave: true, saveUnitialized: true
}));


// Global variables

// Routers

// Statuc file

//Server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});