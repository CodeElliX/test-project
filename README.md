# 🌸 Flower Delivery App

A fully functional flower delivery web application built with a modern tech stack: **React** + **TypeScript** + **Redux Toolkit** on the frontend and **Node.js** + **Express** + **MongoDB** on the backend.

## Project details:

### Public link: https://test-project-89fm-3w9efarwl-ellis-projects-e9fd513e.vercel.app/
### Root git repository: https://github.com/CodeElliX/test-project
### Frontend git repository: https://github.com/CodeElliX/test-project/tree/main/flower-delivery
### Git repository backend: https://github.com/CodeElliX/test-project/tree/main/flower-delivery-backend
### README.md: https://github.com/CodeElliX/test-project/blob/main/README.md

## 🚀 Technology stack

### Frontend
- **React** 
- **TypeScript** 
- **Redux Toolkit** 
- **Redux Thunk** 
- **CSS Modules** 

### Backend
- **Node.js + Express**
- **TypeScript** 
- **MongoDB + Mongoose** 
- **CORS** 

---

## 📦 Installation and launch

### 1. Cloning a repository
```bash
git clone https://github.com/CodeElliX/test-project.git
cd test-project
```
### 2. Installing dependencies

#### Frontend
```bash
cd client
npm install
```

#### Backend
```bash
cd ../server
npm install
```

### 3. Setting Environment Variables
Create a .env file in the server folder and add there:
```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### 4. Project launch


#### Backend
```bash
npm run dev
```

#### Frontend
Open a new terminal tab and run:
```bash
cd client
npm start
```

## 📁 Project structure

```text
test-project/
│
├── flower-delivery/                     # React application (Frontend)
│   ├── src/
│   │   ├── components/                  # UI components
│   │   ├── redux/                       # Redux Toolkit store and slices
│   │   ├── styles/                      # CSS-modules
│   │   └── App.tsx
│   ├── public/                          # Static file
│   ├── package.json
│   └── tsconfig.json

├── flower-delivery-backend/            # Express-server (Backend)
│   ├── src/
│   │   ├── controllers/                # Request processing logic
│   │   ├── models/                     # Mongoose-schemes
│   │   ├── routes/                     # API-routes
│   │   ├── middleware/                 # CORS and other middlewares
│   │   └── index.ts                    # Entry point
│   ├── package.json
│   ├── tsconfig.json
│   └── .env                            # Environment variables
```
