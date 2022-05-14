const mongoose = require("mongoose");

const connectionUrl = 'mongodb+srv://tarun:Od1Z3JNDyxZCRsjN@assignment-1b.ywgcs.mongodb.net/Assignment-1B?retryWrites=true&w=majority';

const connectDb = async () => {
    try {
        await mongoose.connect(connectionUrl);
        console.log("Succesfully connected to MongoDB.");
    } catch(err) {
        console.error(`Failed to connect to MongoDB: ${err.message}`);
    }
}

module.exports = connectDb;