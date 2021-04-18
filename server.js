const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(morgan('dev'));
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false 
});
const mongodb = mongoose.connection;
mongodb.on('error', console.error.bind(console, 'connection error'));

// calling the api route
app.use(require('./routes/api.js'))
// calling the html route (always after the api route)
app.use(require('./routes/routes.js'))

mongodb.once('open', () => {
    console.log('Connected to mongodb')
app.listen(PORT, () => console.log('Now listening'));
});