## 📂 Structure du Projet

```text
weeb/
├── node_modules/       # Dépendances npm
├── public/             # Fichiers statiques
└── src/                # Code source
    ├── assets/         # Icônes et images (export Figma)
    │   ├── facebook.svg
    │   ├── instagram.svg
    │   ├── linkedin.svg
    │   ├── twitter.svg
    │   └── youtube.svg
    ├── Components/     # Blocs réutilisables
    │   ├── ContactForm.jsx
    │   ├── ContentSection.jsx
    │   ├── Footer.jsx
    │   ├── Header.jsx
    │   ├── Hero.jsx
    │   ├── LoginForm.jsx
    │   └── Logos.jsx
    ├── pages/          # Vues complètes (Routes)
    │   ├── about.jsx
    │   ├── contact.jsx
    │   ├── home.jsx
    │   └── login.jsx
    ├── App.css         # Styles des composants
    ├── App.jsx         # Logique des routes
    ├── index.css       # Styles globaux
    └── main.jsx        # Point d'entrée React
\```