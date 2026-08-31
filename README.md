<div align="center">

# QuizFlow

**A production-grade quiz management platform for classrooms, cohorts, and training batches.**

Built on the MERN stack with role-based dashboards, timed MCQ assessments, live scoring, and leaderboards.

[![Node](https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js&logoColor=white)](https://nodejs.org)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![MongoDB](https://img.shields.io/badge/MongoDB-7-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com)
[![Express](https://img.shields.io/badge/Express.js-4-000000?logo=express&logoColor=white)](https://expressjs.com)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](#license)

[![Live Demo](https://img.shields.io/badge/Live%20Demo-View%20App-5B4FE9?style=for-the-badge)](https://quizflow-frontend-0qdp.onrender.com)

[Live Demo](https://quizflow-frontend-0qdp.onrender.com) • [Features](#features) • [Tech Stack](#tech-stack) • [Getting Started](#getting-started) • [API Reference](#api-reference) • [Project Structure](#project-structure)

</div>

---

## Overview

QuizFlow is a full-stack quiz management system built for organizations that run structured assessments across multiple batches or cohorts — coding bootcamps, training programs, colleges, and internal L&D teams. It gives **admins** the tools to manage batches, author timed multiple-choice quizzes, and track performance at a glance, while **users** get a focused, distraction-free environment to take quizzes, review results, and climb the leaderboard.

The UI follows a dedicated design system (ink sidebar, violet accent, Sora/Inter type pairing) rather than a generic admin-template look, and the API is built REST-first with clean separation between models, controllers, and routes for easy extension.

## Features

### Authentication & Access Control
- JWT-based authentication with HTTP-only cookies
- Password hashing with bcrypt
- Role-based access control (`admin` / `user`) enforced at the middleware layer
- Protected routes on both API and client

### Admin Capabilities
- Central dashboard with live stats (batches, quizzes, active users, submissions)
- Batch management — create, edit, archive, and assign users to batches
- Quiz builder — add/edit/reorder MCQ questions, set per-question difficulty and marks
- Configurable quiz settings: duration, shuffle questions, passing percentage, publish window
- Results overview per quiz and per batch, with export-ready data

### User Capabilities
- Personal dashboard with assigned batch, upcoming quizzes, and performance trend
- Distraction-free quiz-taking experience with a live countdown timer
- Auto-submit on timeout, question navigator, and answer review before submission
- Instant scoring with a detailed results breakdown (correct/incorrect/skipped, per-difficulty accuracy)
- Batch and global leaderboards

### Platform Quality
- Fully responsive layout (mobile, tablet, desktop)
- Reusable component library (buttons, cards, modals, tables, badges, timer ring)
- Centralized error handling and request validation on the API
- Rate limiting and security headers (Helmet, CORS, sanitized input)
- Clean, documented REST API ready for a mobile client or third-party integration

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, React Router, Context API, Axios, Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB with Mongoose ODM |
| Auth | JSON Web Tokens, bcrypt, HTTP-only cookies |
| Tooling | Vite, ESLint, Nodemon |

## Architecture

```
┌─────────────────┐        REST (JSON / JWT)        ┌──────────────────┐        Mongoose ODM        ┌─────────────┐
│   React (Vite)  │  ───────────────────────────▶   │  Express.js API  │  ─────────────────────▶   │  MongoDB    │
│  Admin & User UI │  ◀───────────────────────────   │  Controllers /   │  ◀─────────────────────   │  Collections│
└─────────────────┘                                  │  Routes / MW     │                            └─────────────┘
                                                       └──────────────────┘
```

- **Client** talks to the API exclusively over versioned REST endpoints (`/api/v1/...`).
- **Middleware** (`protect`, `authorize`) guards every private route and enforces role checks.
- **Controllers** contain business logic; **models** own schema validation and hooks (e.g. password hashing, virtuals for computed fields like `totalMarks`).

## Project Structure

```
quizflow/
├── backend/
│   ├── config/
│   │   └── db.js                # MongoDB connection
│   ├── models/
│   │   ├── User.js               # Auth + roles
│   │   ├── Batch.js              # Cohort/group management
│   │   ├── Quiz.js               # Quiz + embedded MCQ questions
│   │   └── Result.js             # Scoring + submissions
│   ├── middleware/
│   │   ├── auth.js               # JWT verification
│   │   ├── role.js               # Role-based guards
│   │   └── errorHandler.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── batchController.js
│   │   ├── quizController.js
│   │   ├── resultController.js
│   │   └── userController.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── batchRoutes.js
│   │   ├── quizRoutes.js
│   │   ├── resultRoutes.js
│   │   └── userRoutes.js
│   ├── utils/
│   │   └── generateToken.js
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
├── frontend/
│   ├── src/
│   │   ├── api/                  # Axios instance + endpoint helpers
│   │   ├── components/           # Navbar, Sidebar, Card, Button, Timer, ProtectedRoute...
│   │   ├── context/               # AuthContext
│   │   ├── pages/
│   │   │   ├── auth/              # Login, Register
│   │   │   ├── admin/             # Dashboard, Batches, QuizBuilder, Results
│   │   │   └── user/              # Dashboard, QuizAttempt, MyResults, Leaderboard
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── tailwind.config.js
│   └── package.json
│
└── README.md
```

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB (local instance or a MongoDB Atlas connection string)
- npm or yarn

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/quizflow.git
cd quizflow
```

### 2. Backend setup
```bash
cd backend
npm install
cp .env.example .env
# fill in MONGO_URI, JWT_SECRET, CLIENT_URL, etc.
npm run dev
```
API runs at `http://localhost:5000` by default.

### 3. Frontend setup
```bash
cd frontend
npm install
npm run dev
```
Client runs at `http://localhost:5173` by default.

### 4. Environment Variables

**backend/.env**
```env
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/quizflow
JWT_SECRET=replace_this_with_a_long_random_secret
JWT_EXPIRES_IN=7d
COOKIE_EXPIRES_DAYS=7
CLIENT_URL=http://localhost:5173
```

**frontend/.env**
```env
VITE_API_BASE_URL=http://localhost:5000/api/v1
```

## API Reference

All endpoints are prefixed with `/api/v1`. Protected routes require a valid JWT (sent as an HTTP-only cookie); admin-only routes additionally require `role: admin`.

| Method | Endpoint | Access | Description |
|---|---|---|---|
| POST | `/auth/register` | Public | Create a new user account |
| POST | `/auth/login` | Public | Authenticate and receive a session |
| POST | `/auth/logout` | Private | Clear the session |
| GET | `/auth/me` | Private | Get the current authenticated user |
| GET | `/batches` | Admin | List all batches |
| POST | `/batches` | Admin | Create a batch |
| PUT | `/batches/:id` | Admin | Update a batch |
| DELETE | `/batches/:id` | Admin | Archive a batch |
| GET | `/quizzes` | Private | List quizzes (scoped to user's batch, or all for admin) |
| POST | `/quizzes` | Admin | Create a quiz with MCQ questions |
| PUT | `/quizzes/:id` | Admin | Update quiz details or questions |
| PATCH | `/quizzes/:id/publish` | Admin | Publish/unpublish a quiz |
| DELETE | `/quizzes/:id` | Admin | Delete a quiz |
| GET | `/quizzes/:id/attempt` | Private | Fetch a quiz for attempting (answers stripped) |
| POST | `/results` | Private | Submit answers and receive a score |
| GET | `/results/me` | Private | Get the current user's result history |
| GET | `/results/quiz/:quizId` | Admin | Get all results for a quiz |
| GET | `/results/leaderboard/:batchId` | Private | Get the leaderboard for a batch |

## Roles

| Role | Access |
|---|---|
| **Admin** | Full access — manage batches, users, quizzes, and view all results |
| **User** | Attempt quizzes assigned to their batch, view personal results and leaderboards |

## Roadmap

- [ ] Question banks with tagging and reuse across quizzes
- [ ] CSV bulk import for batch enrollment
- [ ] Email notifications for new/upcoming quizzes
- [ ] Analytics dashboard (per-question difficulty accuracy, drop-off rate)
- [ ] Dark mode

## Contributing

Contributions are welcome. Please fork the repo, create a feature branch, and open a pull request describing your changes.

```bash
git checkout -b feature/your-feature-name
git commit -m "Add: your feature"
git push origin feature/your-feature-name
```

## License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">
Built with the MERN stack — MongoDB, Express.js, React.js, Node.js
</div>
