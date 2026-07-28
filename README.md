# 🎉 CodeAlpha Event Registration System

A full-featured backend REST API built using **Node.js**, **Express.js**, **MongoDB**, and **JWT Authentication**. This project allows users to register, log in, create and manage events, and register for events securely.

---

## 🚀 Features

### 👤 Authentication

* User Registration
* User Login
* JWT Authentication
* Password Hashing using bcryptjs
* Protected Routes

### 📅 Event Management

* Create Event
* Get All Events
* Get Event by ID
* Update Event
* Delete Event

### 📝 Event Registration

* Register for an Event
* View My Registrations
* Cancel Registration
* Automatic Seat Management

### 🛡 Security

* JWT Token Authentication
* Password Encryption
* Helmet Security
* CORS Support
* Input Validation
* Global Error Handling

---

# 🛠 Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT (jsonwebtoken)
* bcryptjs
* Express Validator
* Helmet
* CORS
* Morgan
* dotenv

---

# 📁 Project Structure

```
CodeAlpha_EventRegistration
│
├── config
│   └── db.js
│
├── controllers
│   ├── authController.js
│   ├── eventController.js
│   └── registrationController.js
│
├── middleware
│   ├── authMiddleware.js
│   ├── errorMiddleware.js
│   └── validateMiddleware.js
│
├── models
│   ├── User.js
│   ├── Event.js
│   └── Registration.js
│
├── routes
│   ├── authRoutes.js
│   ├── eventRoutes.js
│   └── registrationRoutes.js
│
├── validators
│   ├── authValidator.js
│   ├── eventValidator.js
│   └── registrationValidator.js
│
├── utils
│   └── generateToken.js
│
├── .env
├── .gitignore
├── package.json
├── README.md
└── server.js
```

---

# ⚙ Installation

### Clone Repository

```bash
git clone https://github.com/your-username/CodeAlpha_EventRegistration.git
```

### Move into Project Folder

```bash
cd CodeAlpha_EventRegistration
```

### Install Dependencies

```bash
npm install
```

### Create Environment Variables

Create a `.env` file in the project root.

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

### Start Server

Development

```bash
npm run dev
```

Production

```bash
npm start
```

---

# 📌 API Endpoints

## Authentication

### Register User

```
POST /api/auth/register
```

### Login User

```
POST /api/auth/login
```

---

## Events

### Create Event

```
POST /api/events
```

### Get All Events

```
GET /api/events
```

### Get Event By ID

```
GET /api/events/:id
```

### Update Event

```
PUT /api/events/:id
```

### Delete Event

```
DELETE /api/events/:id
```

---

## Registrations

### Register For Event

```
POST /api/registrations/:eventId
```

### My Registrations

```
GET /api/registrations/my
```

### Cancel Registration

```
DELETE /api/registrations/:eventId
```

---

# 🔐 Authentication

Protected routes require a JWT token.

Example:

```
Authorization: Bearer YOUR_JWT_TOKEN
```

---

# 📷 API Testing

All APIs were tested using **Postman**.

The project includes:

* Authentication APIs
* Event CRUD APIs
* Registration APIs
* JWT Protected Routes

---

# 📈 Future Improvements

* Email Notifications
* Event Images Upload
* Admin Dashboard
* Search & Filter Events
* Pagination
* Event Categories
* QR Code Ticket Generation
* Payment Gateway Integration
* Event Analytics Dashboard

---

# 👨‍💻 Author

**Manshi Rai**

B.Tech Computer Science Engineering

Backend Developer | MERN Stack Developer | AI & Full Stack Enthusiast

GitHub: https://github.com/manshirai09

LinkedIn: https://www.linkedin.com/in/manshi-rai09/
---

# 📄 License

This project was developed as part of the **CodeAlpha Backend Development Internship** for educational and portfolio purposes.
