const mongoose = require('mongoose');
const { initdb } = require('../routes/api');
const mongoURI = process.env.MONGO_URI;

const mongoConnect = async () => {
    try {
      
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        
       
        console.log('Connected to MongoDB');

        
        mongoose.connection.once('open', () => {
            console.log('Database connected. Initializing data...');
            initdb();
        });

    } catch (err) {
     
        console.log('Error while connecting to MongoDB:', err);
    }
};

module.exports = mongoConnect;
