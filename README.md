# FinED

FinED is a learning platform built to make finance easier, more intuitive, and more engaging. Instead of relying on dense theory or long lectures, FinED teaches financial concepts through interactive exercises, practical scenarios, and hands-on simulations.

## Project Purpose

Many people find finance confusing or overwhelming. Our goal with FinED is to create a space where anyone can learn the fundamentals by actually doing the tasks they read about. FinED focuses on letting learners experiment, make decisions, explore real-world examples, and build confidence one step at a time.

## Tech Stack

- **Frontend:** React, JavaScript, Tailwind CSS  
- **Backend:** Node.js, Express  
- **Database:** PostgreSQL  
- **Authentication:** JWT-based login system with bcrypt password hashing  
- **Structure & Tooling:** `client` folder for the React frontend, `server` folder for backend routes/controllers/middleware/database logic, infra folder reserved for future Docker/CI support

## Features

- Secure user registration and login
- PostgreSQL database for user accounts, progress, and activity
- Financial learning modules with interactive elements
- Clean and responsive user interface built with a warm palette
- Built-in protection via JWT-authenticated APIs

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Fazilpadaniya2/fin-ed.git
cd fin-ed
```

### 2. Backend setup

Create a `.env` file inside the `server` folder:

```env
PORT=4000
JWT_SECRET=your_secret
DB_HOST=localhost
DB_USER=your_postgres_user
DB_PASSWORD=your_password
DB_NAME=fined
```

Install dependencies and start the server:

```bash
cd server
npm install
npm run dev
```

### 3. Frontend setup

```bash
cd ../client
npm install
npm run dev
```

### 4. Access the application

Open the browser at the URL shown in the frontend console (commonly `http://localhost:5173`).

## Folder Overview

- `client` – React components, pages, hooks, and styling.
- `server` – Express routes, controllers, authentication middleware, and database configuration.
- `infra` – Reserved for future deployment or container configuration.

## Future Plans

- Additional simulation modules
- Structured learning path with levels and checkpoints
- Mobile-friendly experience with improved accessibility
- Deployment pipelines and automated testing
