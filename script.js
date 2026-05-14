const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const modal = document.getElementById('project-modal');
const modalClose = document.querySelector('.modal-close');
const modalKicker = document.getElementById('modal-kicker');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalTags = document.getElementById('modal-tags');
const modalImage = document.getElementById('modal-image');
const modalPrev = document.getElementById('modal-prev');
const modalNext = document.getElementById('modal-next');
const langButtons = document.querySelectorAll('.lang-btn');
const languageSwitcher = document.querySelector('.language-switch');
const STORAGE_KEY = 'portfolio_language';
const DEFAULT_LANGUAGE = 'fr';

let currentLanguage = DEFAULT_LANGUAGE;

const projectCases = {
    'health-app': {
        kicker: {
            fr: 'Santé - Application web',
            en: 'Health - Web application',
        },
        title: {
            fr: 'Application de suivi de santé',
            en: 'Health tracking application',
        },
        description: {
            fr: "Une application web pensée pour mieux organiser le suivi des patients : inscription, tableaux de bord, listes et actions de gestion. Le projet montre ma capacité à construire des interfaces métier claires avec un back-end structuré.",
            en: 'A web application designed to better organize patient tracking: registration, dashboards, lists, and management actions. The project shows my ability to build clear business interfaces with a structured back end.',
        },
        tags: ['PHP', 'Laravel', 'Bootstrap', 'JavaScript'],
        images: ['page-inscription.png', 'dashboard.png', 'dashboard-menu.png', 'ajout-patient.png', 'liste-patients.png'],
    },
    'market-app': {
        kicker: {
            fr: 'Commerce local - Plateforme web',
            en: 'Local commerce - Web platform',
        },
        title: {
            fr: 'Marché artisanal',
            en: 'Artisan market',
        },
        description: {
            fr: "Une plateforme de commerce solidaire pour donner plus de visibilité aux artisans locaux. Elle facilite la présentation des produits, la navigation dans le catalogue et le contact client via WhatsApp ou email.",
            en: 'A fair-trade commerce platform built to give local artisans more visibility. It makes product presentation, catalog browsing, and customer contact via WhatsApp or email easier.',
        },
        tags: ['React', 'Node.js', 'Express', 'Catalogue', 'WhatsApp'],
        images: [
            'marché_artisanal_accueil.png',
            'marché_artisanal_catalogue.png',
            'marché_artisanal_collier.png',
            'marché_artisanal_register.png',
            'marché_artisanal_footer.png',
        ],
    },
    taskflow: {
        kicker: {
            fr: 'Productivité - Dashboard et API',
            en: 'Productivity - Dashboard and API',
        },
        title: {
            fr: 'TaskFlow',
            en: 'TaskFlow',
        },
        description: {
            fr: "Une solution de gestion de projets avec rôles, permissions, membres, tâches, commentaires et notifications. L'objectif est de centraliser le suivi et de rendre les responsabilités plus visibles dans une équipe.",
            en: 'A project management solution with roles, permissions, members, tasks, comments, and notifications. The goal is to centralize tracking and make responsibilities more visible within a team.',
        },
        tags: ['Angular', 'NestJS', 'MySQL', 'Prisma', 'JWT', 'Socket.io'],
        images: [
            'taskflow-dashboard.png',
            'taskflow-page_de_connexion.png',
            'taskflow-projets.png',
            'taskflow-gestion_des_tâches.png',
            'taskflow-utilisateurs.png',
            'taskflow-notifications.png',
            'taskflow-commentaire.png',
        ],
    },
    chatbot: {
        kicker: {
            fr: 'Support client - Assistant virtuel',
            en: 'Customer support - Virtual assistant',
        },
        title: {
            fr: 'Chatbot de discussion',
            en: 'Conversational chatbot',
        },
        description: {
            fr: "Un assistant conversationnel conçu pour répondre aux questions fréquentes à partir des informations d'une entreprise. Le projet illustre l'intégration d'un outil pratique pour améliorer la disponibilité du support.",
            en: 'A conversational assistant designed to answer common questions using company information. The project shows how a practical tool can improve support availability.',
        },
        tags: ['GPT-trainer', 'Assistant virtuel', 'Support client'],
        images: ['beni-dashboard.png', 'beni-interface.png', 'beni-question.png', 'beni-remerciement.png'],
    },
    'personal-growth': {
        kicker: {
            fr: 'Contenu - Plateforme web',
            en: 'Content - Web platform',
        },
        title: {
            fr: 'Plateforme de développement personnel',
            en: 'Personal growth platform',
        },
        description: {
            fr: "Une plateforme de contenu pour organiser et présenter des ebooks, vidéos, audios et articles. Le projet met l'accent sur la clarté de consultation et la possibilité de faire évoluer l'offre de contenu.",
            en: 'A content platform to organize and present ebooks, videos, audio resources, and articles. The project focuses on clarity and the ability to grow the content offer.',
        },
        tags: ['Next.js', 'Plateforme de contenu', 'Front-end'],
        images: ['accueil-personnel.png', 'accueil-footer.png', 'pdf1-ebook.png', 'contenu-pdf1-ebook.png', 'footer-personnel.png'],
    },
};

