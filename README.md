📝 Task Manager Project 🚀  
---

👀 Overview

Task Manager is a full-stack application designed to help users manage their tasks efficiently.   
Users can sign up, log in, create, update, delete, and view tasks through a clean, modern, and responsive interface.
The project follows a REST API architecture and implements secure authentication using JWT 🔐.

---
 
 🛠 Tech Stack
 
#💻 Frontend

⚛️ React.js

🎨 Material UI (MUI)

💻 JavaScript (ES6+)

🌐 Axios

🛣️ React Router DOM  

---- 
#🖥️ Backend

🟢 Node.js

🔧 Express.js

🌐 REST API

🔑 JWT Authentication

🗄️ Database

🍃 MongoDB

☁️ MongoDB Atlas (Cloud)  

---
✨ Features  

🔹 Frontend

📱 Fully responsive UI (Mobile, Tablet & Desktop)

🔑 Authentication (Signup & Login)

📝 Task CRUD operations (Create, Read, Update, Delete)

🎛️ Clean dashboard layout using Material UI

🌐 API integration with backend

🚧 Protected routes (only logged-in users can manage tasks) 

---
🔹 Backend

🔐 User authentication using JWT

🛡️ Secure login & signup APIs

🗂️ Task CRUD APIs

🌐 RESTful API design

🛠️ Middleware-based authorization

🗄️ MongoDB for data storage  

---
📂 Project Structure  

Task-Manager/ 

├── frontend/      # ⚛️ React + Material UI frontend   

├── backend/       # 🟢 Node.js + Express backend   

└── README.md      # 📝 Project documentation  

---
⚙️ Installation & Setup  

1️⃣ Clone the Repository
git clone https://github.com/KomalTrivedi257/Task-Manager.git  

 cd Task-Manager  

---
2️⃣ Backend Setup
cd backend 

npm install

node index.js

Backend runs on: http://localhost:5000  

---
3️⃣ Frontend Setup
cd frontend  

npm install  

npm start  

Frontend runs on: http://localhost:3000  

---
🔑 Environment Variables

Create a .env file inside the backend folder:

PORT=5000 

MONGO_URI=mongodb://127.0.0.1:27017/knitfinance  

JWT_SECRET=knitfinance_secret_key  

---
📡 API Information  

🔐 Authentication APIs

POST :  /api/auth/signup ➡️  Register a new user

POST :    /api/auth/login ➡️  User login

 ---
📝 Task APIs

POST :   /api/tasks ➡️  Create a new task

GET :   /api/tasks ➡️  Fetch all tasks

PUT :  /api/tasks/:id  ➡️ Update an existing task

DELETE :  /api/tasks/:id  ➡️ Delete a task  

---
🔐 Authentication Flow

👤 User signs up or logs in

🔑 Backend generates a JWT token

🌐 Token is used to access protected task APIs

🔒 Only authenticated users can create, update, or delete tasks

🧪 API Testing

🧪 All APIs are tested using Postman

📂 Collection Name: API task-manager

🌐 Base URL: http://localhost:5000  

 ----
👩‍💻 Author

Komal Trivedi  

GitHub: KomalTrivedi257
