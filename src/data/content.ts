import React from "react";
import { 
  Code2, 
  TerminalSquare, 
  Wrench, 
  Github, 
  Linkedin, 
  Mail 
} from "lucide-react";

export const PROJECTS = [
  {
    badge: "SMART INDIA HACKATHON 2025",
    title: "Jan Samadhan",
    subtitle: "Government of Jharkhand — Grievance Redressal System",
    features: [
      "Automated grievance routing using custom AI models for 40% faster resolution",
      "Real-time geo-tracking for district-level administrators",
      "Unified administrative dashboard managing 24+ districts"
    ],
    tech: ["Kotlin", "Jetpack Compose", "Firebase", "Node.js"],
    mockupType: "browser",
    github: "https://github.com/lakshyajais29",
    link: "https://github.com/lakshyajais29"
  },
  {
    badge: "HACKATHON WINNER 🏆",
    title: "AyurScan",
    subtitle: "AI skin analysis meets 5000 years of Ayurveda",
    features: [
      "Gemini Vision API for instant skin condition detection with severity scoring",
      "Personalized Ayurvedic remedy recommendations based on AI diagnosis",
      "Doctor chat interface + nearby hospital finder with CoreLocation"
    ],
    tech: ["SwiftUI", "Gemini AI", "CoreLocation", "MVVM"],
    mockupType: "phone",
    github: "https://github.com/lakshyajais29"
  },
  {
    badge: "AI + ML POWERED",
    title: "AI Organization Butler",
    subtitle: "Your AI-powered room cleaning assistant",
    features: [
      "Real-time object detection via Roboflow ML API for clutter identification",
      "Intelligent messiness scoring algorithm with personalized cleanup strategies",
      "Gamification with streak tracking, achievements & task management"
    ],
    tech: ["Flutter", "Dart", "Roboflow ML", "Provider"],
    mockupType: "phone",
    github: "https://github.com/lakshyajais29"
  },
  {
    badge: "COLLEGE PROJECT",
    title: "Expense Tracker",
    subtitle: "Splitwise for college friends — Kharche pai Charcha",
    features: [
      "4 smart split types: Equal, Exact, Percentage & Shares-based",
      "Graph-based debt simplification for minimum transactions",
      "Real-time sync with Firebase + Google Auth"
    ],
    tech: ["Flutter", "Firebase", "Provider", "Google Auth"],
    mockupType: "phone",
    github: "https://github.com/lakshyajais29/Expense-Tracker"
  },
  {
    badge: "COMMUNITY DRIVEN",
    title: "FindMyStuff",
    subtitle: "Lost something? The community helps you find it.",
    features: [
      "Modern reactive UI built with Jetpack Compose",
      "Secure Firebase Auth + Cloud Firestore for real-time listings",
      "Cloudinary-powered optimized image storage"
    ],
    tech: ["Jetpack Compose", "Firebase", "Cloudinary", "Kotlin"],
    mockupType: "phone",
    github: "https://github.com/lakshyajais29"
  }
];

export const SKILLS = [
  {
    category: "Languages",
    icon: React.createElement(Code2, { className: "text-[#00f0b5] w-6 h-6 mb-4" }),
    items: ["C/C++", "Python", "Java", "Kotlin", "Dart"]
  },
  {
    category: "Frameworks",
    icon: React.createElement(TerminalSquare, { className: "text-[#00f0b5] w-6 h-6 mb-4" }),
    items: ["Flutter", "Jetpack Compose", "Spring Boot", "Android SDK", "Provider"]
  },
  {
    category: "Tools & DevOps",
    icon: React.createElement(Wrench, { className: "text-[#00f0b5] w-6 h-6 mb-4" }),
    items: ["Android Studio", "VS Code", "Firebase", "Git", "Docker", "PostgreSQL"]
  }
];

export const SOCIALS = [
  { icon: React.createElement(Github, { size: 24 }), link: "https://github.com/lakshyajais29" },
  { icon: React.createElement(Linkedin, { size: 24 }), link: "https://www.linkedin.com/in/lakshya-jaiswal-b0245a287" },
  { icon: React.createElement(Code2, { size: 24 }), link: "https://leetcode.com/u/lakshya_2229" },
  { icon: React.createElement(Mail, { size: 24 }), link: "mailto:lakshyajaiswal2929@gmail.com" }
];
