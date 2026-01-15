weeb/
├── node_modules/          # Dépendances installées via npm
├── public/                # Fichiers statiques accessibles publiquement
└── src/                   # Dossier source (code)
    ├── assets/            # Icônes 
    │   ├── facebook.svg
    │   ├── instagram.svg
    │   ├── linkedin.svg
    │   ├── twitter.svg
    │   └── youtube.svg
    ├── Components/        # Blocs d'interface réutilisables
    │   ├── ContactForm.jsx    # Logique et champs du formulaire de contact
    │   ├── ContentSection.jsx # Section générique (image/texte alternés)
    │   ├── Footer.jsx         # Pied de page avec colonnes et réseaux sociaux
    │   ├── Header.jsx         # Barre de navigation supérieure
    │   ├── Hero.jsx           # Section d'accueil (Titre et boutons)
    │   ├── LoginForm.jsx      # Logique et champs de connexion
    │   └── Logos.jsx          # Bandeau des partenaires
    ├── pages/             # Conteneurs de routes (pages complètes)
    │   ├── about.jsx          # Page "À propos"
    │   ├── contact.jsx        # Page de contact (appelle ContactForm)
    │   ├── home.jsx           # Page d'accueil (assemble Hero, Logos, etc.)
    │   └── login.jsx          # Page de login (appelle LoginForm)
    ├── App.css            # Styles globaux et variables de couleurs
    ├── App.jsx            # Gestion des routes (BrowserRouter, Routes)
    ├── index.css          # Styles spécifiques aux composants 
    ├── main.jsx           # Point d'entrée de l'application React
    └── ... (fichiers de config comme vite.config.js, .gitignore)