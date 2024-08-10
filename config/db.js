import mongoose from 'mongoose';

const connectDB = async (retries = 5) => {
    while (retries) {
      try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
          serverSelectionTimeoutMS: 50000,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        break;
      } catch (error) {
        console.error(`Error: ${error.message}`);
        retries -= 1;
        console.log(`Retries left: ${retries}`);
        await new Promise(res => setTimeout(res, 5000)); // wait 5 seconds before retrying
      }
    }
  
    if (!retries) {
      console.error('Failed to connect to MongoDB after multiple attempts');
      process.exit(1);
    }
  };
  
  export default connectDB;
  

