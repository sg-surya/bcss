# Bhavna Institute

![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6.2-purple?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38B2AC?style=for-the-badge&logo=tailwind-css)

A modern web application for Bhavna Institute built with React, Vite, and Tailwind CSS. The platform is designed to provide a fast, responsive, and intuitive user experience.

---

## 🚀 Features

- **Modern UI:** Built with Tailwind CSS for a fully responsive and clean design.
- **Fast Development:** Powered by Vite for lightning-fast HMR and optimized builds.
- **Type Safety:** Written in TypeScript to ensure code reliability and maintainability.
- **Animations:** Smooth transitions and interactions using Framer Motion.

---

## 💻 Tech Stack

- **Frontend Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Animations:** Framer Motion
- **Icons:** Lucide React

---

## 🛠️ Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` (comes with Node.js) or `yarn`

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd bcss
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Setup:**
   Copy the example environment file and configure your variables:
   ```bash
   cp .env.example .env.local
   ```
   *Note: Open `.env.local` and add your specific configuration (e.g., API keys) before running the app.*

4. **Start the development server:**
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:3000`.

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. |
| `npm run build` | Builds the app for production to the `dist` folder. |
| `npm run preview` | Locally preview the production build before deployment. |
| `npm run lint` | Runs TypeScript compiler checks to ensure code quality. |

---

## 📁 Project Structure

```text
├── src/                # Application source code
│   ├── components/     # Reusable UI components
│   ├── assets/         # Static assets (images, icons)
│   ├── main.tsx        # Application entry point
│   └── ...
├── public/             # Public assets
├── .env.example        # Environment variables template
├── package.json        # Project metadata and dependencies
├── tailwind.config.js  # Tailwind CSS configuration
└── vite.config.ts      # Vite bundler configuration
```

---

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
