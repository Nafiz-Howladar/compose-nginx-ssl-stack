# compose-nginx-ssl-stack

![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)
![Docker Compose](https://img.shields.io/badge/Docker_Compose-2496ED?style=flat&logo=docker&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-009639?style=flat&logo=nginx&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-232F3E?style=flat&logo=amazon-aws&logoColor=white)

> Full-stack Todo app deployed with Docker Compose, Nginx reverse proxy, and MongoDB on AWS EC2.

## Architecture

```
User Browser
    |
Nginx (port 80) — Reverse Proxy
    |              |
    /          /api/*
    |              |
Frontend       Backend
(HTML/CSS/JS)  (Node.js + Express)
                   |
               MongoDB
```

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML, CSS, JavaScript |
| Backend | Node.js + Express |
| Database | MongoDB |
| Reverse Proxy | Nginx |
| Containerization | Docker + Docker Compose |
| Cloud | AWS EC2 |

## Run Locally

```bash
git clone https://github.com/Nafiz-Howladar/compose-nginx-ssl-stack.git
cd compose-nginx-ssl-stack
docker compose up --build
```

Open `http://localhost`

## Project Structure

```
compose-nginx-ssl-stack/
├── frontend/
│   ├── index.html
│   └── Dockerfile
├── backend/
│   ├── server.js
│   ├── package.json
│   └── Dockerfile
├── nginx/
│   └── nginx.conf
├── docker-compose.yml
└── README.md
```

## Key Learnings

- Docker Compose manages multiple containers with one command
- Containers communicate by service name — `http://backend:5000`
- Nginx routes `/api` to backend, `/` to frontend
- MongoDB data persists via Docker volumes
- `depends_on` ensures correct container startup order