const pageTranslations = {
    fr: {
        title: 'Imdade MOUTAÏROU - Développeur web full-stack',
        metaDescription:
            "Portfolio d'Imdade MOUTAÏROU, développeur web full-stack. Sites web, applications métier, API, dashboards et solutions digitales fiables pour entrepreneurs, PME et startups.",
        switcherLabel: 'Sélecteur de langue',
        selectors: {
            '.nav-links a[href="#services"]': 'Services',
            '.nav-links a[href="#realisations"]': 'Réalisations',
            '.nav-links a[href="#methode"]': 'Méthode',
            '.nav-links a[href="#contact"]': 'Contact',
            '.menu-toggle': { ariaLabel: 'Ouvrir le menu' },
            '.hero .eyebrow': 'Développeur web full-stack pour projets sérieux',
            '.hero h1': 'Je conçois des sites et applications web fiables qui clarifient votre offre, automatisent vos opérations et renforcent votre crédibilité.',
            '.hero-lead': "J'accompagne entrepreneurs, PME, startups et porteurs de projet dans la création de solutions digitales propres, rapides, sécurisées et adaptées à leurs vrais besoins métier.",
            '.hero-actions .btn-primary': 'Discuter de mon projet',
            '.hero-actions .btn-secondary': 'Me contacter sur WhatsApp',
            '.hero-actions .btn-ghost': 'Voir mes réalisations',
            '.trust-strip span:nth-child(1)': 'Réponse rapide',
            '.trust-strip span:nth-child(2)': 'Responsive design',
            '.trust-strip span:nth-child(3)': 'Code maintenable',
            '.trust-strip span:nth-child(4)': 'Sécurité intégrée',
            '.hero-panel': { ariaLabel: 'Profil développeur' },
            '.hero-panel img': { alt: "Portrait d'Imdade MOUTAÏROU" },
            '.panel-label': 'Disponible pour',
            '.hero-panel h2': 'Sites professionnels, applications web, dashboards, API et refontes.',
            '.quick-facts div:nth-child(1) dt': 'Stack',
            '.quick-facts div:nth-child(1) dd': 'React, Angular, Next.js, Node.js, Laravel, NestJS',
            '.quick-facts div:nth-child(2) dt': 'Basé à',
            '.quick-facts div:nth-child(2) dd': 'Cotonou, Bénin - missions à distance possibles',
            '.proof-band': { ariaLabel: 'Preuves rapides' },
            '.proof-grid div:nth-child(1) strong': '6+',
            '.proof-grid div:nth-child(1) span': 'projets concrets présentés',
            '.proof-grid div:nth-child(2) strong': 'Full-stack',
            '.proof-grid div:nth-child(2) span': 'front-end, back-end, base de données et API',
            '.proof-grid div:nth-child(3) strong': 'Orienté métier',
            '.proof-grid div:nth-child(3) span': 'interfaces pensées pour vendre, gérer ou automatiser',
            '.proof-grid div:nth-child(4) strong': 'Livraison claire',
            '.proof-grid div:nth-child(4) span': 'fonctionnalités, tests, documentation et suivi',
            '#services .eyebrow': 'Services',
            '#services h2': 'Des solutions utiles, pas seulement du code.',
            '#services .section-heading p': "Chaque prestation vise un objectif simple : vous aider à présenter votre activité, gagner du temps, mieux gérer vos données ou lancer un produit web crédible.",
            '.service-card:nth-child(1) h3': 'Site vitrine professionnel',
            '.service-card:nth-child(1) p': 'Un site clair, rapide et responsive pour présenter votre activité, rassurer vos visiteurs et générer plus de demandes qualifiées.',
            '.service-card:nth-child(2) h3': 'Application web sur mesure',
            '.service-card:nth-child(2) p': 'Un outil adapté à vos processus : espace client, catalogue, réservation, suivi, formulaires métier ou plateforme interne.',
            '.service-card:nth-child(3) h3': 'Dashboard et admin panel',
            '.service-card:nth-child(3) p': 'Des interfaces lisibles pour consulter, gérer et piloter vos données sans perdre de temps dans des fichiers dispersés.',
            '.service-card:nth-child(4) h3': 'API back-end fiable',
            '.service-card:nth-child(4) p': 'Authentification, base de données, rôles, notifications et logique métier avec une structure propre, maintenable et sécurisée.',
            '.service-card:nth-child(5) h3': 'Refonte et optimisation',
            '.service-card:nth-child(5) p': "Amélioration de l'expérience utilisateur, de la performance, des textes, du responsive et du parcours de contact pour mieux convertir.",
            '.service-card:nth-child(6) h3': 'Maintenance et évolution',
            '.service-card:nth-child(6) p': 'Corrections, nouvelles fonctionnalités, amélioration continue et accompagnement technique après la mise en ligne.',
            '#a-propos .eyebrow': 'Pourquoi me confier votre projet',
            '#a-propos h2': 'Je traduis vos besoins métier en interfaces simples et systèmes solides.',
            '.trust-content p:nth-child(1)': 'Un bon projet web ne se limite pas à une belle page. Il doit expliquer votre valeur, guider vos visiteurs, sécuriser les données importantes et rester facile à faire évoluer.',
            '.trust-content p:nth-child(2)': "Mon rôle est de vous aider à passer d'une idée ou d'un besoin flou à une solution exploitable : structure claire, parcours utilisateur cohérent, back-end fiable et livraison compréhensible.",
            '.expertise-list span:nth-child(1)': 'Interfaces modernes',
            '.expertise-list span:nth-child(2)': 'Expérience utilisateur',
            '.expertise-list span:nth-child(3)': 'Architecture API',
            '.expertise-list span:nth-child(4)': 'Authentification JWT',
            '.expertise-list span:nth-child(5)': 'Bases de données',
            '.expertise-list span:nth-child(6)': 'Déploiement et suivi',
            '#realisations .eyebrow': 'Réalisations',
            '#realisations h2': 'Des projets pensés comme des solutions métier.',
            '#realisations .section-heading p': 'Voici comment mes réalisations répondent à des besoins concrets : gérer, vendre, informer, automatiser ou mieux accompagner les utilisateurs.',
            '#methode .eyebrow': 'Méthode',
            '#methode h2': 'Un déroulé clair pour avancer sans confusion.',
            '.method-grid article:nth-child(1) h3': 'Comprendre',
            '.method-grid article:nth-child(1) p': 'On clarifie vos objectifs, vos utilisateurs, vos contraintes et les fonctionnalités vraiment utiles.',
            '.method-grid article:nth-child(2) h3': 'Structurer',
            '.method-grid article:nth-child(2) p': 'Je propose une architecture simple : parcours, écrans, données, priorités et livrables.',
            '.method-grid article:nth-child(3) h3': 'Développer',
            '.method-grid article:nth-child(3) p': 'Je construis une solution responsive, propre, testable et pensée pour évoluer sans tout casser.',
            '.method-grid article:nth-child(4) h3': 'Livrer',
            '.method-grid article:nth-child(4) p': 'On vérifie ensemble, je corrige les points restants et je vous explique comment utiliser la solution.',
            '.final-cta .eyebrow': 'Votre projet mérite une base solide',
            '.final-cta h2': 'Vous avez une idée, un site à refaire ou un outil métier à créer ?',
            '.final-cta p': "Expliquez-moi votre besoin. Je vous réponds avec une première lecture claire : faisabilité, priorités et prochaine étape.",
            '.final-cta .btn': 'Discuter de mon projet',
            '#contact .eyebrow': 'Contact',
            '#contact h2': 'Parlez-moi de votre projet.',
            '#contact > .container > div:first-child > p:not(.eyebrow)': "Donnez-moi le contexte, le type de solution souhaité, les fonctionnalités importantes et votre délai idéal. Votre messagerie s'ouvrira avec un email prérempli.",
            'label[for="name"]': 'Nom complet',
            '#name': { placeholder: 'Votre nom complet' },
            'label[for="email"]': 'Adresse email',
            '#email': { placeholder: 'votre@email.com' },
            'label[for="project-type"]': 'Type de projet',
            '#project-type option:nth-child(1)': 'Site vitrine professionnel',
            '#project-type option:nth-child(2)': 'Application web sur mesure',
            '#project-type option:nth-child(3)': 'Dashboard ou admin panel',
            '#project-type option:nth-child(4)': 'API back-end',
            '#project-type option:nth-child(5)': 'Refonte ou optimisation',
            '#project-type option:nth-child(6)': 'Autre besoin',
            'label[for="budget"]': 'Budget ou niveau de priorité',
            '#budget option:nth-child(1)': 'À définir ensemble',
            '#budget option:nth-child(2)': 'Petit projet / MVP',
            '#budget option:nth-child(3)': 'Projet professionnel complet',
            '#budget option:nth-child(4)': 'Projet urgent',
            'label[for="message"]': 'Votre besoin',
            '#message': { placeholder: 'Exemple : je veux créer un site pour présenter mon activité, recevoir des demandes de devis et connecter WhatsApp...' },
            '.submit-btn': 'Préparer mon email',
            '.site-footer p': '© 2026 Imdade MOUTAÏROU. Tous droits réservés.',
            '.footer-inner a': 'Retour en haut',
            '.modal-close': { ariaLabel: "Fermer l'étude de cas" },
            '#modal-prev': 'Précédent',
            '#modal-next': 'Suivant',
        },
        cases: [
            {
                type: 'Santé - Application web',
                title: 'Application de suivi de santé',
                intro: 'Centraliser la gestion de patients et faciliter le suivi quotidien via une interface structurée.',
                items: [
                    '<strong>Problème :</strong> données patients difficiles à suivre manuellement.',
                    '<strong>Solution :</strong> application web avec inscription, tableaux, listes et actions de gestion.',
                    "<strong>Valeur :</strong> suivi plus rapide, informations mieux organisées et moins d'erreurs opérationnelles.",
                ],
                cta: "Voir l'étude de cas",
            },
            {
                type: 'Commerce local - Plateforme web',
                title: 'Marché artisanal',
                intro: 'Mettre en valeur les artisans locaux avec un catalogue accessible sur mobile et desktop.',
                items: [
                    '<strong>Problème :</strong> visibilité limitée des produits artisanaux en ligne.',
                    '<strong>Solution :</strong> catalogue produits, fiches détaillées et prise de contact via WhatsApp ou email.',
                    "<strong>Valeur :</strong> meilleure présence digitale et parcours d'achat plus simple.",
                ],
                cta: "Voir l'étude de cas",
            },
            {
                type: 'Productivité - Dashboard et API',
                title: 'TaskFlow',
                intro: 'Structurer la gestion de projets, les membres, les rôles, les permissions et les tâches.',
                items: [
                    '<strong>Problème :</strong> coordination complexe entre projets, tâches et équipes.',
                    '<strong>Solution :</strong> API sécurisée, dashboard, rôles, notifications et suivi en temps réel.',
                    '<strong>Valeur :</strong> meilleure organisation, responsabilités visibles et actions centralisées.',
                ],
                cta: "Voir l'étude de cas",
            },
            {
                type: 'Mobile - Application météo',
                title: 'Application météo',
                intro: 'Consulter rapidement les informations météo essentielles pour différentes villes.',
                items: [
                    "<strong>Problème :</strong> besoin d'une météo lisible, rapide et accessible.",
                    '<strong>Solution :</strong> interface mobile responsive connectée à des données météo.',
                    '<strong>Valeur :</strong> expérience simple, informations immédiates et affichage clair.',
                ],
                cta: 'Voir le projet live',
            },
            {
                type: 'Support client - Chatbot',
                title: 'Chatbot de discussion',
                intro: "Répondre aux questions courantes des utilisateurs à partir d'informations d'entreprise.",
                items: [
                    '<strong>Problème :</strong> demandes répétitives qui ralentissent la réponse client.',
                    '<strong>Solution :</strong> assistant conversationnel entraîné sur des contenus utiles.',
                    '<strong>Valeur :</strong> réponses plus rapides et disponibilité accrue.',
                ],
                cta: "Voir l'étude de cas",
            },
            {
                type: 'Contenu - Plateforme web',
                title: 'Plateforme de développement personnel',
                intro: 'Diffuser des contenus gratuits et payants avec une interface claire et évolutive.',
                items: [
                    '<strong>Problème :</strong> centraliser ebooks, vidéos, audios et articles.',
                    '<strong>Solution :</strong> plateforme de contenu construite pour organiser et présenter les ressources.',
                    '<strong>Valeur :</strong> meilleure expérience de consultation et base prête à évoluer.',
                ],
                cta: "Voir l'étude de cas",
            },
        ],
        validation: {
            name: 'Indiquez votre nom pour que je puisse vous répondre correctement.',
            emailRequired: 'Indiquez votre adresse email.',
            emailInvalid: 'Indiquez une adresse email valide.',
            messageRequired: 'Décrivez brièvement votre besoin ou votre objectif.',
            messageMin: 'Ajoutez quelques détails pour que je comprenne mieux le projet.',
            ready: "Votre messagerie va s'ouvrir avec un email prérempli. L'envoi final se fait depuis votre application email.",
            subjectPrefix: 'Projet web',
            emailIntro: "Bonjour Imdade,\n\nJe vous contacte pour discuter d'un projet.",
            nameLabel: 'Nom',
            emailLabel: 'Email',
            typeLabel: 'Type de projet',
            budgetLabel: 'Budget / priorité',
            needLabel: 'Besoin',
            closing: 'Cordialement,',
        },
    },
    en: {
        title: 'Imdade MOUTAÏROU - Full-stack web developer',
        metaDescription:
            'Portfolio of Imdade MOUTAÏROU, full-stack web developer. Reliable websites, business applications, APIs, dashboards, and digital solutions for entrepreneurs, SMEs, and startups.',
        switcherLabel: 'Language switcher',
        selectors: {
            '.nav-links a[href="#services"]': 'Services',
            '.nav-links a[href="#realisations"]': 'Work',
            '.nav-links a[href="#methode"]': 'Process',
            '.nav-links a[href="#contact"]': 'Contact',
            '.menu-toggle': { ariaLabel: 'Open menu' },
            '.hero .eyebrow': 'Full-stack web developer for serious projects',
            '.hero h1': 'I build reliable websites and web apps that clarify your offer, automate your operations, and strengthen your credibility.',
            '.hero-lead': 'I help entrepreneurs, SMEs, startups, and project owners create clean, fast, secure digital solutions tailored to real business needs.',
            '.hero-actions .btn-primary': 'Discuss my project',
            '.hero-actions .btn-secondary': 'Contact me on WhatsApp',
            '.hero-actions .btn-ghost': 'View my work',
            '.trust-strip span:nth-child(1)': 'Fast response',
            '.trust-strip span:nth-child(2)': 'Responsive design',
            '.trust-strip span:nth-child(3)': 'Maintainable code',
            '.trust-strip span:nth-child(4)': 'Built-in security',
            '.hero-panel': { ariaLabel: 'Developer profile' },
            '.hero-panel img': { alt: 'Portrait of Imdade MOUTAÏROU' },
            '.panel-label': 'Available for',
            '.hero-panel h2': 'Professional websites, web applications, dashboards, APIs, and redesigns.',
            '.quick-facts div:nth-child(1) dt': 'Stack',
            '.quick-facts div:nth-child(1) dd': 'React, Angular, Next.js, Node.js, Laravel, NestJS',
            '.quick-facts div:nth-child(2) dt': 'Based in',
            '.quick-facts div:nth-child(2) dd': 'Cotonou, Benin - remote projects available',
            '.proof-band': { ariaLabel: 'Quick proof points' },
            '.proof-grid div:nth-child(1) strong': '6+',
            '.proof-grid div:nth-child(1) span': 'real projects presented',
            '.proof-grid div:nth-child(2) strong': 'Full-stack',
            '.proof-grid div:nth-child(2) span': 'front end, back end, database, and APIs',
            '.proof-grid div:nth-child(3) strong': 'Business-minded',
            '.proof-grid div:nth-child(3) span': 'interfaces designed to sell, manage, or automate',
            '.proof-grid div:nth-child(4) strong': 'Clear delivery',
            '.proof-grid div:nth-child(4) span': 'features, tests, documentation, and follow-up',
            '#services .eyebrow': 'Services',
            '#services h2': 'Useful solutions, not just code.',
            '#services .section-heading p': 'Every service has one simple goal: help you present your business, save time, manage data better, or launch a credible web product.',
            '.service-card:nth-child(1) h3': 'Professional business website',
            '.service-card:nth-child(1) p': 'A clear, fast, responsive website to present your business, reassure visitors, and generate more qualified inquiries.',
            '.service-card:nth-child(2) h3': 'Custom web application',
            '.service-card:nth-child(2) p': 'A tool adapted to your process: client space, catalog, booking, tracking, business forms, or internal platform.',
            '.service-card:nth-child(3) h3': 'Dashboard and admin panel',
            '.service-card:nth-child(3) p': 'Readable interfaces to view, manage, and control your data without losing time in scattered files.',
            '.service-card:nth-child(4) h3': 'Reliable back-end API',
            '.service-card:nth-child(4) p': 'Authentication, database, roles, notifications, and business logic with a clean, maintainable, secure structure.',
            '.service-card:nth-child(5) h3': 'Redesign and optimization',
            '.service-card:nth-child(5) p': 'Improvements to user experience, performance, copy, responsiveness, and the contact journey to convert better.',
            '.service-card:nth-child(6) h3': 'Maintenance and evolution',
            '.service-card:nth-child(6) p': 'Fixes, new features, continuous improvement, and technical support after launch.',
            '#a-propos .eyebrow': 'Why trust me with your project',
            '#a-propos h2': 'I turn your business needs into simple interfaces and solid systems.',
            '.trust-content p:nth-child(1)': 'A good web project is not just a nice page. It must explain your value, guide visitors, secure important data, and remain easy to evolve.',
            '.trust-content p:nth-child(2)': 'My role is to help you move from an idea or unclear need to a usable solution: clear structure, coherent user journey, reliable back end, and understandable delivery.',
            '.expertise-list span:nth-child(1)': 'Modern interfaces',
            '.expertise-list span:nth-child(2)': 'User experience',
            '.expertise-list span:nth-child(3)': 'API architecture',
            '.expertise-list span:nth-child(4)': 'JWT authentication',
            '.expertise-list span:nth-child(5)': 'Databases',
            '.expertise-list span:nth-child(6)': 'Deployment and support',
            '#realisations .eyebrow': 'Work',
            '#realisations h2': 'Projects designed as business solutions.',
            '#realisations .section-heading p': 'Here is how my work answers concrete needs: managing, selling, informing, automating, or better supporting users.',
            '#methode .eyebrow': 'Process',
            '#methode h2': 'A clear workflow to move forward without confusion.',
            '.method-grid article:nth-child(1) h3': 'Understand',
            '.method-grid article:nth-child(1) p': 'We clarify your goals, users, constraints, and the features that truly matter.',
            '.method-grid article:nth-child(2) h3': 'Structure',
            '.method-grid article:nth-child(2) p': 'I propose a simple architecture: user flow, screens, data, priorities, and deliverables.',
            '.method-grid article:nth-child(3) h3': 'Build',
            '.method-grid article:nth-child(3) p': 'I develop a responsive, clean, testable solution designed to evolve without breaking everything.',
            '.method-grid article:nth-child(4) h3': 'Deliver',
            '.method-grid article:nth-child(4) p': 'We review together, I fix remaining points, and I explain how to use the solution.',
            '.final-cta .eyebrow': 'Your project deserves a solid base',
            '.final-cta h2': 'Do you have an idea, a website to redesign, or a business tool to build?',
            '.final-cta p': 'Tell me what you need. I will reply with a first clear reading: feasibility, priorities, and next step.',
            '.final-cta .btn': 'Discuss my project',
            '#contact .eyebrow': 'Contact',
            '#contact h2': 'Tell me about your project.',
            '#contact > .container > div:first-child > p:not(.eyebrow)': 'Share the context, the type of solution you need, important features, and your ideal timeline. Your email app will open with a prefilled message.',
            'label[for="name"]': 'Full name',
            '#name': { placeholder: 'Your full name' },
            'label[for="email"]': 'Email address',
            '#email': { placeholder: 'your@email.com' },
            'label[for="project-type"]': 'Project type',
            '#project-type option:nth-child(1)': 'Professional business website',
            '#project-type option:nth-child(2)': 'Custom web application',
            '#project-type option:nth-child(3)': 'Dashboard or admin panel',
            '#project-type option:nth-child(4)': 'Back-end API',
            '#project-type option:nth-child(5)': 'Redesign or optimization',
            '#project-type option:nth-child(6)': 'Other need',
            'label[for="budget"]': 'Budget or priority level',
            '#budget option:nth-child(1)': 'To define together',
            '#budget option:nth-child(2)': 'Small project / MVP',
            '#budget option:nth-child(3)': 'Complete professional project',
            '#budget option:nth-child(4)': 'Urgent project',
            'label[for="message"]': 'Your need',
            '#message': { placeholder: 'Example: I want to create a website to present my business, receive quote requests, and connect WhatsApp...' },
            '.submit-btn': 'Prepare my email',
            '.site-footer p': '© 2026 Imdade MOUTAÏROU. All rights reserved.',
            '.footer-inner a': 'Back to top',
            '.modal-close': { ariaLabel: 'Close case study' },
            '#modal-prev': 'Previous',
            '#modal-next': 'Next',
        },
        cases: [
            {
                type: 'Health - Web application',
                title: 'Health tracking application',
                intro: 'Centralize patient management and make daily tracking easier through a structured interface.',
                items: [
                    '<strong>Problem:</strong> patient data is hard to track manually.',
                    '<strong>Solution:</strong> web app with registration, dashboards, lists, and management actions.',
                    '<strong>Value:</strong> faster tracking, better organized information, and fewer operational errors.',
                ],
                cta: 'View case study',
            },
            {
                type: 'Local commerce - Web platform',
                title: 'Artisan market',
                intro: 'Showcase local artisans with a catalog available on mobile and desktop.',
                items: [
                    '<strong>Problem:</strong> limited online visibility for artisan products.',
                    '<strong>Solution:</strong> product catalog, detailed pages, and contact via WhatsApp or email.',
                    '<strong>Value:</strong> stronger digital presence and a simpler buying journey.',
                ],
                cta: 'View case study',
            },
            {
                type: 'Productivity - Dashboard and API',
                title: 'TaskFlow',
                intro: 'Structure project management, members, roles, permissions, and tasks.',
                items: [
                    '<strong>Problem:</strong> complex coordination between projects, tasks, and teams.',
                    '<strong>Solution:</strong> secure API, dashboard, roles, notifications, and real-time tracking.',
                    '<strong>Value:</strong> better organization, visible responsibilities, and centralized actions.',
                ],
                cta: 'View case study',
            },
            {
                type: 'Mobile - Weather app',
                title: 'Weather application',
                intro: 'Quickly check essential weather information for different cities.',
                items: [
                    '<strong>Problem:</strong> need for readable, fast, accessible weather information.',
                    '<strong>Solution:</strong> responsive mobile interface connected to weather data.',
                    '<strong>Value:</strong> simple experience, immediate information, and clear display.',
                ],
                cta: 'View live project',
            },
            {
                type: 'Customer support - Chatbot',
                title: 'Conversational chatbot',
                intro: 'Answer common user questions using company information.',
                items: [
                    '<strong>Problem:</strong> repeated requests slow down customer response.',
                    '<strong>Solution:</strong> conversational assistant trained on useful content.',
                    '<strong>Value:</strong> faster answers and increased availability.',
                ],
                cta: 'View case study',
            },
            {
                type: 'Content - Web platform',
                title: 'Personal growth platform',
                intro: 'Share free and paid content through a clear, scalable interface.',
                items: [
                    '<strong>Problem:</strong> centralize ebooks, videos, audio resources, and articles.',
                    '<strong>Solution:</strong> content platform built to organize and present resources.',
                    '<strong>Value:</strong> better reading experience and a foundation ready to evolve.',
                ],
                cta: 'View case study',
            },
        ],
        validation: {
            name: 'Please enter your name so I can reply properly.',
            emailRequired: 'Please enter your email address.',
            emailInvalid: 'Please enter a valid email address.',
            messageRequired: 'Briefly describe your need or goal.',
            messageMin: 'Add a few more details so I can understand the project better.',
            ready: 'Your email app will open with a prefilled message. The final send happens from your email application.',
            subjectPrefix: 'Web project',
            emailIntro: 'Hello Imdade,\n\nI am contacting you to discuss a project.',
            nameLabel: 'Name',
            emailLabel: 'Email',
            typeLabel: 'Project type',
            budgetLabel: 'Budget / priority',
            needLabel: 'Need',
            closing: 'Best regards,',
        },
    },
};

