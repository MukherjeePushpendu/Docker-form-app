# 🚀 Full Stack Form App with Docker (Node.js + Flask)

This project demonstrates a full-stack web application with a **Node.js + Express frontend** and a **Flask backend**, containerized using Docker and orchestrated via Docker Compose.

## 📁 Project Structure

```
project-root/
├── frontend/              # Node.js + Express frontend
│   ├── Dockerfile
│   ├── index.js
│   ├── package.json
│   └── views/
│       └── form.ejs
│
├── backend/              # Flask backend
│   ├── Dockerfile
│   ├── app.py
│   ├── requirements.txt
│   └── templates/
│       ├── README.md
│       └── result.html
│
├── docker-compose.yaml
└── README.md
```

## 🔧 Requirements

- Docker
- Docker Compose
- Node.js (for local development)
- Python 3.x (for local development)
- Docker Hub account (for image uploads)

## 🛠 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/MukherjeePushpendu/Docker-form-app.git
cd Docker-form-app
```

### 2. Build and Run with Docker Compose

```bash
docker compose build
docker compose up
```

The application will be available at:
- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:5000](http://localhost:5000)

### 3. Push Images to Docker Hub

```bash
# Tag the images
docker tag docker-form-app-frontend pushpendumukherjee/frontend
docker tag docker-form-app-backend pushpendumukherjee/backend

# Push to Docker Hub
docker push pushpendumukherjee/frontend
docker push pushpendumukherjee/backend
```

Docker Hub Images:
- Frontend: [pushpendumukherjee/frontend](https://hub.docker.com/r/pushpendumukherjee/frontend)
- Backend: [pushpendumukherjee/backend](https://hub.docker.com/r/pushpendumukherjee/backend)

### 4. Local Development Setup (Optional)

#### Frontend Setup
```bash
cd frontend
npm install
npm start
```

#### Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

## 📦 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
FLASK_APP=app.py
FLASK_ENV=development
```

## 🧾 Features

- Form submission handling
- Data validation
- Responsive design
- Containerized deployment
- Microservices architecture

## 📬 Contact

For any queries or suggestions, feel free to contact [Pushpendu Mukherjee](https://github.com/MukherjeePushpendu)

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.
```