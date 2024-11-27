const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/Valentin-Belloncle/portfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Valentin Belloncle',
  role: 'Développeur Frontend',
  description:
    'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
  resume: 'https://cvdesignr.com/p/65134fbaaf584',
  social: {
    linkedin: 'https://linkedin.com/valentin-belloncle/',
    github: 'https://github.com/Valentin-Belloncle',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "Projet 1 : Booki",
    description:
      "Page d'accueil d'une agence de voyage qui permet aux usagers de trouver des hébergements et des activités dans la ville de leur choix.",
    difficulty:
      "Difficulté majeure : Mise en page des éléments les uns avec les autres",
    solution:
      "Solution : Utilisation du guide 'Flexbox' sur css-trick.com",
    stack: ['HTML', 'CSS'],
    sourceCode: 'https://github.com/Valentin-Belloncle/Booki',
    livePreview: 'https://github.com/Valentin-Belloncle/Booki',
  },
  {
    name: "Projet 2 : Sophie Bluel",
    description:
      "Développement du front du portfolio d’une architecte d’intérieur permettant une connexion administrateur et l'ajout de photos par requête API.",
    difficulty:
      "Difficulté majeure : Création des requètes API (Bearer Token)",
    solution:
      "Solution : Utilisation de l'application Postman",
    stack: ['HTML', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/Valentin-Belloncle/Projet-3-Sophie-Bluel',
    livePreview: 'https://github.com',
  },
  {
    name: 'Projet 3 : Nina Carducci',
    description:
      "Correction de bugs et optimisation du référencement (SEO) d'un site de vente de service photographique.",
     difficulty:
      "Difficulté majeure : Utilisation de balises meta pour le référencement local",
    solution:
      "Solution : Guide et exemples sur les microdonnées de Schema.org ",
    stack: ['HTML', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/Valentin-Belloncle/Nina-Carducci-Dev',
    livePreview: 'https://github.com',
  },
  {
    name: 'Projet 4 : Kasa',
    description:
      "Développement du front d'une application monopage de location d'appartement de particuliers à particuliers.",
    difficulty:
      "Difficulté majeure : Utilisation des modules scss et des classes déclarées",
    solution:
      "Solution : Recherche dans la documentation de l'outil Create React Application",
    stack: ['SASS', 'JavaScript', 'React'],
    sourceCode: 'https://github.com/Valentin-Belloncle/Kasa',
    livePreview: 'https://github.com',
  },
  {
    name: 'Projet 5 : Mon Vieux Grimoire',
    description:
      "Développement de la partie back via API Rest et base de donnée noSQL d'un site de référencement et de notation de livres.",
    difficulty:
      "Difficulté majeure : Requêtes en base de donnée avec conditions",
    solution:
      "Solution : Recherche dans la documentation de l'ORM Mongoose des formats de requête",
    stack: ['JavaScript', 'Node.js + Express', 'MongoDB'],
    sourceCode: 'https://github.com/Valentin-Belloncle/Mon-Vieux-Grimoire-back',
    livePreview: 'https://github.com',
  },
  {
    name: 'Projet 6 : Menu Maker',
    description:
      "Création des spécifications techniques d'une application permettant de créer des menus.",
    difficulty:
      "Difficulté majeure : Créations de solutions techniques permettant de répondre aux besoins fonctionnels",
    solution:
      "Solution : Recherche dans des articles présent dans mon système de veille",
    stack: ['Trello', 'UML'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'SASS',
  'Git',
  ]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'valentin.belloncle@hotmail.fr',
}

export { header, about, projects, skills, contact }
