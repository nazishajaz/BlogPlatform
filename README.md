# Blog Platform

A full-stack blog application built with the MERN stack that allows users to register, log in, and manage their own blog posts securely using JWT authentication.

## Features

### User Authentication
- User registration
- Secure password hashing with bcrypt
- User login
- JWT-based authentication
- Protected routes

### Blog Management
- Create blog posts
- View all blog posts
- View individual blog posts
- Edit your own posts
- Delete your own posts

### Frontend
- React + Vite
- React Router
- Axios for API requests
- Responsive user interface
- Authentication-aware navigation

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- RESTful API

---

## Tech Stack

### Frontend
- React
- Vite
- React Router DOM
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- dotenv
- cors

---

## Project Structure

```text
blog-platform/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── app.js
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/BlogPlatform.git
```

```bash
cd BlogPlatform
```

---

## Backend Setup

Navigate to the server folder.

```bash
cd server
```

Install dependencies.

```bash
npm install
```

Create a `.env` file.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start the backend.

```bash
npm run dev
```

---

## Frontend Setup

Open another terminal.

```bash
cd client
```

Install dependencies.

```bash
npm install
```

Start the React application.

```bash
npm run dev
```

---

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/profile` | Protected profile route |

### Posts

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/posts` | Get all posts |
| GET | `/api/posts/:id` | Get single post |
| POST | `/api/posts` | Create post |
| PUT | `/api/posts/:id` | Update post |
| DELETE | `/api/posts/:id` | Delete post |

---

## Security Features

- Password hashing using bcrypt
- JWT authentication
- Protected API routes
- Authorization checks for editing and deleting posts
- Environment variables for sensitive data

---

## Author

**Nazish Ajaz**

---

## License

This project is licensed for educational and personal portfolio purposes.