# **User Management App (MERN Stack)**

This is a full-stack **User Management Application** built using the **MERN stack** (MongoDB, Express, React, and Node.js). It allows users to register, log in, and manage user profiles with CRUD operations (Create, Read, Update, Delete).

## **Table of Contents**
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Troubleshooting](#troubleshooting)

---

## **Features**
- **User Registration**: Register new users with email, username, and password.
- **User Login**: Authenticate users via email and password.
- **CRUD Operations**: View, edit, and delete users from the system.
- **JWT Authentication**: Secure user sessions using JSON Web Tokens.
- **MongoDB Integration**: Store and manage user data.

---

## **Prerequisites**
Ensure the following tools are installed on your machine:
- **Node.js**: [Download here](https://nodejs.org/) (v14+)
- **MongoDB**: [Download here](https://www.mongodb.com/) (or use MongoDB Atlas)
- **Git**: [Download here](https://git-scm.com/) (optional)

---

## **Getting Started**
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/user-management-app.git
   cd user-management-app
cd backend
npm install
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/myDatabase?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key
PORT=5000

npm start

cd frontend
npm install
npm run dev

