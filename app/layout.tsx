import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dasari Sathwika | Software Engineer & Data Scientist Portfolio",
  description: "Official developer portfolio of Dasari Sathwika - MCA Postgraduate specializing in Data Science, Python, Machine Learning, Flask REST APIs, and Cloud Observability. Explore projects, experience at EXIENT, and technical skills.",
  keywords: [
    "Dasari Sathwika",
    "Developer Portfolio",
    "Software Engineer",
    "Data Scientist",
    "Python Developer",
    "Flask REST API",
    "Machine Learning",
    "OpenCV",
    "TensorFlow",
    "Hyderabad Software Engineer",
    "Vercel Deployment"
  ],
  authors: [{ name: "Dasari Sathwika" }],
  openGraph: {
    title: "Dasari Sathwika | Software Engineer & Data Scientist Portfolio",
    description: "Full-stack spatial web apps, Machine Learning models, and RESTful API architecture built by Dasari Sathwika.",
    url: "https://dasari-sathwika-portfolio.vercel.app",
    siteName: "Dasari Sathwika Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dasari Sathwika | Software Engineer & Data Scientist",
    description: "Official developer portfolio of Dasari Sathwika built with Next.js & Tailwind CSS.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-cyan-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
