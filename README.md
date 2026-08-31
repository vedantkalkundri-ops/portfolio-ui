<div align="center">

<img src="https://img.shields.io/badge/ANUSHA%20INAMDAR-SEO%20CONTENT%20WRITER-8B5CF6?style=for-the-badge&logoColor=white" alt="Anusha Inamdar Portfolio" />

# Anusha Inamdar Portfolio

**SEO Content Writer & Strategist — Personal Portfolio**

A modern, interactive, and high-performance portfolio built to showcase 610+ published articles, SEO expertise, professional experience, services, research tools, and published work across multiple industries.

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat-square\&logo=next.js\&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square\&logo=react\&logoColor=black)](https://react.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-Animations-0055FF?style=flat-square\&logo=framer\&logoColor=white)](https://www.framer.com/motion/)
[![Three.js](https://img.shields.io/badge/Three.js-3D-000000?style=flat-square\&logo=three.js\&logoColor=white)](https://threejs.org/)
[![CSS3](https://img.shields.io/badge/CSS3-Custom%20Design-1572B6?style=flat-square\&logo=css3\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Vercel](https://img.shields.io/badge/Deployment-Vercel-000000?style=flat-square\&logo=vercel\&logoColor=white)](https://vercel.com/)

[Overview](#overview) • [Screenshots](#screenshots) • [Features](#features) • [Architecture](#architecture) • [Tech Stack](#tech-stack) • [Getting Started](#getting-started) • [Project Structure](#project-structure) • [Deployment](#deployment)

</div>

---

## Overview

The **Anusha Inamdar Portfolio** is a modern personal branding website designed for **Anusha Inamdar**, an SEO Content Writer and Strategist.

The portfolio combines professional content presentation with interactive visual experiences to showcase her writing expertise, published work, professional experience, services, tools, and achievements.

The application focuses on creating a premium digital presence through **Next.js, React, Framer Motion, Three.js, HTML5 Canvas, and custom CSS animations**.

The live portfolio is deployed on Vercel.

**Live Website:**
https://anushainamdarportfolio.vercel.app/

---

## Screenshots

<table>
  <tr>
    <td align="center"><strong>Portfolio Landing Page</strong></td>
    <td align="center"><strong>Services</strong></td>
  </tr>
  <tr>
    <td><img src="./screenshots/anushaInamdarPortfolio.png" alt="Portfolio Home Page" width="100%"/></td>
    <td><img src="./screenshots/anushaInamdarp2.png" alt="Portfolio About Section" width="100%"/></td>
  </tr>
  <tr>
    <td align="center"><strong>Expertise</strong></td>

  </tr>
  <tr>
    <td><img src="./screenshots/anushaInamdarp3.png" alt="Services Section" width="100%"/></td>

  </tr>
</table>

---

## Features

### Modern Visual Design

The portfolio uses a custom visual system designed around a premium editorial and technology-inspired aesthetic.

* Interactive topographic background
* Dynamic particle effects
* Glassmorphism UI components
* Fluid typography
* Custom CSS animations
* Smooth section transitions
* Interactive 3D visual elements
* Animated introduction sequence

### Responsive Design

The website is designed to provide a consistent experience across different screen sizes.

* Mobile-first responsive layout
* Desktop and tablet optimization
* Adaptive typography
* Responsive navigation
* Mobile menu animations
* Flexible content layouts


## Architecture

```mermaid
flowchart TD

    User[Website Visitor] --> Next[Next.js Application]

    subgraph Frontend [Portfolio Frontend]
        Next --> Layout[Root Layout]
        Layout --> Page[Portfolio Page]

        Page --> Intro[Intro Animation]
        Page --> Hero[Hero Section]
        Page --> About[About Section]
        Page --> Services[Services Section]
        Page --> Experience[Experience Section]
        Page --> Projects[Published Work]
        Page --> Tools[Tools & Skills]
        Page --> Contact[Contact Section]

        Intro --> Motion[Framer Motion]
        Page --> Canvas[Canvas Visual Effects]
        Page --> Three[Three.js Components]
    end

    subgraph VisualSystem [Visual System]
        Canvas --> Topo[Topographic Background]
        Canvas --> Particles[Particle System]
        Motion --> Animations[UI Animations]
    end

    Contact --> External[Email / Phone]
    Projects --> Published[Published Articles]

    Next --> Deployment[Vercel]
```

---

## Application Flow

```text
User
  |
  v
Portfolio Landing Page
  |
  +----------------------+
  |                      |
  v                      v
Visual Experience     Content Sections
  |                      |
  |                      +--> About
  |                      +--> Services
  |                      +--> Experience
  |                      +--> Published Work
  |                      +--> Tools
  |                      +--> Contact
  |
  +--> Topographic Canvas
  +--> Particle Effects
  +--> Intro Animation
  |
  v
Client Interaction
  |
  +--> Published Articles
  +--> Email
  +--> Phone
```

---

## Tech Stack

### Framework

**[Next.js 16](https://nextjs.org/)**

Used as the primary application framework with the App Router architecture.

Responsibilities include:

* Application routing
* Page rendering
* Metadata
* Component architecture
* Production optimization

### Frontend

**[React 19](https://react.dev/)**

Used to build reusable and interactive UI components throughout the portfolio.

### Animation

**[Framer Motion](https://www.framer.com/motion/)**

Used for:

* Page transitions
* Component animations
* Scroll-based effects
* Menu transitions
* Interactive UI elements
* Intro animations

### Visual Effects

**[Three.js](https://threejs.org/)**

Used for interactive 3D visual components including the AI orb and other visual effects.

**HTML5 Canvas**

Used for:

* Topographic background
* Particle effects
* Interactive background elements

### Styling

**Vanilla CSS3**

The application uses a custom CSS design system with:

* CSS variables
* Responsive layouts
* Fluid typography
* Keyframe animations
* Glassmorphism
* Custom visual effects

### Theme Management

**[next-themes](https://github.com/pacocoursey/next-themes)**

Used for theme management and interface appearance control.

---

## Design System

The portfolio's visual identity is built around several major design principles.

| Component          | Purpose                               |
| ------------------ | ------------------------------------- |
| Topographic Canvas | Dynamic background visual             |
| Particle System    | Adds depth and motion                 |
| Glassmorphism      | Modern UI surface treatment           |          |
| Fluid Typography   | Responsive editorial presentation     |
| Motion System      | Smooth page and component transitions |
| CSS Variables      | Centralized design control            |

The combination of these systems creates a visual style that blends **editorial portfolio design with modern interactive web experiences**.

---

## Project Structure

```text
portfolio-ui/
│
├── app/
│   │
│   ├── components/
│   │   ├── IntroAnimation.js
│   │   ├── Topobackground.js
│   │   ├── Particles.js
│   │   ├── EduSlideshow.js
│   │
│   ├── globals.css
│   ├── layout.js
│   └── page.js
│
├── public/
│   ├── images/
│   ├── logos/
│   ├── icons/
│   └── other static assets
│
├── screenshots/
│   ├── home.png
│   ├── about.png
│   ├── services.png
│   └── projects.png
│
├── package.json
├── package-lock.json
├── next.config.js
├── .gitignore
└── README.md
```

## Deployment

The portfolio is deployed using **[Vercel](https://vercel.com/)**.


### Live Portfolio

**https://anushainamdarportfolio.vercel.app/**

---

## Performance

The application is designed with performance and modern web standards in mind.

Key considerations include:

* Next.js production optimization
* Component-based React architecture
* Optimized static assets
* Responsive CSS
* Client-side animation management
* Efficient Canvas rendering
* Production deployment through Vercel

---

## Security

This portfolio is primarily a client-side presentation website and does not require a traditional backend database.

Recommended practices for future development include:

* Avoid exposing API keys in client-side code
* Store environment variables securely
* Validate external links
* Optimize and sanitize user-provided contact inputs if a backend is introduced
* Keep dependencies updated
* Avoid storing sensitive personal information in frontend source code

---


<div align="center">

**Made with ❤️ for a client.**

</div>
