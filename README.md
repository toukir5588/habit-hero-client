# 🌟 Habit Hero — Build Streaks. Boost Productivity.

A powerful web app that helps users **create, track, and manage daily habits** to stay consistent and productive.  
Track your progress, maintain streaks, and visualize your growth with interactive UI and analytics.

---

## 🚀 Live Demo
🔗 [Live Site URL](https://your-live-site-link.netlify.app)  
🔗 [API Server](https://habit-hero-api-server.vercel.app)

---

## 🧩 Key Features
- ✨ **Authentication System** – Email/Password & Google Login using Firebase.  
- 📅 **Habit Management (CRUD)** – Add, update, delete, and complete daily habits.  
- 🔥 **Streak Tracking** – Calculates and displays your current streak dynamically.  
- 🌍 **Public Habit Browser** – Explore other users’ public habits with filters and search.  
- 📊 **Responsive Dashboard** – Beautiful, animated UI with Framer Motion & Toast notifications.

---

## 🛠️ Tech Stack
**Frontend:**
- React 19 + React Router 7  
- Tailwind CSS + Styled Components  
- Framer Motion (animations)  
- React Toastify & SweetAlert2 (notifications)  
- React Tooltip & Lucide Icons  
- Axios for API communication  

**Backend:**
- Node.js + Express.js  
- MongoDB (Mongoose ORM)  
- Firebase Admin SDK (optional authorization)  
- Hosted on Vercel  

---


---

## 🔐 Authentication Flow
- User can **register/login** with Firebase.
- After login, user photo & name appear in navbar dropdown.
- Private routes (Add Habit, My Habits, Habit Details) are protected.
- Persistent login: user stays logged in after reload.

---

## 🧠 Core Features
### 🧾 Add Habit
Add new habits with title, category, description, reminder time, and image (ImgBB).

### 📈 Track Progress
- Each habit tracks completion history.
- Streak and progress are dynamically updated.
- “Mark Complete” prevents duplicate entries for the same day.

### 🔍 Browse Public Habits
- Filter by category (Morning, Work, Fitness, Study, etc.)
- Search by habit title or keyword.
- View detailed info (title, creator, description, streak, progress bar).

### ⚙️ My Habits Management
- Update / Delete / Mark Complete from your dashboard.
- Confirmation modals before deletion.
- Real-time UI updates.

---

## 🎨 UI & Design
- Fully responsive (mobile, tablet, desktop)
- Animated sections using **Framer Motion**
- Carousel banner using **react-fast-marquee**
- Modern dark/light theme (optional)
- Consistent typography & color scheme

---

## 🧰 Additional Packages Used
"@tailwindcss/vite": "^4.1.16",
"axios": "^1.13.2",
"firebase": "^12.5.0",
"framer-motion": "^12.23.24",
"lucide-react": "^0.553.0",
"motion": "^12.23.24",
"react-countup": "^6.5.3",
"react-fast-marquee": "^1.6.5",
"react-icons": "^5.5.0",
"react-router": "^7.9.4",
"react-toastify": "^11.0.5",
"react-tooltip": "^5.30.0",
"styled-components": "^6.1.19",
"sweetalert2": "^11.26.3",
"tailwindcss": "^4.1.16"





## 🏁 Deployment
- **Client:**  Firebase  
- **Server:** Vercel  
- **Database:** MongoDB Atlas  

Ensure that all routes reload without errors and users remain authenticated on reload.

---

## 📜 License
This project is for educational purposes only.  
© 2025 Habit Hero Team. All rights reserved.