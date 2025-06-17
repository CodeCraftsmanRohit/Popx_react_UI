import 'dotenv/config';

import mongoose from 'mongoose';

const connectDB = async () => {

  mongoose.connection.on('connected', () => console.log("Database Connected"));

  await mongoose.connect(`${process.env.MONGODB_URI}/popx`);  //dollar mat bhulna,async	Allows use of await, returns a Promiseawait	Waits for mongoose.connect() to finish
};

export default connectDB;