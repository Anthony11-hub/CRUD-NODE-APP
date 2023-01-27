const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const connectDB = require('./server/database/connection');


const app = express();

dotenv.config({ path: '.env' });
const PORT = process.env.PORT || 8080

// log requests
app.use(morgan('tiny'));

// mongo db connection
connectDB();

// parse request to body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// set view engine
app.set('view engine', 'ejs');

// load assets
app.use('/css', express.static(path.join(__dirname, '/assets/css')));
app.use('/img', express.static(path.join(__dirname, '/assets/img')));
app.use('/js', express.static(path.join(__dirname, '/assets/js')));

// load routers
app.use('/', require('./server/routes/router'));

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
})
