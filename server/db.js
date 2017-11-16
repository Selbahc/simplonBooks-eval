import mongoose from 'mongoose';

const connnectDb = (url) => {
  mongoose.connect(url, () => console.log('Connected to DB'))
}

export default connnectDb;