let currentProject = null;
let currentImageIndex = 0;

function getTranslationValue(source) {
    if (source && typeof source === 'object' && !Array.isArray(source)) {
        return source[currentLanguage] ?? source[DEFAULT_LANGUAGE] ?? '';
    }

    return source ?? '';
}

function applyValue(element, value) {
    if (!element) {
        return;
    }

    if (typeof value === 'string') {
        element.textContent = value;

        if (element.tagName === 'OPTION') {
            element.value = value;
        }

        return;
    }

    if (value.html !== undefined) {
        element.innerHTML = value.html;
    }

    if (value.placeholder !== undefined) {
        element.setAttribute('placeholder', value.placeholder);
    }

    if (value.alt !== undefined) {
        element.setAttribute('alt', value.alt);
    }

    if (value.ariaLabel !== undefined) {
        element.setAttribute('aria-label', value.ariaLabel);
    }
}

function applyPageTranslations(lang) {
    const dictionary = pageTranslations[lang] ?? pageTranslations[DEFAULT_LANGUAGE];
    const metaDescription = document.querySelector('meta[name="description"]');

    document.documentElement.lang = lang;
    document.title = dictionary.title;

    if (metaDescription) {
        metaDescription.setAttribute('content', dictionary.metaDescription);
    }

    if (languageSwitcher) {
        languageSwitcher.setAttribute('aria-label', dictionary.switcherLabel);
    }

    Object.entries(dictionary.selectors).forEach(([selector, value]) => {
        applyValue(document.querySelector(selector), value);
    });

    dictionary.cases.forEach((caseData, index) => {
        const card = document.querySelector(`.case-card:nth-child(${index + 1})`);

        if (!card) {
            return;
        }

        applyValue(card.querySelector('.case-type'), caseData.type);
        applyValue(card.querySelector('h3'), caseData.title);
        applyValue(card.querySelector('.case-content > p:not(.case-type)'), caseData.intro);

        card.querySelectorAll('li').forEach((item, itemIndex) => {
            item.innerHTML = caseData.items[itemIndex] ?? item.innerHTML;
        });

        applyValue(card.querySelector('.case-link'), caseData.cta);
    });

    if (currentProject && modal?.hidden === false) {
        renderModalContent();
    }
}

