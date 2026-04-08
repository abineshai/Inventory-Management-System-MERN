
# 🗃️ IMS — Inventory Management System
 
A full-stack **MERN** web application to efficiently manage product inventory in an organization — supporting complete **Create, Read, Update, and Delete (CRUD)** operations with a clean React frontend and a RESTful Node.js backend.
 
---
 
## 📸 Features
 
- 📦 **Product Management** — Add, view, edit, and delete products seamlessly
- 🔄 **Real-time CRUD** — Instant updates to inventory without page reloads
- 🗄️ **MongoDB Integration** — Persistent data storage with Mongoose ODM
- 🌐 **RESTful API** — Clean Express.js routes for all inventory operations
- ⚛️ **React Frontend** — Dynamic, responsive UI built with React
- 🔗 **Full-Stack Architecture** — Decoupled frontend and backend for scalability
 
---
 
## 🏗️ Project Structure
 
```
Inventory-Management-System-MERN/
├── Backend/
│   ├── Models/
│   │   └── Products.js           # Mongoose product schema & model
│   ├── Routes/
│   │   └── router.js             # Express API routes (CRUD)
│   ├── db.js                     # MongoDB connection setup
│   ├── index.js                  # Express server entry point
│   ├── package.json
│   └── package-lock.json
├── Frontend/
│   └── inventory_management_system/
│       ├── public/
│       │   ├── index.html        # Root HTML file
│       │   ├── favicon.ico
│       │   ├── logo192.png
│       │   ├── logo512.png
│       │   ├── manifest.json
│       │   └── robots.txt
│       ├── src/                  # React components & app logic
│       ├── .gitignore
│       ├── README.md
│       ├── package.json
│       └── package-lock.json
├── .gitignore
└── package-lock.json
```
 
---
 
## ⚙️ Setup Instructions
 
### Prerequisites
 
- Node.js v16 or higher
- npm v8 or higher
- MongoDB (local instance or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
 
---
 
### 1. Clone the Repository
 
```bash
git clone https://github.com/abineshai/Inventory-Management-System-MERN.git
cd Inventory-Management-System-MERN
```
 
---
 
### 2. Configure the Database
 
In `Backend/db.js`, update the MongoDB connection string with your credentials:
 
```js
mongoose.connect("mongodb://localhost:27017/inventoryDB");
// or for Atlas:
mongoose.connect("mongodb+srv://<username>:<password>@cluster.mongodb.net/inventoryDB");
```
 
---
 
### 3. Install & Run the Backend
 
```bash
cd Backend
npm install
node index.js
```
 
The backend server will start at `http://localhost:5000`
 
---
 
### 4. Install & Run the Frontend
 
Open a new terminal:
 
```bash
cd Frontend/inventory_management_system
npm install
npm start
```
 
The React app will open at `http://localhost:3000`
 
---
 
## ▶️ Usage
 
| Action | Description |
|--------|-------------|
| **View Products** | Browse all inventory items on the home page |
| **Add Product** | Fill in the product form to add a new item |
| **Edit Product** | Click edit on any product to update its details |
| **Delete Product** | Remove a product permanently from the inventory |
 
---
 
## 🔄 How It Works
 
```
React Frontend (Port 3000)
    ↓
Axios HTTP Requests  →  REST API Calls (GET / POST / PUT / DELETE)
    ↓
Express.js Server (Port 5000)
    ↓
Routes/router.js  →  Request Handling & Validation
    ↓
Models/Products.js  →  Mongoose Schema Operations
    ↓
MongoDB Database  →  Persistent Data Storage
    ↓
Response  →  UI Update in React
```
 
---
 
## 🧮 API Endpoints
 
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/products` | Fetch all products |
| `GET` | `/api/products/:id` | Fetch a single product |
| `POST` | `/api/products` | Create a new product |
| `PUT` | `/api/products/:id` | Update an existing product |
| `DELETE` | `/api/products/:id` | Delete a product |
 
---
 
## 🛠️ Tech Stack
 
### Backend
- `Node.js` — JavaScript runtime environment
- `Express.js` — Web framework for RESTful APIs
- `MongoDB` — NoSQL database for product storage
- `Mongoose` — ODM for schema definition and DB queries
 
### Frontend
- `React.js` — Component-based UI library
- `Axios` — HTTP client for API communication
- `React Router` — Client-side page navigation
