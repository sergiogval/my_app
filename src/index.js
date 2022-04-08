const express = require('express');
const path = require('path');
const exphbs = require('express-handlebar');
const methodOverride = require('express-override');
const session = require(express-session);

// Inizializadores
const app = express();

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
app.use(express.urlencoder({extended:false}));
app.use(methodOverride('_method'))
app.use(session({
    secret: 'myscecretapp',
    resave: true,
    saveUnitialized: true
}));

// Global variables

// Routers
app.use(require('./routers/index'))
app.use(require('./routers/notes'))
app.use(require('./routers/users'))

// Statuc file
app.use(express.static(path.join('__dirname', 'public')))

//Server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});

module.export = express