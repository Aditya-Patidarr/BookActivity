# 💪 BookActivity App - Backend API

A RESTful API built with **Node.js**, **Express.js**, and **MongoDB**, designed for a simple activity booking system where users can register, log in, view public activities, and book events like cricket matches, movie nights, and football tournaments. This project demonstrates secure authentication, validation, clean structure, and deployment on **Render**.

---

## 🎯 Features

- 🔐 JWT-based user registration & login
- 🏟️ Public listing of available activities
- 📅 Authenticated activity booking system (one booking per user per activity)
- 🧾 "My Bookings" endpoint to fetch user-specific bookings
- 🔐 Password hashing using bcrypt
- ✅ Input validation using express-validator
- 💾 MongoDB + Mongoose for data storage
- 📁 Clean and modular folder structure
- 🧪 Postman collection included for testing
- ☁️ Hosted live API on [Render](https://render.com)

---

## 🛠️ Tech Stack

- **Node.js** – JavaScript runtime
- **Express.js** – Web framework
- **MongoDB** – NoSQL database
- **Mongoose** – ODM for MongoDB
- **bcryptjs** – For password hashing
- **jsonwebtoken** – For authentication
- **express-validator** – For request validation
- **dotenv** – Environment configuration
- **Render** – Hosting platform

---

## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/activity-booking-app.git
cd activity-booking-app
```

### 2. Install Dependencies
npm install

### 3. Create a .env file
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

### 4. Run the server
nodemon index.js

## 🚀 Project Structure

BookActivity/
├── config/           # Database connection logic
├── controllers/      # Business logic for each endpoint
├── middlewares/      # Authentication middleware
├── models/           # Mongoose schemas for DB
├── routes/           # API route definitions
├── server.js         # Entry point
├── .env              # Environment variables
└── README.md         # Project documentation

