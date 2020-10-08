const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb://localhost/basic-api-example', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false });
    mongoose.connection.on('open', () => {
        console.log("Connected");
    });
    mongoose.connection.on('error', (err) => {
        console.log(`Error : ${err}`);
    });

    mongoose.Promise = global.Promise;
};