function setLanguage(lang) {
    currentLanguage = pageTranslations[lang] ? lang : DEFAULT_LANGUAGE;

    try {
        localStorage.setItem(STORAGE_KEY, currentLanguage);
    } catch (error) {
        // Keep the selected language in memory if storage is unavailable.
    }

    langButtons.forEach((button) => {
        const isActive = button.dataset.lang === currentLanguage;
        button.classList.toggle('is-active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
    });

    applyPageTranslations(currentLanguage);
}

function getInitialLanguage() {
    try {
        const savedLanguage = localStorage.getItem(STORAGE_KEY);

        if (pageTranslations[savedLanguage]) {
            return savedLanguage;
        }
    } catch (error) {
        // Ignore storage issues and use the browser preference.
    }

    return navigator.language?.toLowerCase().startsWith('en') ? 'en' : DEFAULT_LANGUAGE;
}

function setMenu(open) {
    navLinks?.classList.toggle('is-open', open);
    menuToggle?.setAttribute('aria-expanded', String(open));
}

function setError(input, message) {
    const error = input?.parentElement?.querySelector('.error-message');

    if (error) {
        error.textContent = message;
    }
}

function clearErrors() {
    document.querySelectorAll('.error-message').forEach((error) => {
        error.textContent = '';
    });

    if (formStatus) {
        formStatus.textContent = '';
        formStatus.classList.remove('is-ready');
    }
}

function validateForm() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = true;

    const validation = pageTranslations[currentLanguage].validation;

    clearErrors();

    if (!name?.value.trim()) {
        setError(name, validation.name);
        isValid = false;
    }

    if (!email?.value.trim()) {
        setError(email, validation.emailRequired);
        isValid = false;
    } else if (!emailPattern.test(email.value.trim())) {
        setError(email, validation.emailInvalid);
        isValid = false;
    }

    if (!message?.value.trim()) {
        setError(message, validation.messageRequired);
        isValid = false;
    } else if (message.value.trim().length < 25) {
        setError(message, validation.messageMin);
        isValid = false;
    }

    return isValid;
}

