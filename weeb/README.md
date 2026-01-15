    ## 📂 Structure du Projet

weeb/
├── node_modules/       # Dépendances installées via npm
├── public/             # Fichiers statiques accessibles publiquement
└── src/                # Dossier source (code de l'application)
    ├── assets/         # Icônes et images (export Figma)
    │   ├── facebook.svg
    │   ├── instagram.svg
    │   ├── linkedin.svg
    │   ├── twitter.svg
    │   └── youtube.svg
    ├── Components/     # Blocs d'interface réutilisables
    │   ├── ContactForm.jsx
    │   ├── ContentSection.jsx
    │   ├── Footer.jsx
    │   ├── Header.jsx
    │   ├── Hero.jsx
    │   ├── LoginForm.jsx
    │   └── Logos.jsx
    ├── pages/          # Conteneurs de routes (pages complètes)
    │   ├── about.jsx
    │   ├── contact.jsx
    │   ├── home.jsx
    │   └── login.jsx
    ├── App.css         # Styles spécifiques aux composants
    ├── App.jsx         # Gestion des routes (React Router)
    ├── index.css       # Styles globaux et variables de couleurs
    └── main.jsx        # Point d'entrée React