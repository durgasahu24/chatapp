# 💬 ChatApp

A real-time full-stack chat application built using **React**, **Redux**, **Node.js**, **Express**, **MongoDB**, and **Socket.IO**. It supports user authentication, live messaging, and online user tracking.

---

## 🚀 Features

- ✅ User Registration & Login (with authentication)
- 💬 Real-time messaging with Socket.IO
- 👥 Online users tracking
- 🔐 Protected routes with Redux
- ⚡ Fast and responsive UI using Tailwind CSS
- 🌐 REST API powered by Express and MongoDB

---

---

## 🛠️ Tech Stack

### Frontend:
- React
- Redux Toolkit
- React Router DOM
- Tailwind CSS
- Socket.IO Client

### Backend:
- Node.js
- Express.js
- MongoDB + Mongoose
- Socket.IO

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/durgasahu24/chatapp.git
cd chatapp

cd server
npm install

PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

npm run dev

cd ../client
npm install

npm run dev

