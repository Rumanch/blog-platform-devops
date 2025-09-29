# blog-platform-devops
# Blog Platform – DevOps Assignment  

## 📌 Overview  
This project is a simple **full-stack web application** containerized with **Docker** and orchestrated with **Docker Compose**.  
The stack includes:  
- **Frontend**: React app (runs on `localhost:3000`)  
- **Backend**: Node.js/Express (intended to run on `localhost:5000`)  
- **Database**: MongoDB  

The goal is to demonstrate DevOps practices including version control, containerization, and multi-service orchestration.  

---

## 🚀 Features Implemented  
1. **GitHub for version control**  
   - Repository initialized and managed with Git.  
   - Feature branches created for `frontend` and `backend`.  
   - Commits pushed to GitHub.  
   - Pull requests workflow documented.  

2. **Frontend & Backend development**  
   - Basic React frontend.  
   - Node.js backend (with API routes, not fully connected due to MongoDB issue).  

3. **Dockerization**  
   - **Dockerfile** created in both `frontend/` and `backend/`.  
   - Images built using Docker Compose.  

4. **Multi-container setup with Docker Compose**  
   - MongoDB, Backend, and Frontend defined in `docker-compose.yml`.  
   - Ports exposed:  
     - `3000:80` → Frontend  
     - `5000:5000` → Backend  
     - `27017:27017` → MongoDB  

---

## 🐳 Running the Application  

### Step 1: Clone the Repository  
```bash
git clone <repo-link>
cd blog-platform-devops