function buildMailto() {
    const validation = pageTranslations[currentLanguage].validation;
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const projectType = document.getElementById('project-type').value;
    const budget = document.getElementById('budget').value;
    const message = document.getElementById('message').value.trim();
    const subject = encodeURIComponent(`${validation.subjectPrefix} - ${projectType}`);
    const body = encodeURIComponent(
        `${validation.emailIntro}

${validation.nameLabel} : ${name}
${validation.emailLabel} : ${email}
${validation.typeLabel} : ${projectType}
${validation.budgetLabel} : ${budget}

${validation.needLabel} :
${message}

${validation.closing}`,
    );

    return `mailto:imdademoutairou@gmail.com?subject=${subject}&body=${body}`;
}

function renderModalImage() {
    if (!currentProject || !modalImage) {
        return;
    }

    modalImage.src = currentProject.images[currentImageIndex];
    modalImage.alt = `${getTranslationValue(currentProject.title)} - ${currentImageIndex + 1}`;
}

function renderModalContent() {
    if (!currentProject || !modalKicker || !modalTitle || !modalDescription || !modalTags) {
        return;
    }

    modalKicker.textContent = getTranslationValue(currentProject.kicker);
    modalTitle.textContent = getTranslationValue(currentProject.title);
    modalDescription.textContent = getTranslationValue(currentProject.description);
    modalTags.innerHTML = '';

    currentProject.tags.forEach((tag) => {
        const tagElement = document.createElement('span');
        tagElement.textContent = tag;
        modalTags.appendChild(tagElement);
    });

    renderModalImage();
}

