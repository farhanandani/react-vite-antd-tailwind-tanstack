# React + TypeScript + Vite

Template React dengan Vite, Tailwind CSS, Ant Design, dan React Query. Includes boilerplate untuk Landing Page dan Login.

## Struktur Fitur

```
src/
├── context/          # React Context (AuthProvider)
├── lib/              # Utilities (request, auth helpers)
├── module/           # Feature modules
│   ├── Landing/      # Landing page dengan Hero, Features, CTA
│   ├── Login/        # Login page dengan form & validation
│   └── Example/      # Contoh halaman protected
├── routes/           # Routing & route guards (ProtectedRoute, GuestRoute)
└── service/          # API services (auth, example)
```

## Auth Flow

- **Landing** (`/`) — Halaman utama, akses publik
- **Login** (`/login`) — Form login, redirect ke `/home` jika sudah login
- **Home/Example** (`/home`, `/example`) — Halaman protected, redirect ke `/login` jika belum login

### Development tanpa Backend

Set `VITE_APP_USE_MOCK_AUTH=true` di `.env` untuk mock login (email + password minimal 8 karakter).

---

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
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
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

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
