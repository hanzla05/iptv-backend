import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {});
    console.log("CONNECTED TO DATABASE SUCCESSFULLY");

  } catch (error) {
    console.error('COULD NOT CONNECT TO DATABASE:', error.message);
  }
};

export default connectDB;

