const header = {
  homepage: 'https://github.com/Valentin-Belloncle/portfolio',
  title: 'JS.',
}

const about = {
  name: 'Valentin Belloncle',
  role: 'Développeur Frontend',
  description:
    "Ancien professeur en reconversion, je suis passionné par le développement web, un domaine qui allie créativité et logique. Ma formation sur OpenClassrooms m’a permis d’acquérir les compétences nécessaires pour concevoir des projets modernes et accessibles. Autonome, curieux et motivé par les défis, j’aime explorer de nouvelles technologies et améliorer continuellement mes compétences pour proposer des solutions performantes et adaptées aux besoins.",
  resume: 'https://cvdesignr.com/p/65134fbaaf584',
  social: {
    linkedin: 'https://linkedin.com/in/valentin-belloncle',
    github: 'https://github.com/Valentin-Belloncle',
  },
}

const projects = [
  {
    id: 1,
    name: 'Projet 1 : Booki',
    date: 'Mars 2024',
    role: 'Développeur Front-End',
    description:
      "Page d'accueil d'une agence de voyage qui permet aux usagers de trouver des hébergements et des activités dans la ville de leur choix.",
    objective: [
      'Implémenter une interface responsive avec HTML et CSS',
      'Intégrer du contenu conformément à une maquette avec HTML et CSS',
      'Versionner son projet avec Git et Github',
      'Installer un environnement de développement front-end',
    ],
    difficulty: 'Mise en page des éléments les uns avec les autres',
    solution: "Utilisation du guide 'Flexbox' sur css-trick.com",
    stack: ['HTML', 'CSS'],
    sourceCode: 'https://github.com/Valentin-Belloncle/Booki',
    livePreview: 'https://github.com/Valentin-Belloncle/Booki',
  },
  {
    id: 2,
    name: 'Projet 2 : Sophie Bluel',
    date: 'Mai 2024',
    role: 'Développeur Front-End',
    description:
      "Développement du front du portfolio d’une architecte d’intérieur permettant une connexion administrateur et l'ajout de photos par requête API.",
    objective: [
      'Gérer les événements utilisateurs avec JavaScript',
      'Manipuler les éléments du DOM avec JavaScript',
      'Récupérer les données utilisateurs dans le JavaScript via des formulaires',
    ],
    difficulty: 'Création des requètes API (Bearer Token)',
    solution: "Utilisation de l'application Postman",
    stack: ['HTML', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/Valentin-Belloncle/Projet-3-Sophie-Bluel',
    livePreview: 'https://github.com',
  },
  {
    id: 3,
    name: 'Projet 3 : Nina Carducci',
    date: 'Juillet 2024',
    role: 'Développeur Front-End / Consultant SEO',
    description:
      "Correction de bugs et optimisation du référencement (SEO) d'un site de vente de service photographique.",
    objective: [
      'Optimiser les performances d’un site web',
      'Débugger un site web grâce aux Chrome DevTools',
      'Rédiger un cahier de recette pour tester un site',
    ],
    difficulty: 'Utilisation de balises meta pour le référencement local',
    solution: 'Guide et exemples sur les microdonnées de Schema.org ',
    stack: ['HTML', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/Valentin-Belloncle/Nina-Carducci-Dev',
    livePreview: 'https://github.com',
  },
  {
    id: 4,
    name: 'Projet 4 : Kasa',
    date: 'Août 2024',
    role: 'Développeur Front-End',
    description:
      "Développement du front d'une application monopage de location d'appartement de particuliers à particuliers.",
    objective: [
      'Initialiser une application avec Create React App',
      "Configurer la navigation entre les pages de l'application avec React Router",
      "Développer des éléments de l'interface d'un site web grâce à des composants React",
      'Mettre en œuvre des animations CSS',
      'Développer une interface web avec Sass',
    ],
    difficulty: 'Utilisation des modules scss et des classes déclarées',
    solution:
      "Recherche dans la documentation de l'outil Create React Application",
    stack: ['SASS', 'JavaScript', 'React'],
    sourceCode: 'https://github.com/Valentin-Belloncle/Kasa',
    livePreview: 'https://github.com',
  },
  {
    id: 5,
    name: 'Projet 5 : Mon Vieux Grimoire',
    date: 'Septembre 2024',
    role: 'Développeur Back-End',
    description:
      "Développement de la partie back via API Rest et base de donnée noSQL d'un site de référencement et de notation de livres.",
    objective: [
      'Implémenter un modèle logique de données conformément à la réglementation',
      'Mettre en œuvre des opérations CRUD de manière sécurisée',
      'Stocker des données de manière sécurisée',
    ],
    difficulty: 'Requêtes en base de donnée avec conditions',
    solution:
      "Recherche dans la documentation de l'ORM Mongoose des formats de requête",
    stack: ['JavaScript', 'Node.js + Express', 'MongoDB'],
    sourceCode: 'https://github.com/Valentin-Belloncle/Mon-Vieux-Grimoire-back',
    livePreview: 'https://github.com',
  },
]

const skills = [
  { skill: 'HTML', percent: '80%' },
  { skill: 'CSS', percent: '80%' },
  { skill: 'JavaScript', percent: '60%' },
  { skill: 'React', percent: '50%' },
  { skill: 'Git', percent: '50%' },
]

const contact = {
  email: 'valentin.belloncle@hotmail.fr',
}

export { header, about, projects, skills, contact }
