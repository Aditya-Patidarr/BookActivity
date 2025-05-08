import Activity from '../models/Activity.js';

export const getAllActivities = async (req, res) => {
  try {
    const activities = await Activity.find();
    res.status(201).json(activities);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
