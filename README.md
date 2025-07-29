<!-- @format -->

# React + TypeScript + Vite

<!-- @format -->

## 📝 Note

> This project was developed as part of the **Lendsqr frontend engineering assessment**. While the core functionalities have been implemented, there are areas that can be further optimized and improved for production-readiness. Given the time constraints and scope of the test, the implementation focuses on delivering a working and maintainable solution within the provided requirements.

# 🚀 Lendsqr Frontend Engineering Assessment

This is a solution to the **Lendsqr Frontend Engineering Test**, built with **React**, **TypeScript**, **SCSS**, and **Vite**. The app replicates a simplified user management dashboard, including authentication and detailed user views.

---

## 🔗 Live Demo

👉 [Live App on Vercel](https://lendsqr-fe-test-beta-woad.vercel.app)

📁 [GitHub Repository](https://github.com/Stephenadebayoy/lendsqr-fe-test)

---

## 📸 Preview

---

## 📦 Tech Stack

- **React** + **Vite**
- **TypeScript**
- **SCSS** (Mobile-first and modular)
- **React Router** (Routing)
- **Lucide React Icons**
- **LocalStorage** (Authentication persistence)
- **Jest + React Testing Library** (for unit tests)

---

## 🧠 Features

- 🔐 **Login Page**
- 📋 **User Listing** with filtering and pagination
- 👤 **User Details Page**
- 📊 **Dashboard Overview** with summary cards and dummy metrics
- 💡 Fully **responsive design** across desktop and mobile
- 🗂️ **Clean folder structure** using the Presentation-Container Pattern

---

## 📁 Folder Structure

````plaintext
src/
│
├── components/       # Reusable presentational components
├── container/       # Pages and container logic
├── routes/           # All application routes
├── services/         # Mock API functions
├── types/            # TypeScript interfaces
├── styles/           # Global + component SCSS
├── assets/           # Images, icons, etc.
└── App.tsx


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
````

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