function openModal(projectId) {
    const project = projectCases[projectId];

    if (!project || !modal) {
        return;
    }

    currentProject = project;
    currentImageIndex = 0;

    renderModalContent();
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    if (!modal) {
        return;
    }

    modal.hidden = true;
    document.body.style.overflow = '';
    currentProject = null;
    currentImageIndex = 0;
}

function changeModalImage(direction) {
    if (!currentProject) {
        return;
    }

    currentImageIndex += direction;

    if (currentImageIndex < 0) {
        currentImageIndex = currentProject.images.length - 1;
    }

    if (currentImageIndex >= currentProject.images.length) {
        currentImageIndex = 0;
    }

    renderModalImage();
}

menuToggle?.addEventListener('click', () => {
    const isOpen = navLinks?.classList.contains('is-open');
    setMenu(!isOpen);
});

document.querySelectorAll('.nav-links a, .logo, .footer-inner a').forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
});

document.querySelectorAll('[data-project]').forEach((button) => {
    button.addEventListener('click', () => openModal(button.dataset.project));
});

modalClose?.addEventListener('click', closeModal);
modalPrev?.addEventListener('click', () => changeModalImage(-1));
modalNext?.addEventListener('click', () => changeModalImage(1));

modal?.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', (event) => {
    if (modal?.hidden === false) {
        if (event.key === 'Escape') {
            closeModal();
        }

        if (event.key === 'ArrowLeft') {
            changeModalImage(-1);
        }

        if (event.key === 'ArrowRight') {
            changeModalImage(1);
        }
    }
});

contactForm?.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!validateForm()) {
        return;
    }

    if (formStatus) {
        formStatus.textContent = pageTranslations[currentLanguage].validation.ready;
        formStatus.classList.add('is-ready');
    }

    window.location.href = buildMailto();
});

contactForm?.querySelectorAll('input, textarea, select').forEach((field) => {
    field.addEventListener('input', () => {
        const error = field.parentElement?.querySelector('.error-message');

        if (error) {
            error.textContent = '';
        }
    });
});

langButtons.forEach((button) => {
    button.addEventListener('click', () => {
        setLanguage(button.dataset.lang);
    });
});

setLanguage(getInitialLanguage());
