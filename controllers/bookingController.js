import Booking from '../models/Booking.js';

export const bookActivity = async (req, res) => {
  const userId = req.user.id;
  const { activityId } = req.body;

  try {
    const existingBooking = await Booking.findOne({ user: userId, activity: activityId });
    if (existingBooking) {
      return res.status(409).json({ message: 'You have already booked this activity.' });
    }
    const booking = await Booking.create({ user: userId, activity: activityId });
    res.status(201).json({ message: 'Activity booked successfully', booking });
  } catch (err) {
    console.error('Booking error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};


export const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id }).populate('activity');
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
