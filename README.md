# frontend

# 🌟 Strent App

A collaborative, responsive web project built with **React**, **Vite**, **Tailwind CSS**, and managed with **pnpm**. This app is designed for maintainability, reusability, and team collaboration as part of the AltSchool project initiative.

---

## 📌 Overview

Strent-App is a modern frontend project focused on clean UI, reusable components, and efficient state management. The goal is to demonstrate best practices while building a scalable, modular front-end application.

---

## 🧰 Tech Stack to get start

- ⚛️ React
- ⚡ Vite (for fast bundling)
- 💨 Tailwind CSS
- 🧠 React Context API/Recoil
- 🧩 React Router DOM
- 📦 **pnpm** (package manager)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/strent-app.git
cd strent-app
##  2. Install Dependencies with pnpm
Make sure pnpm is installed globally:
npm install -g pnpm

Then install dependencies:
pnpm install

3. Run the Development Server
pnpm dev


Visit http://localhost:5173 in your browser. or on your terminal ctl + click




🗂️ Folder Structure

src/
│
├── components/        # Shared reusable components (Navbar, Footer, etc.)
├── pages/             # Page-specific views (Home, About, Contact)
├── context/           # React Context for global state
├── hooks/             # Custom React hooks
├── utils/             # Utility/helper functions
├── images/            # Static image  in assets
├── icons/             # Icon, SVGs  in asset 
├── fonts/             # Web font files (optional) in asset
│
├── App.jsx            # Root component with routes
├── main.jsx           # Entry point of the app
└── index.css          # Tailwind base styles


🧪 Features
⚛️ Component think of it as if its use all around its a component (nav, footer, button )

🔁 Pages  think of it tied to route its a pages (home, contact, etc)

🧠 Global State via Context or recoil

📱 Mobile-First Responsive Design

🌐 Client-Side Routing with react-router-dom

💨 Utility-First Styling with Tailwind CSS

📦 Uses pnpm for fast and efficient package management


📝 Scripts

pnpm install      # Install dependencies
pnpm dev          # Start development server
pnpm build        # Build production-ready app
pnpm preview      # Preview the built app


🧾 License
This project is more than educational and collaborative  purposes and is part of the AltSchool Africa project work and beyond



📬 Contact
📧 Email: graphgeo02@gmail.com
🌍 GitHub: https://github.com/abdullahi-abdulkadir


🟢 Notes
Before you start make sure:

Checkout the development branch:
git checkout dev
git pull origin dev


Create a feature branch always 

git checkout -b feature/ your-feature-name,  example: feature/footer if you are working on footer


Make Change and commit:
git add .
git commit -m " feat: added footer section" ie if working on footer


push your feature to github: 
git push origin feature/footer  if are working on footer for example

Open a pull request PR: 
Go to repository open pull request from your feature/footer to the dev
Request a review if need 

Important Notes:

Do not commit directly to the main branch 
Always pull from the dev before starting new work or opening a PR
Use clear and consist branch names (feature/, fix/, style)
keep your code clearn and follow project naming convention

