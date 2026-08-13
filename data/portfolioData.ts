export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  metrics: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; level: number; highlight?: string }[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  bulletPoints: string[];
  skillsUsed: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location?: string;
  period: string;
  grade?: string;
  details: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "DASARI SATHWIKA",
    title: "Software Engineer & Data Scientist",
    headline: "Transforming Complex Data & Spatial Insights into Scalable Software Solutions",
    bio: "Motivated MCA postgraduate with a strong foundation in Data Science, Machine Learning, and Full-Stack REST API engineering. Experienced in developing spatial routing applications, automated monitoring dashboards, and predictive ML systems.",
    location: "Hyderabad, India",
    email: "dasarisathwika88@gmail.com",
    phone: "+91 8897612216",
    github: "https://github.com/Sathwika-88",
    linkedin: "https://linkedin.com/in/dasari-sathwika",
    availability: "Available for Full-time Roles & Projects",
    corePhilosophy: "Driven by analytical rigor and modern software principles to engineer reliable, high-performance web applications and data-driven systems.",
  },

  stats: [
    { label: "Crop Model Accuracy", value: "87%", icon: "Target" },
    { label: "Face Recognition Accuracy", value: "94%", icon: "Zap" },
    { label: "Buffer Analytics Zone", value: "1 KM", icon: "MapPin" },
    { label: "IoT Telemetry Records", value: "50,000+", icon: "Database" },
  ],

  highlights: [
    "Software Engineer Intern experience at EXIENT developing geospatial & REST API systems",
    "Master of Computer Applications (MCA) candidate with deep focus on System Architecture",
    "Bachelor of Science in Data Science graduate with 8.17 GPA",
    "Proficient in Python, SQL, Flask, Next.js, Machine Learning, and Cloud Observability (Grafana)",
  ],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Sri Chaitanya Technical Campus",
      period: "Oct 2024 - Sep 2026",
      details: [
        "Specializing in Software Development Life Cycle (SDLC), Advanced Database Architectures, and Cloud Observability.",
        "Engaged in hands-on backend framework engineering and data structures optimization.",
      ],
    },
    {
      degree: "Bachelor of Science in Data Science",
      institution: "TSWRDCW",
      location: "Warangal, India",
      period: "2021 - 2024",
      grade: "GPA: 8.17 / 10",
      details: [
        "Comprehensive coursework in Statistical Modeling, Python Programming, Database Normalization, and Machine Learning.",
        "Graduated with top academic distinction (8.17 GPA).",
      ],
    },
  ] as EducationItem[],

  skillCategories: [
    {
      title: "Programming & Core",
      iconName: "Code2",
      skills: [
        { name: "Python", level: 90, highlight: "Primary Language" },
        { name: "SQL", level: 85, highlight: "MySQL & PostgreSQL" },
        { name: "JavaScript / TypeScript", level: 80 },
        { name: "HTML5 / CSS3", level: 85 },
      ],
    },
    {
      title: "Backend & Web Frameworks",
      iconName: "Server",
      skills: [
        { name: "Flask", level: 88, highlight: "RESTful APIs" },
        { name: "Next.js / React", level: 80, highlight: "Modern Frontend" },
        { name: "REST API Design", level: 90, highlight: "CRUD Architecture" },
        { name: "Tailwind CSS", level: 85 },
      ],
    },
    {
      title: "Data Science & AI",
      iconName: "BrainCircuit",
      skills: [
        { name: "Machine Learning", level: 85, highlight: "Random Forest, Scikit-learn" },
        { name: "OpenCV", level: 82, highlight: "Computer Vision" },
        { name: "TensorFlow", level: 78, highlight: "Deep Learning" },
        { name: "Power BI & Tableau", level: 85, highlight: "Data Analytics" },
      ],
    },
    {
      title: "Databases, DevOps & Tools",
      iconName: "Database",
      skills: [
        { name: "MySQL & PostgreSQL", level: 88, highlight: "3NF Normalization" },
        { name: "VictoriaMetrics & Grafana", level: 82, highlight: "Observability" },
        { name: "Git & GitHub", level: 88 },
        { name: "Postman & VS Code", level: 90, highlight: "API Testing" },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "route-optimization",
      title: "Route Optimization & Buffer Analytics Web App",
      category: "Full Stack & GIS",
      description: "Spatial web app with shortest-path calculations via Google Directions API and real-time 1KM dynamic buffer zone monitoring.",
      fullDescription: "Built an intelligent route optimization application that computes optimal transit paths using Google Directions API and Place Autocomplete. Implemented dynamic geospatial buffer zone logic to evaluate proximity alerts within 1KM of the calculated route.",
      tags: ["Python", "Flask", "Google Directions API", "VictoriaMetrics", "Grafana", "Geospatial"],
      githubUrl: "https://github.com/Sathwika-88/route-optimization",
      liveUrl: "https://route-optimization-demo.vercel.app",
      featured: true,
      metrics: "1KM Spatial Buffer",
      highlights: [
        "Designed and developed Route Optimization Web Application using Python Flask.",
        "Integrated Google Places Autocomplete API for seamless address input & validation.",
        "Engineered dynamic 1KM buffer zone around routes for spatial tracking.",
        "Configured VictoriaMetrics on Virtual Machine & Grafana dashboards for performance observability.",
      ],
    },
    {
      id: "agriculture-management",
      title: "AI & IoT Agriculture Management System",
      category: "Machine Learning & IoT",
      description: "AI-driven crop prediction module with 87% accuracy across 5 crop types and real-time IoT irrigation telemetry integration.",
      fullDescription: "An end-to-end smart agriculture solution integrating machine learning with hardware IoT sensors (soil moisture, temperature, humidity). Uses a Random Forest classifier trained on 10,000+ data points to advise optimal crops and trigger automated irrigation.",
      tags: ["Python", "Machine Learning", "Random Forest", "IoT Sensors", "MySQL 3NF"],
      githubUrl: "https://github.com/Sathwika-88/agriculture-management",
      liveUrl: "https://agri-smart-demo.vercel.app",
      featured: true,
      metrics: "87% Prediction Accuracy",
      highlights: [
        "Achieved 87% classification accuracy across 5 crop types using Random Forest.",
        "Integrated telemetry data from 3 IoT sensors for real-time irrigation automation.",
        "Constructed normalized MySQL schema (3NF) storing 50,000+ sensor records.",
        "Streamlined database queries, reducing report generation time from 8s to under 1s.",
      ],
    },
    {
      id: "face-recognition-attendance",
      title: "Face Recognition Attendance System",
      category: "Computer Vision & AI",
      description: "Real-time automated attendance marking system leveraging OpenCV and TensorFlow with 94% identification accuracy.",
      fullDescription: "Automated student attendance tracking using computer vision techniques to eliminate manual calling. The system performs face detection, alignment, and deep feature matching with automated logging into a central MySQL database.",
      tags: ["OpenCV", "TensorFlow", "Python", "Computer Vision", "MySQL"],
      githubUrl: "https://github.com/Sathwika-88/face-recognition-attendance",
      liveUrl: "https://face-attendance-demo.vercel.app",
      featured: true,
      metrics: "94% Accuracy (<80ms Latency)",
      highlights: [
        "Engineered real-time face recognition system achieving 94% identification accuracy on 200 students.",
        "Enhanced image preprocessing pipeline to reduce frame recognition latency under 80ms.",
        "Automated attendance logging to MySQL, saving approximately 2 hours per week of manual effort.",
        "Validated system against 30 test cases covering lighting variations, partial occlusions, and multi-face scenarios.",
      ],
    },
    {
      id: "student-management-api",
      title: "Student Management RESTful API",
      category: "Backend & REST API",
      description: "Production-ready backend API service with full CRUD architecture, standard JSON payloads, and Postman test suits.",
      fullDescription: "Architected a complete RESTful API following REST design principles. Features robust endpoint routing, input validation, structured JSON responses, and integrated VictoriaMetrics logging.",
      tags: ["Python", "Flask", "REST API", "CRUD", "Postman", "VictoriaMetrics"],
      githubUrl: "https://github.com/Sathwika-88/student-management-api",
      liveUrl: "https://student-api-demo.vercel.app",
      featured: false,
      metrics: "100% CRUD Endpoint Coverage",
      highlights: [
        "Architected complete RESTful API following strict REST design guidelines.",
        "Implemented standardized JSON communication and error handling wrappers.",
        "Executed comprehensive API validation testing using Postman collections.",
      ],
    },
  ] as Project[],

  experience: [
    {
      role: "Software Engineer - Intern",
      company: "EXIENT",
      location: "Madhapur, Hyderabad, India",
      period: "Nov 2025 – Feb 2026",
      type: "Internship",
      description: "Developed geospatial web tools, backend REST APIs, and observability dashboards for system performance tracking.",
      bulletPoints: [
        "Designed and developed a Route Optimization Web Application using Python Flask, implementing shortest-path calculations via Google Directions API.",
        "Integrated Google Places Autocomplete API to enhance user experience with intelligent location suggestions and real-time route validation.",
        "Engineered geospatial processing logic to create a 1KM dynamic buffer zone around optimized routes, enabling advanced spatial monitoring capabilities.",
        "Extracted and processed travel duration & distance metrics from external APIs to provide real-time route performance insights.",
        "Architected a complete Student Management RESTful API with full CRUD operations, following REST design principles and JSON-based communication standards.",
        "Deployed and configured VictoriaMetrics on a Virtual Machine to collect and store API performance and route-related time-series data.",
        "Integrated VictoriaMetrics with Grafana and developed interactive monitoring dashboards (Time-Series and Bar Charts) for real-time system observability.",
        "Performed comprehensive API validation and testing using Postman, ensuring reliability, response accuracy, and robust backend performance.",
      ],
      skillsUsed: ["Python", "Flask", "Google Maps API", "REST APIs", "VictoriaMetrics", "Grafana", "Postman", "MySQL"],
    },
  ] as ExperienceItem[],

  certifications: [
    {
      title: "Data Science Certification",
      issuer: "SETWIN",
      period: "2022 - 2023",
      description: "Intensive certification covering Data Analysis, Python Programming, Machine Learning algorithms, and Data Visualization tools.",
    },
  ],
};
