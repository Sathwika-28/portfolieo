# Dasari Sathwika - Developer Portfolio Website

A modern, responsive, and visually striking developer portfolio built with **Next.js (App Router, TypeScript)**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**, designed specifically for seamless 1-click deployment on **Vercel**.

![Portfolio Preview Banner](https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop)

---

## 🌟 Tech Stack Specifications

- **Framework**: Next.js 14 (App Router, TypeScript)
- **Styling**: Tailwind CSS with custom glassmorphism design tokens & radiant glows
- **Icons**: Lucide React
- **Animations**: Framer Motion entrance & modal transitions
- **Deployment Target**: Vercel (Zero-config Next.js integration)

---

## 📑 Portfolio Sections Included

1. **Hero Section**:
   - Eye-catching headline, bio, availability badge, quick statistics (87% Crop Accuracy, 94% Face ID Accuracy, 1KM GIS Buffer, 50k+ IoT Records).
   - Primary Call-to-Action (CTA) buttons: *"View Projects"*, *"Contact Me"*, *"Resume"*.
   - Direct social links (GitHub, LinkedIn, Email, Phone).
2. **About Me**:
   - Concise introduction, core engineering philosophy, key highlights.
   - Formal education timeline cards (*MCA at Sri Chaitanya Technical Campus*, *B.Sc in Data Science at TSWRDCW Warangal with 8.17 GPA*).
   - *SETWIN Data Science Certification* card.
3. **Skills & Technologies**:
   - Categorized grid with interactive tabs (*Programming & Core*, *Backend & Web*, *Data Science & AI*, *Databases & DevOps*).
   - Animated proficiency progress bars & software engineering practices footer.
4. **Projects Section**:
   - Responsive project cards with filter pills (*All*, *Full Stack & GIS*, *Machine Learning & IoT*, *Computer Vision & AI*, *Backend & REST API*).
   - Each project card includes title, short description, impact metric, tech badges, live demo link, GitHub repo link, and an interactive *"View Details"* modal trigger.
   - Featured projects:
     1. **Route Optimization & Buffer Analytics Web App** (Flask, Google Maps API, VictoriaMetrics, Grafana)
     2. **AI & IoT Agriculture Management System** (Random Forest 87%, IoT telemetry, MySQL 3NF)
     3. **Face Recognition Student Attendance System** (OpenCV, TensorFlow 94%, <80ms latency)
     4. **Student Management RESTful API System** (Flask, CRUD Architecture, Postman collections)
5. **Experience / Timeline**:
   - Vertical timeline showcasing internship at **EXIENT** (Madhapur, Hyderabad).
   - Period, key responsibilities, spatial buffer logic, VictoriaMetrics/Grafana deployment, and API validation.
6. **Contact Section**:
   - Interactive contact form with real-time feedback and direct contact details (*Email: dasarisathwika88@gmail.com*, *Phone: +91 8897612216*, *Location: Hyderabad, India*).
7. **Interactive Resume Modal**:
   - Complete formatted resume view with 1-click **Print / Save as PDF** functionality.

---

## 🚀 Step-by-Step Instructions

### 1. Local Development Setup

Open your terminal in the project directory and run:

```bash
# Install all required dependencies
npm install

# Start the Next.js local development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

### 2. Push Codebase to GitHub

Follow these standard commands to create a new GitHub repository and push your project:

```bash
# Initialize git repository (if not already initialized)
git init

# Stage all files
git add .

# Commit changes
git commit -m "Initial commit: Dasari Sathwika Developer Portfolio"

# Rename branch to main
git branch -M main

# Add your GitHub remote URL (Replace with your repository link)
git remote add origin https://github.com/Sathwika-88/dasari-sathwika-portfolio.git

# Push code to GitHub
git push -u origin main
```

---

### 3. Deploy to Vercel (Recommended)

#### Option A: Deploy via GitHub (Easiest & Automatic CI/CD)

1. Go to [Vercel](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New..."** -> **"Project"**.
3. Import the **`dasari-sathwika-portfolio`** repository.
4. Keep all default settings (Vercel automatically detects Next.js):
   - **Framework Preset**: Next.js
   - **Build Command**: `next build`
   - **Output Directory**: `.next`
5. Click **"Deploy"**.
6. Within ~60 seconds, your portfolio will be live at `https://dasari-sathwika-portfolio.vercel.app`!

#### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy project to production
vercel --prod
```

---

## 🛠️ Project Structure

```text
├── app/
│   ├── globals.css         # Tailwind directives & glassmorphism custom CSS
│   ├── layout.tsx          # Root layout with SEO meta & OpenGraph tags
│   └── page.tsx            # Main page assembling all components & modals
├── components/
│   ├── Navbar.tsx          # Sticky glassmorphic navigation bar
│   ├── Hero.tsx            # Hero section with interactive copy & statistics
│   ├── About.tsx           # Philosophy, highlights, and education cards
│   ├── Skills.tsx          # Categorized filterable skills grid
│   ├── Projects.tsx        # Responsive project cards with filter pills
│   ├── Experience.tsx      # Work experience vertical timeline
│   ├── Contact.tsx         # Interactive contact form & details
│   ├── Footer.tsx          # Footer with back-to-top button
│   ├── ResumeModal.tsx     # Printable resume viewer modal
│   └── ProjectModal.tsx    # Detailed project breakdown modal
├── data/
│   └── portfolioData.ts    # Centralized, strongly-typed resume data source
├── public/                 # Static assets
├── next.config.mjs         # Next.js configuration
├── tailwind.config.ts      # Custom Tailwind theme, colors & gradients
├── tsconfig.json           # TypeScript configuration
├── package.json            # Project dependencies & scripts
└── README.md               # Step-by-step deployment guide
```

---

## 📄 License

Created for **Dasari Sathwika**. Open for personal and professional use.
