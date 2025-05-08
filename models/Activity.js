import mongoose from 'mongoose';

const ActivitySchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  dateTime: Date,
});

export default mongoose.model('Activity', ActivitySchema);
