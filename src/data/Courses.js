const courses = [
  {
    id: 1,
    image: "banner-management.jpg",
    bannerImg: "course-banner2.jpg",
    name: "Management",
    author: "CO2 FORMATION",
    authorImg: "author.png",
    lesson: "5",
    enrolled: "56",
    price: "2 500 €",
    duration: "30H",
    type: "Management",
    language: null,
    review: null,
    title: "Intégrer le management d’équipe dans son activité professionnelle",
    about: `
<div class="tab-pane">
  <h3>ORGANISATION DE LA FORMATION</h3>
  <h4>Modalités pédagogiques et techniques :</h4>
  <ul>
    <li>Introduction des apprenants via Google Meet</li>
    <li>Partage et projection des documents durant la réunion</li>
    <li>Analyse de cas pratiques</li>
    <li>Exercices et quizz</li>
  </ul>
  
  <h4>Suivi de la mise en œuvre et méthode d’évaluation pour mesurer l’atteinte des objectifs :</h4>
  <ul>
    <li>Fiche de suivi</li>
    <li>Auto-évaluation</li>
    <li>Émargement en ligne sur Edusign</li>
    <li>Formulaire d’évaluation de formation</li>
  </ul>
  
  <h4>Concrétisation à la fin de la formation :</h4>
  <ul>
    <li>Un certificat attestant de la réalisation de la formation est fourni à la fin de l’action de formation.</li>
    <li>Toutes les informations liées au passage de la certification vous seront envoyées.</li>
    <li>Le passage de l’examen est compris dans le coût de la formation, et il est obligatoire de le passer à la fin de formation (cf. Article 8 de MonCompteFormation).</li>
  </ul>
  
  <h4>Contact :</h4>
  <p>Marion Frade - marion.frade01@gmail.com</p>
  
  <h4>Modalités d’accès tarifaire :</h4>
  <p>2500 € possible via un financement CPF (Mon compte formation), par l’OPCO ou abondement employeur, ou financement propre. CO2 FORMATION</p>
  
  <h4>Modalités d’évaluation :</h4>
  <p>
    Avant le début de la formation, un questionnaire de pré-formation sera remis aux participants. Le formateur utilisera les résultats pour évaluer les connaissances et compétences de chacun et ajustera ses méthodes pédagogiques en conséquence.
    À la fin de la formation, une évaluation sommative sera réalisée pour vérifier l'atteinte des objectifs. De plus, une évaluation de satisfaction immédiate (à chaud) sera effectuée, suivie d'une évaluation différée (à froid) deux mois plus tard pour recueillir des retours sur la formation et l'application des acquis en milieu professionnel.
  </p>
  
  <h4>Modalités de certification :</h4>
  <p>
    Une évaluation certificative sera réalisée pour valider la certification. Cette évaluation s'effectue à travers une préparation écrite et de 2 mises en situation professionnelle. Cette évaluation se déroule en visioconférence en direct, en une seule séance, avec 2 professionnels :
  </p>
  <ul>
    <li>Un représentant de l’organisme certificateur MANITUDE</li>
    <li>Un professionnel extérieur à MANITUDE dont la qualité est en lien avec la certification visée, en tant que Président du jury</li>
  </ul>
  <p>Soit 50% de personnes extérieures à l’organisme certificateur.</p>
  <p>
    La formation prépare à la certification détenue par Manitude, enregistrée le 09/02/2024 sous le numéro RS6516 au Répertoire Spécifique de France Compétences. La date d’échéance de la certification est le 09/02/2025.
  </p>
  
  <h4>Accessibilité des personnes en situation de handicap :</h4>
  <p>
    N'hésitez pas à nous signaler tout besoin d'accessibilité particulier d'un participant.
    Nous sommes prêts à personnaliser la formation ou à fournir des alternatives en fonction des besoins spécifiques. Nous proposons des rendez-vous à distance, et en cas de besoins particuliers liés à un handicap, la formation peut être adaptée en conséquence. CO2 FORMATION
  </p>
  
  <h4>Points forts et avantages de la formation :</h4>
  <ul>
    <li>Optimisez votre leadership : Développez des compétences de leadership pour inspirer et motiver vos équipes.</li>
    <li>Améliorez la communication interne : Apprenez à communiquer efficacement avec votre équipe pour favoriser la collaboration et la productivité.</li>
    <li>Prenez des décisions stratégiques : Maîtrisez l'art de la prise de décision pour guider votre équipe vers le succès.</li>
    <li>Gérez les conflits avec aisance : Acquérez des techniques pour résoudre les conflits et maintenir un environnement de travail harmonieux.</li>
  </ul>
  
  <p>
    Notre équipe pédagogique inclut un formateur de management qualifié - Mme Marion Frade - apportant une vaste expérience et une approche attentive à l'apprentissage. Elle vous accompagnera avec enthousiasme dans votre projet de formation et le développement de votre carrière professionnelle.
  </p>
</div>
`, module: `
<div class="tab-pane">
  <div class="single-week">
    <ul class="week__top">
      <li>JOUR 1 : Définition d'Objectifs et Gestion de la Performance en Accord avec la Stratégie d'Entreprise (3.5h)</li>
    </ul>
    <h3>Contenu :</h3>
    <ul class="course__title">
      <li>Alignement des objectifs individuels et collectifs avec la stratégie d'entreprise.</li>
      <li>Méthodes et outils de suivi de la performance et d'évaluation des résultats.</li>
      <li>Techniques de communication et de motivation pour l'atteinte des objectifs.</li>
    </ul>
  </div>

  <div class="single-week">
    <ul class="week__top">
      <li>JOUR 2 : Gestion de l'organisation et de la délégation des tâches en milieu professionnel inclusif (3.5h)</li>
    </ul>
    <h3>Contenu :</h3>
    <ul class="course__title">
      <li>Évaluation des compétences et des besoins individuels pour une délégation efficace et équitable.</li>
      <li>Promotion de la diversité et de l'inclusion au sein de l'équipe dans la répartition des responsabilités.</li>
      <li>Formation sur l'adaptation des processus de travail pour accueillir et soutenir les collaborateurs en situation de handicap.</li>
    </ul>
  </div>

  <div class="single-week">
    <ul class="week__top">
      <li>JOUR 3 : Conduite des entretiens de suivi de performance et feedback constructif (3.5h)</li>
    </ul>
    <h3>Contenu :</h3>
    <ul class="course__title">
      <li>Évaluation des compétences et des profils pour une délégation efficace.</li>
      <li>Stratégies d'inclusion et d'adaptation pour les collaborateurs en situation de handicap.</li>
      <li>Techniques de planification et de répartition des tâches en équipe.</li>
    </ul>
  </div>

  <div class="single-week">
    <ul class="week__top">
      <li>JOUR 4 : Planification et animation de réunions d'équipe pour favoriser la cohésion et l'engagement (3.5h)</li>
    </ul>
    <h3>Contenu :</h3>
    <ul class="course__title">
      <li>Techniques de préparation et de structuration des réunions efficaces.</li>
      <li>Méthodes d'animation participative pour encourager l'implication active des collaborateurs.</li>
      <li>Stratégies de suivi post-réunion pour renforcer la cohésion et l'engagement de l'équipe.</li>
    </ul>
  </div>

  <div class="single-week">
    <ul class="week__top">
      <li>JOUR 5 : Communication efficace des décisions de l'entreprise pour maintenir la motivation et l'engagement (3.5h)</li>
    </ul>
    <h3>Contenu :</h3>
    <ul class="course__title">
      <li>Étapes clés pour annoncer des décisions d'entreprise de manière transparente et constructive.</li>
      <li>Techniques de communication empathique pour gérer les réactions des collaborateurs.</li>
      <li>Stratégies de maintien de la motivation et de l'engagement après l'annonce de décisions difficiles.</li>
    </ul>
  </div>

  <div class="single-week">
    <ul class="week__top">
      <li>JOUR 6 : Gestion des situations managériales difficiles et communication adaptée pour assurer la cohésion d'équipe (3.5h)</li>
    </ul>
    <h3>Contenu :</h3>
    <ul class="course__title">
      <li>Identification et résolution de conflits interpersonnels au sein de l'équipe.</li>
      <li>Communication de mauvaises nouvelles et gestion des réactions émotionnelles.</li>
      <li>Stratégies pour maintenir la cohésion et la confiance de l'équipe en période de crise ou de changement.</li>
    </ul>
  </div>

  <div class="single-week">
    <ul class="week__top">
      <li>JOUR 7 : Communication stratégique pour managers : Mobiliser les équipes autour d'une vision de performance (4h)</li>
    </ul>
    <h3>Contenu :</h3>
    <ul class="course__title">
      <li>Développement d'une vision stratégique claire et inspirante pour l'équipe.</li>
      <li>Techniques de communication persuasive pour susciter l'adhésion et l'engagement des collaborateurs.</li>
      <li>Utilisation des canaux de communication appropriés pour diffuser la vision et les objectifs de performance de manière efficace et motivante.</li>
    </ul>
  </div>
</div>
`},
  {
    id: 2,
    image: "wordpress.webp",
    bannerImg: "course-banner1.jpg",
    name: "Digitale",
    author: "CO2 FORMATION",
    authorImg: "author.png",
    language: "Langue française",
    enrolled: "77",
    price: "700 €",
    duration: "7H",
    type: "Digitale",
    title: "Formation WordPress",
    about: `
    <div class="tab-pane">
  <h3>Cette formation est pour qui ?</h3>
  <ul>
    <li>Débutants souhaitant créer un site web personnel ou professionnel</li>
    <li>Toute personne souhaitant comprendre les bases de WordPress</li>
  </ul><br/>
  
  <h3>Objectif de la formation :</h3>
  <ul>
    <li>Comprendre les bases de WordPress et son fonctionnement</li>
    <li>Savoir installer et configurer WordPress</li>
    <li>Être capable de créer des pages et des articles simples</li>
    <li>Apprendre à personnaliser un site avec des thèmes et des plugins</li>
  </ul><br/>
  
  <h3>Moyen pédagogique :</h3>
  <ul>
    <li>Vidéoconférence pour les explications théoriques et les démonstrations</li>
    <li>Assistance en ligne pour les questions techniques</li>
  </ul>
  <br/>
  
  <h3>Modalité d’accès :</h3>
  <ul>
    <li>Un entretien pour évaluer les besoins spécifiques des participants</li>
    <li>La formation est accessible aux personnes en situation de handicap. Des aménagements spécifiques peuvent être proposés en fonction des besoins individuels, en coordination avec notre référent handicap.</li>
  </ul>
  <br/>
  
  <h3>Évaluation :</h3>
  <ul>
    <li>Exercices pratiques</li>
    <li>Études de cas</li>
    <li>QCM à la fin de la formation</li>
    <li>Auto-évaluation à la fin de la formation</li>
  </ul>
</div>
    `,
    module: `<div class="tab-pane">
  <div class="single-week">
    <ul class="week__top">
      <li>Module 1 : Introduction à WordPress</li>
    </ul>
    <h3>Objectifs :</h3>
    <p>Comprendre le rôle et l'importance de WordPress<br />
      Découvrir l'interface utilisateur de WordPress
    </p>
    <h3>Contenu :</h3>
    <ul class="course__title">
      <li>Présentation de WordPress : Qu'est-ce que WordPress ?</li>
      <li>Différences entre WordPress.com et WordPress.org</li>
      <li>Tour d’horizon de l’interface utilisateur</li>
    </ul>
  </div>

  <div class="single-week">
    <ul class="week__top">
      <li>Module 2 : Installation et Configuration de WordPress</li>
    </ul>
    <h3>Objectifs :</h3>
    <p>Installer WordPress sur un serveur local ou en ligne<br />
      Configurer les réglages de base
    </p>
    <h3>Contenu :</h3>
    <ul class="course__title">
      <li>Installation de WordPress sur un serveur local (XAMPP/WAMP)</li>
      <li>Installation de WordPress via un hébergeur (cPanel)</li>
      <li>Configuration des réglages généraux, de lecture, d’écriture, et de permaliens</li>
    </ul>
    <h3>Activité Pratique :</h3>
    <p>Installation de WordPress sur un serveur local ou hébergeur</p>
  </div>

  <div class="single-week">
    <ul class="week__top">
      <li>Module 3 : Création de Contenu - Pages et Articles</li>
    </ul>
    <h3>Objectifs :</h3>
    <p>Créer et gérer des pages et des articles<br />
      Utiliser l’éditeur de blocs (Gutenberg)
    </p>
    <h3>Contenu :</h3>
    <ul class="course__title">
      <li>Différence entre pages et articles</li>
      <li>Utilisation de l’éditeur de blocs pour créer des contenus</li>
      <li>Ajout de médias (images, vidéos) dans les pages et articles</li>
    </ul>
    <h3>Activité Pratique :</h3>
    <p>Création d’une page « À propos » et d’un article de blog</p>
  </div>

  <div class="single-week">
    <ul class="week__top">
      <li>Module 4 : Personnalisation avec Thèmes</li>
    </ul>
    <h3>Objectifs :</h3>
    <p>Installer et personnaliser un thème WordPress</p>
    <h3>Contenu :</h3>
    <ul class="course__title">
      <li>Choix et installation de thèmes</li>
      <li>Personnalisation des options du thème via le personnalisateur</li>
      <li>Création de menus et gestion des widgets</li>
    </ul>
    <h3>Activité Pratique :</h3>
    <p>Personnalisation d’un thème et création d’un menu de navigation</p>
  </div>

  <div class="single-week">
    <ul class="week__top">
      <li>Module 5 : Introduction aux Plugins</li>
    </ul>
    <h3>Objectifs :</h3>
    <p>Installer et utiliser des plugins pour ajouter des fonctionnalités</p>
    <h3>Contenu :</h3>
    <ul class="course__title">
      <li>Qu’est-ce qu’un plugin ?</li>
      <li>Recherche, installation et activation de plugins</li>
      <li>Présentation de plugins essentiels (SEO, sécurité, formulaire de contact)</li>
    </ul>
    <h3>Activité Pratique :</h3>
    <p>Installation et configuration d’un plugin de formulaire de contact</p>
  </div>

  <div class="single-week">
    <ul class="week__top">
      <li>Module 6 : Questions/Réponses et Exercice de Synthèse</li>
    </ul>
    <h3>Objectifs :</h3>
    <p>Répondre aux questions des participants<br />
      Réaliser un exercice récapitulatif
    </p>
    <h3>Contenu :</h3>
    <ul class="course__title">
      <li>Séance de questions/réponses</li>
      <li>Exercice de synthèse : Création d’un site simple avec pages, articles, thème, et plugins</li>
    </ul>
    <h3>Activité Pratique :</h3>
    <p>Exercice final : Mise en ligne d’un site WordPress de base</p>
  </div>
</div>
`
  },
  {
    id: 3,
    image: "logo-Powerpoint.jpg",
    bannerImg: "course-banner3.jpg",
    name: "Bureautique",
    author: "CO2 FORMATION",
    authorImg: "author.png",
    price: "700 €",
    duration: "7H",
    type: "Digitale",
    language: "Langue française",
    title: "Formation PowerPoint",
    about: `
    <div class="tab-pane">
  <h3>Cette formation est pour qui ?</h3>
  <p>Cette formation s'adresse à toutes les personnes souhaitant maîtriser les bases de PowerPoint, 
  qu'il s'agisse de professionnels, d'étudiants ou de particuliers désireux de créer des 
  présentations claires, impactantes et bien structurées, même sans expérience préalable.</p><br/>
  
  <h3>Objectif de la formation :</h3>
  <ul>
    <li>Comprendre les fondamentaux de PowerPoint et son interface.</li>
    <li>Créer des présentations professionnelles structurées et impactantes.</li>
    <li>Maîtriser les outils de mise en page et de personnalisation des diapositives.</li>
    <li>Insérer et manipuler des éléments visuels : images, graphiques, formes, tableaux.</li>
    <li>Ajouter des animations et des transitions pour dynamiser les présentations.</li>
    <li>Optimiser la présentation pour une diffusion fluide et efficace.</li>
  </ul><br/>
  
  <h3>Moyen pédagogique :</h3>
  <ul>
    <li>Vidéoconférence pour les explications théoriques et les démonstrations</li>
    <li>Assistance en ligne pour les questions techniques</li>
  </ul><br/>
  
  <h3>Modalité d’accès :</h3>
  <ul>
    <li>Un entretien pour évaluer les besoins spécifiques des participants</li>
    <li>La formation est accessible aux personnes en situation de handicap. Des aménagements 
    spécifiques peuvent être proposés en fonction des besoins individuels, en 
    coordination avec notre référent handicap.</li>
  </ul><br/>
  
  <h3>Évaluation :</h3>
  <ul>
    <li>Exercices pratiques</li>
    <li>Études de cas</li>
    <li>QCM à la fin de la formation</li>
    <li>Auto-évaluation à la fin de la formation</li>
  </ul>
</div>
`,
    module: `
<div class="tab-pane">
  <div class="single-week">
    <ul class="week__top">
      <li>Module 1 : Découverte de l’interface et des bases essentielles</li>
    </ul>
    <h3>Objectifs :</h3>
    <p>Comprendre l’interface de PowerPoint et apprendre les bases pour démarrer une présentation.</p>
    <h3>Contenu :</h3>
    <ul class="course__title">
      <li>Exploration de l’interface et des onglets principaux.</li>
      <li>Création et sauvegarde d’une présentation.</li>
      <li>Structure de base : diapositives, zones de texte, et thèmes prédéfinis.</li>
    </ul>
  </div>

  <div class="single-week">
    <ul class="week__top">
      <li>Module 2 : Structurer une présentation efficace</li>
    </ul>
    <h3>Objectifs :</h3>
    <p>Apprendre à organiser et hiérarchiser les informations dans une présentation.</p>
    <h3>Contenu :</h3>
    <ul class="course__title">
      <li>Organisation des diapositives et utilisation du mode plan.</li>
      <li>Création et gestion de sections.</li>
      <li>Conseils pour une structure logique et impactante.</li>
    </ul>
  </div>

  <div class="single-week">
    <ul class="week__top">
      <li>Module 3 : Maîtrise des outils de mise en page</li>
    </ul>
    <h3>Objectifs :</h3>
    <p>Concevoir des diapositives esthétiques et bien équilibrées.</p>
    <h3>Contenu :</h3>
    <ul class="course__title">
      <li>Mise en forme du texte : polices, couleurs, alignements, et listes.</li>
      <li>Gestion des arrière-plans et des thèmes personnalisés.</li>
      <li>Utilisation des grilles et des repères pour un alignement parfait.</li>
    </ul>
  </div>

  <div class="single-week">
    <ul class="week__top">
      <li>Module 4 : Insertion et personnalisation des éléments visuels</li>
    </ul>
    <h3>Objectifs :</h3>
    <p>Intégrer des images, formes, tableaux, et graphiques pour enrichir les présentations.</p>
    <h3>Contenu :</h3>
    <ul class="course__title">
      <li>Insertion et retouche des images.</li>
      <li>Création et personnalisation des graphiques et des tableaux.</li>
      <li>Ajout et modification des formes (icônes, SmartArt).</li>
    </ul>
  </div>

  <div class="single-week">
    <ul class="week__top">
      <li>Module 5 : Dynamiser la présentation avec animations et transitions</li>
    </ul>
    <h3>Objectifs :</h3>
    <p>Donner vie aux diapositives grâce aux animations et transitions.</p>
    <h3>Contenu :</h3>
    <ul class="course__title">
      <li>Application des animations aux objets (texte, images, graphiques).</li>
      <li>Utilisation des transitions entre diapositives.</li>
      <li>Personnalisation des effets et chronologie.</li>
    </ul>
  </div>

  <div class="single-week">
    <ul class="week__top">
      <li>Module 6 : Finaliser et diffuser la présentation</li>
    </ul>
    <h3>Objectifs :</h3>
    <p>Préparer une présentation fluide et adaptée à différents supports.</p>
    <h3>Contenu :</h3>
    <ul class="course__title">
      <li>Options d’exportation : PDF, vidéo, ou diaporama autonome.</li>
      <li>Vérification et optimisation de la présentation.</li>
      <li>Techniques de présentation et conseils pratiques pour captiver son audience.</li>
    </ul>
    <h3>Activité pratique :</h3>
    <p>Activité pratique d’entraînement.</p>
  </div>
</div>
`
  },
  {
    id: 4,
    image: "banner-photoshop.webp",
    bannerImg: "course-banner3.jpg",
    name: "Bureautique",
    author: "CO2 FORMATION",
    authorImg: "author.png",
    price: "700 €",
    duration: "7H",
    language: "Langue française",
    type: "Digitale",
    title: "Formation Photoshop",
    about: `
    <div class="tab-pane">
  <h3>Cette formation est pour qui ?</h3>
  <p>
    Aux débutants souhaitant découvrir les bases de la retouche photo et de la création graphique.<br/>
    Aux entrepreneurs et créateurs de contenu qui souhaitent produire des visuels professionnels pour leurs projets ou réseaux sociaux.<br/>
    Aux étudiants et professionnels désirant enrichir leurs compétences en graphisme.
  </p><br/>
  
  <h3>Objectif de la formation :</h3>
  <ul>
    <li>Retoucher et améliorer des images avec des outils simples.</li>
    <li>Découvrir les fondamentaux du photomontage et des calques.</li>
    <li>Créer des visuels attractifs et adaptés à divers supports (web et print).</li>
    <li>Gagner en autonomie dans l’utilisation des fonctionnalités essentielles du logiciel.</li>
    <li>Préparer efficacement leurs projets graphiques pour une utilisation professionnelle ou personnelle.</li>
  </ul><br/>
  
  <h3>Moyen pédagogique :</h3>
  <ul>
    <li>Vidéoconférence pour les explications théoriques et les démonstrations</li>
    <li>Assistance en ligne pour les questions techniques</li>
  </ul><br/>
  
  <h3>Modalité d’accès :</h3>
  <ul>
    <li>Un entretien pour évaluer les besoins spécifiques des participants</li>
    <li>La formation est accessible aux personnes en situation de handicap. Des aménagements spécifiques peuvent être proposés en fonction des besoins individuels, en coordination avec notre référent handicap.</li>
  </ul><br/>
  
  <h3>Évaluation :</h3>
  <ul>
    <li>Exercices pratiques</li>
    <li>Études de cas</li>
    <li>QCM à la fin de la formation</li>
    <li>Auto-évaluation à la fin de la formation</li>
  </ul>
</div>
`,
    module: `
<div class="tab-pane">
  <div class="single-week">
    <ul class="week__top">
      <li>Module 1 : Introduction à l’environnement Photoshop</li>
    </ul>
    <h3>Objectifs :</h3>
    <p>Prendre en main l’interface et comprendre les bases.</p>
    <h3>Contenu :</h3>
    <ul class="course__title">
      <li>Présentation de l’interface et des outils principaux.</li>
      <li>Gestion des fichiers : créer, ouvrir et enregistrer un document.</li>
      <li>Paramètres de résolution et formats d’export (JPEG, PNG, PSD).</li>
      <li>Navigation dans l’espace de travail (zoom, déplacements, raccourcis).</li>
    </ul>
  </div>

  <div class="single-week">
    <ul class="week__top">
      <li>Module 2 : Les outils de base pour la retouche d’image</li>
    </ul>
    <h3>Objectifs :</h3>
    <p>Découvrir et manipuler les outils fondamentaux.</p>
    <h3>Contenu :</h3>
    <ul class="course__title">
      <li>Utilisation des outils de recadrage, sélection et déplacement.</li>
      <li>Retouches simples : correction des couleurs, luminosité, contraste.</li>
      <li>Suppression des imperfections (tampon, correcteur, outil de suppression d’arrière-plan).</li>
      <li>Réglages rapides avec les calques d’ajustement.</li>
    </ul>
  </div>

  <div class="single-week">
    <ul class="week__top">
      <li>Module 3 : Les calques et leur gestion</li>
    </ul>
    <h3>Objectifs :</h3>
    <p>Comprendre le fonctionnement et l’importance des calques.</p>
    <h3>Contenu :</h3>
    <ul class="course__title">
      <li>Création, duplication, verrouillage et fusion de calques.</li>
      <li>Organisation des calques avec les groupes et les masques.</li>
      <li>Notions de transparence et modes de fusion.</li>
      <li>Création de compositions simples en combinant plusieurs calques.</li>
    </ul>
  </div>

  <div class="single-week">
    <ul class="week__top">
      <li>Module 4 : Les outils de création graphique</li>
    </ul>
    <h3>Objectifs :</h3>
    <p>Créer des éléments graphiques pour des visuels attrayants.</p>
    <h3>Contenu :</h3>
    <ul class="course__title">
      <li>Utilisation des formes vectorielles et des outils de dessin.</li>
      <li>Introduction au texte : ajout, personnalisation et mise en forme.</li>
      <li>Application d’effets simples (ombres portées, contours, dégradés).</li>
      <li>Introduction à l’utilisation des pinceaux et des motifs.</li>
    </ul>
  </div>

  <div class="single-week">
    <ul class="week__top">
      <li>Module 5 : Initiation au photomontage</li>
    </ul>
    <h3>Objectifs :</h3>
    <p>Apprendre à combiner plusieurs images pour un rendu harmonieux.</p>
    <h3>Contenu :</h3>
    <ul class="course__title">
      <li>Découpage et détourage précis avec les outils de sélection.</li>
      <li>Intégration et ajustement d’éléments dans une image.</li>
      <li>Techniques de superposition pour un photomontage cohérent.</li>
      <li>Utilisation des masques de fusion pour des transitions fluides.</li>
    </ul>
  </div>

  <div class="single-week">
    <ul class="week__top">
      <li>Module 6 : Exportation et préparation des fichiers</li>
    </ul>
    <h3>Objectifs :</h3>
    <p>Préparer des visuels adaptés à différents supports.</p>
    <h3>Contenu :</h3>
    <ul class="course__title">
      <li>Optimisation des fichiers pour le web (résolution, formats légers).</li>
      <li>Préparation des fichiers pour l’impression (CMJN, marges de sécurité).</li>
      <li>Exportation avec différents réglages et formats.</li>
      <li>Récapitulatif des outils vus et conseils pour une utilisation autonome de Photoshop.</li>
    </ul>
    <h3>Activité pratique :</h3>
    <p>Activité pratique d’entraînement.</p>
  </div>
</div>
`
  }
]


export default courses