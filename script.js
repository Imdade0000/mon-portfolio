const STORAGE_KEY = 'portfolio_language';
const DEFAULT_LANGUAGE = 'fr';
const SUPPORTED_LANGUAGES = ['fr', 'en'];
const THEME_ICONS = {
    light: '🌙',
    dark: '☀️',
};

const translations = {
    fr: {
        meta: {
            title: 'Mon Portfolio',
        },
        nav: {
            home: 'Accueil',
            about: 'À propos',
            projects: 'Projets',
            contact: 'Contact',
        },
        language: {
            switcherLabel: 'Sélecteur de langue',
        },
        theme: {
            dark: 'Activer le mode sombre',
            light: 'Activer le mode clair',
        },
        hero: {
            title: 'Bonjour, je suis <span class="highlight">Imdade MOUTAÏROU</span>',
            subtitle: 'Développeur Web Full-Stack',
            cta: 'Voir mes projets',
        },
        about: {
            title: 'À propos de moi',
            p1: 'Bienvenue sur mon portfolio ! Je suis un développeur web full-stack passionné par la création d\'expériences numériques interactives et intuitives.',
            p2: 'Mon parcours m\'a permis d\'acquérir des compétences solides en développement full-stack, avec une attention particulière pour le design et l\'expérience utilisateur.',
            p3: 'Au fil de mes projets personnels, stages et collaborations, j\'ai pu développer des compétences solides aussi bien côté front-end (HTML5, CSS3, JavaScript, Angular/React) que côté back-end (Node.js, Laravel, NestJS), en passant par la gestion de bases de données (MySQL, PostgreSQL, Prisma). Je suis également à l\'aise avec l\'intégration d\'API RESTful, l\'authentification sécurisée (JWT), et l\'utilisation d\'outils modernes comme Git, Docker ou Postman.',
            p4: 'Je souhaite contribuer à la digitalisation des entreprises en développant des solutions logicielles intuitives, performantes et adaptées aux besoins métiers avec une expertise en intégration front-end et back-end.',
            skillsTitle: 'Mes compétences',
        },
        founder: {
            title: 'Fondateur',
            body: 'Je suis également le fondateur de <a href="https://www.xchangeconverter.com" target="_blank" rel="noopener noreferrer" class="founder-link">Xchange</a>, une application de conversion de devises monétaires en temps réel. Ce projet reflète mon engagement en tant que développeur full-stack à créer des solutions innovantes et pratiques pour résoudre des problèmes réels.',
        },
        projects: {
            title: 'Mes Projets',
            viewDetails: 'Voir détails',
            imageAlt: 'Aperçu du projet',
        },
        filters: {
            all: 'Tous',
            web: 'Web',
            design: 'Design',
            mobile: 'Mobile',
        },
        contact: {
            title: 'Contactez-moi',
            location: 'Cotonou, Bénin',
            github: 'Repo GitHub',
            emailSubject: 'Contact depuis votre portfolio',
            emailBody: 'Bonjour Imdade,\n\nJe vous contacte via votre portfolio pour discuter d\'une opportunité ou d\'un projet.\n\nCordialement,',
            form: {
                nameLabel: 'Nom complet',
                namePlaceholder: 'Votre nom complet',
                emailLabel: 'Adresse email',
                emailPlaceholder: 'Votre adresse email',
                messageLabel: 'Message',
                messagePlaceholder: 'Décrivez votre projet ou votre besoin',
                submit: 'Envoyer',
            },
            validation: {
                nameRequired: 'Le nom est requis.',
                emailRequired: 'L\'adresse email est requise.',
                emailInvalid: 'Veuillez saisir une adresse email valide.',
                messageRequired: 'Le message est requis.',
                messageMin: 'Le message doit contenir au moins 10 caractères.',
            },
            success: 'Votre message a été envoyé avec succès !',
        },
        footer: {
            copy: '&copy; 2026 Imdade MOUTAÏROU. Tous droits réservés.',
        },
        modal: {
            close: 'Fermer les détails du projet',
            previous: 'Image précédente',
            next: 'Image suivante',
            mainImageAlt: 'Image du projet',
            thumbnailAlt: 'Miniature du projet',
            noDescription: 'Aucune description disponible.',
        },
    },
    en: {
        meta: {
            title: 'My Portfolio',
        },
        nav: {
            home: 'Home',
            about: 'About',
            projects: 'Projects',
            contact: 'Contact',
        },
        language: {
            switcherLabel: 'Language switcher',
        },
        theme: {
            dark: 'Enable dark mode',
            light: 'Enable light mode',
        },
        hero: {
            title: 'Hello, I am <span class="highlight">Imdade MOUTAÏROU</span>',
            subtitle: 'Full-Stack Web Developer',
            cta: 'View my projects',
        },
        about: {
            title: 'About me',
            p1: 'Welcome to my portfolio! I am a full-stack web developer passionate about creating interactive and intuitive digital experiences.',
            p2: 'My background has helped me build strong full-stack development skills, with a particular focus on design and user experience.',
            p3: 'Through personal projects, internships, and collaborations, I have built solid skills on both the front end (HTML5, CSS3, JavaScript, Angular/React) and the back end (Node.js, Laravel, NestJS), including database management (MySQL, PostgreSQL, Prisma). I am also comfortable with RESTful API integration, secure authentication (JWT), and modern tools such as Git, Docker, and Postman.',
            p4: 'I aim to support business digitization by building intuitive, high-performance software solutions tailored to real business needs with strong front-end and back-end integration expertise.',
            skillsTitle: 'My skills',
        },
        founder: {
            title: 'Founder',
            body: 'I am also the founder of <a href="https://www.xchangeconverter.com" target="_blank" rel="noopener noreferrer" class="founder-link">Xchange</a>, a real-time currency conversion application. This project reflects my commitment as a full-stack developer to creating innovative and practical solutions for real-world problems.',
        },
        projects: {
            title: 'My Projects',
            viewDetails: 'View details',
            imageAlt: 'Project preview',
        },
        filters: {
            all: 'All',
            web: 'Web',
            design: 'Design',
            mobile: 'Mobile',
        },
        contact: {
            title: 'Contact me',
            location: 'Cotonou, Benin',
            github: 'GitHub Repo',
            emailSubject: 'Contact from your portfolio',
            emailBody: 'Hello Imdade,\n\nI am contacting you through your portfolio to discuss an opportunity or a project.\n\nBest regards,',
            form: {
                nameLabel: 'Full name',
                namePlaceholder: 'Your full name',
                emailLabel: 'Email address',
                emailPlaceholder: 'Your email address',
                messageLabel: 'Message',
                messagePlaceholder: 'Describe your project or your needs',
                submit: 'Send',
            },
            validation: {
                nameRequired: 'Name is required.',
                emailRequired: 'Email address is required.',
                emailInvalid: 'Please enter a valid email address.',
                messageRequired: 'Message is required.',
                messageMin: 'The message must contain at least 10 characters.',
            },
            success: 'Your message has been sent successfully!',
        },
        footer: {
            copy: '&copy; 2026 Imdade MOUTAÏROU. All rights reserved.',
        },
        modal: {
            close: 'Close project details',
            previous: 'Previous image',
            next: 'Next image',
            mainImageAlt: 'Project image',
            thumbnailAlt: 'Project thumbnail',
            noDescription: 'No description available.',
        },
    },
};

const projectData = {
    'health-app': {
        category: 'web',
        images: ['dashboard-menu.png', 'ajout-patient.png', 'liste-patients.png', 'page-inscription.png'],
        title: {
            fr: 'Application de suivi de santé',
            en: 'Health Tracking Application',
        },
        summary: {
            fr: 'Réalisée avec du PHP',
            en: 'Built with PHP',
        },
        description: {
            fr: 'Cette application a été développée avec PHP, Laravel, Bootstrap et JavaScript pour faciliter le suivi de la santé et la gestion de patients.',
            en: 'This application was built with PHP, Laravel, Bootstrap, and JavaScript to streamline health monitoring and patient management.',
        },
    },
    'inventory-app': {
        category: 'web',
        images: ['marché_artisanal_accueil.png', 'marché_artisanal_catalogue.png', 'marché_artisanal_collier.png', 'marché_artisanal_footer.png', 'marché_artisanal_register.png',],
        title: {
            fr: 'Application de marché artisanal',
            en: 'Artisan Market App',
        },
        summary: {
            fr: 'Réalisée avec React (côté front-end) et NodeJS, ExpressJS (côté back-end)',
            en: 'Built with React (front-end) and NodeJS, ExpressJS (back-end)',
        },
        description: {
            fr: 'Marché artisanal est une plateforme de commerce solidaire qui met en vitrine les artisans et commerçants locaux d\'Afrique de l\'Ouest. L\'app permet aux artisans de créer un catalogue de produits (photos, prix, description), et aux clients de parcourir, filtrer et commander via WhatsApp ou email. Elle cible des utilisateurs en Afrique de l\'Ouest, sur mobile et desktop. Elle est toujours en cours de développement',
            en: 'Marché Artisanal is a fair trade platform that showcases local artisans and merchants in West Africa. The app allows artisans to create a product catalog (photos, prices, descriptions), and customers to browse, filter, and order via WhatsApp or email. It targets users in West Africa, on both mobile and desktop. It is still under development',
        },
    },
    'weather-app': {
        category: 'mobile',
        images: ['météo_cotonou.png',
            'météo_monaco.png',
            'météo_montréal_prévision.png',
            'météo_montréal.png',
            'météo_newyork_prévision.png',
            'météo_newyork.png',
        ],
        title: {
            fr: 'Application météo mobile',
            en: 'Mobile Weather Application',
        },
        summary: {
            fr: 'Application mobile d\'affichage de météo.',
            en: 'Mobile app for displaying weather information.',
        },
        description: {
            fr: 'Cette application météo a été développée avec React et tailwind CSS pour afficher rapidement les informations météo essentielles de n\'importe quelle ville dans le monde. Disponible sur <a href="https://meteo-lifesytle.vercel.app/" target="_blank" rel="noopener noreferrer" class="founder-link">Meteo_app</a>',
            en: 'This weather application was developed with React and Tailwind CSS to quickly display essential weather information for any city in the world. Available on <a href="https://meteo-lifesytle.vercel.app/" target="_blank" rel="noopener noreferrer" class="founder-link">Meteo_app</a>',
        },
    },
    'taskflow-api': {
        category: 'web',
        images: [
            'taskflow-page_de_connexion.png',
            'taskflow-vérification.png',
            'taskflow-projet.png',
            'taskflow-projets.png',
            'taskflow-utilisateurs.png',
            'taskflow-rôles.png',
            'taskflow-gestion_des_tâches.png',
            'taskflow-membres_projet.png',
            'taskflow-membre.png',
            'taskflow-sélection_membre.png',
            'taskflow-gérer_membre.png',
            'taskflow-roles_projet.png',
            'taskflow-sélection_role.png',
            'taskflow-sélection_utilisateur.png',
            'taskflow-sélection_utilisateurs.png',
            'taskflow-permission_projet.png',
            'taskflow-notification.png',
            'taskflow-notifications.png',
            'taskflow-commentaire.png',
            'taskflow-inscription.png',
        ],
        title: {
            fr: 'API de gestion des projets, suivi et automatisation des tâches',
            en: 'Project Management, Tracking, and Task Automation API',
        },
        summary: {
            fr: 'Réalisée avec Angular et Tailwind CSS en front-end et NestJS, MySQL, Prisma, JWT, Bcrypt, Socket.io et MailDev en back-end',
            en: 'Built with Angular and Tailwind CSS on the front end, and NestJS, MySQL, Prisma, JWT, Bcrypt, Socket.io, and MailDev on the back end',
        },
        description: {
            fr: 'Cette API aide les entreprises à mieux gérer leurs projets, automatiser le suivi des tâches et recevoir des notifications en temps réel pour améliorer la productivité.',
            en: 'This API helps businesses manage projects more effectively, automate task tracking, and receive real-time notifications to improve productivity.',
        },
    },
    chatbot: {
        category: 'web',
        images: ['beni-dashboard.png', 'beni-interface.png', 'beni-question.png', 'beni-remerciement.png'],
        title: {
            fr: 'ChatBot de discussion',
            en: 'Conversational Chatbot',
        },
        summary: {
            fr: 'Réalisée avec GPT-trainer',
            en: 'Built with GPT-trainer',
        },
        description: {
            fr: 'Ce chatbot est un assistant virtuel qui répond aux préoccupations des utilisateurs concernant les informations d\'une entreprise.',
            en: 'This chatbot is a virtual assistant designed to answer user questions about a company\'s information and services.',
        },
    },
    'personal-growth-platform': {
        category: 'web',
        images: ['accueil-personnel.png', 'accueil-footer.png', 'pdf1-ebook.png', 'contenu-pdf1-ebook.png', 'footer-personnel.png'],
        title: {
            fr: 'Plateforme de développement personnel',
            en: 'Personal Growth Platform',
        },
        summary: {
            fr: 'Réalisée avec NextJS',
            en: 'Built with NextJS',
        },
        description: {
            fr: 'Je partage à travers cette plateforme de développement personnel des contenus gratuits et payants, comme des ebooks PDF, vidéos, audios et articles.',
            en: 'Through this personal growth platform, I share free and paid content such as PDF ebooks, videos, audio resources, and articles.',
        },
    },
};

const navbar = document.getElementById('navbar');
const themeToggle = document.getElementById('theme-toggle');
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const contactForm = document.getElementById('contact-form');
const scrollLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
const langButtons = document.querySelectorAll('.lang-btn');
const sections = document.querySelectorAll('section');
const projectModal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalMainImage = document.getElementById('modal-main-image');
const modalThumbnails = document.getElementById('modal-thumbnails');
const modalDescription = document.getElementById('modal-description');
const closeModal = document.querySelector('.close-modal');
const prevImgBtn = document.getElementById('prev-img');
const nextImgBtn = document.getElementById('next-img');
const mailtoLink = document.querySelector('.social-links a[href^="mailto:"]');
const languageSwitcher = document.querySelector('.language-switch');

let currentLanguage = DEFAULT_LANGUAGE;
let currentProjectId = null;
let currentImageIndex = 0;
let activeFilter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';

function getNestedValue(source, path) {
    return path.split('.').reduce((value, key) => value?.[key], source);
}

function getTranslation(lang, key) {
    return getNestedValue(translations[lang], key)
        ?? getNestedValue(translations[DEFAULT_LANGUAGE], key)
        ?? '';
}

function getProjectValue(projectId, key, lang) {
    const project = projectData[projectId];

    if (!project || !project[key]) {
        return '';
    }

    return project[key][lang] ?? project[key][DEFAULT_LANGUAGE] ?? '';
}

function isSupportedLanguage(lang) {
    return SUPPORTED_LANGUAGES.includes(lang);
}

function getStoredLanguage() {
    try {
        return localStorage.getItem(STORAGE_KEY);
    } catch (error) {
        return null;
    }
}

function saveLanguage(lang) {
    try {
        localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {
        // Ignore storage issues and keep the in-memory language.
    }
}

function getInitialLanguage() {
    const savedLanguage = getStoredLanguage();

    if (isSupportedLanguage(savedLanguage)) {
        return savedLanguage;
    }

    const browserLanguage = navigator.language?.toLowerCase() || '';

    if (browserLanguage.startsWith('en')) {
        return 'en';
    }

    return DEFAULT_LANGUAGE;
}

function updateThemeToggle() {
    const isDarkMode = document.body.classList.contains('dark-mode');

    if (themeToggle) {
        themeToggle.textContent = isDarkMode ? THEME_ICONS.dark : THEME_ICONS.light;
        themeToggle.setAttribute(
            'aria-label',
            getTranslation(currentLanguage, isDarkMode ? 'theme.light' : 'theme.dark'),
        );
    }
}

function updateLanguageButtons(lang) {
    langButtons.forEach((button) => {
        const isActive = button.dataset.langSwitch === lang;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
    });

    if (languageSwitcher) {
        languageSwitcher.setAttribute('aria-label', getTranslation(lang, 'language.switcherLabel'));
    }
}

function updateMailtoLink(lang) {
    if (!mailtoLink) {
        return;
    }

    const subject = encodeURIComponent(getTranslation(lang, 'contact.emailSubject'));
    const body = encodeURIComponent(getTranslation(lang, 'contact.emailBody'));
    mailtoLink.href = `mailto:imdademoutairou@gmail.com?subject=${subject}&body=${body}`;
}

function applyTranslations(lang) {
    document.documentElement.lang = lang;
    document.title = getTranslation(lang, 'meta.title');

    document.querySelectorAll('[data-i18n]').forEach((element) => {
        element.textContent = getTranslation(lang, element.dataset.i18n);
    });

    document.querySelectorAll('[data-i18n-html]').forEach((element) => {
        element.innerHTML = getTranslation(lang, element.dataset.i18nHtml);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
        element.setAttribute('placeholder', getTranslation(lang, element.dataset.i18nPlaceholder));
    });

    updateThemeToggle();
    updateLanguageButtons(lang);
    updateMailtoLink(lang);

    if (closeModal) {
        closeModal.setAttribute('aria-label', getTranslation(lang, 'modal.close'));
    }

    if (prevImgBtn) {
        prevImgBtn.setAttribute('aria-label', getTranslation(lang, 'modal.previous'));
    }

    if (nextImgBtn) {
        nextImgBtn.setAttribute('aria-label', getTranslation(lang, 'modal.next'));
    }
}

function renderProjectCard(card, lang) {
    const projectId = card.dataset.projectId;
    const project = projectData[projectId];

    if (!project) {
        return;
    }

    const title = getProjectValue(projectId, 'title', lang);
    const summary = getProjectValue(projectId, 'summary', lang);
    const titleElement = card.querySelector('.project-title');
    const summaryElement = card.querySelector('.project-summary');
    const linkElement = card.querySelector('.project-link');
    const imageElement = card.querySelector('img');

    if (titleElement) {
        titleElement.textContent = title;
    }

    if (summaryElement) {
        summaryElement.textContent = summary;
    }

    if (linkElement) {
        linkElement.textContent = getTranslation(lang, 'projects.viewDetails');
    }

    if (imageElement) {
        imageElement.alt = title || getTranslation(lang, 'projects.imageAlt');
    }

    card.dataset.category = project.category;
}

function translateProjectCards(lang) {
    projectCards.forEach((card) => renderProjectCard(card, lang));
    applyProjectFilter(activeFilter);

    if (currentProjectId && projectModal?.style.display === 'block') {
        renderProjectModal(currentProjectId);
    }
}

function applyProjectFilter(filter) {
    activeFilter = filter;

    projectCards.forEach((card) => {
        const shouldShow = filter === 'all' || card.dataset.category === filter;
        card.style.display = shouldShow ? 'block' : 'none';
    });
}

function clearValidationError(inputId) {
    const input = document.getElementById(inputId);
    const errorElement = input?.nextElementSibling;

    if (errorElement) {
        errorElement.textContent = '';
    }
}

function validateContactForm(showErrors = true) {
    if (!contactForm) {
        return true;
    }

    let isValid = true;
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validations = [
        {
            input: nameInput,
            message: getTranslation(currentLanguage, 'contact.validation.nameRequired'),
            test: () => Boolean(nameInput?.value.trim()),
        },
        {
            input: emailInput,
            message: getTranslation(currentLanguage, 'contact.validation.emailRequired'),
            test: () => Boolean(emailInput?.value.trim()),
        },
        {
            input: emailInput,
            message: getTranslation(currentLanguage, 'contact.validation.emailInvalid'),
            test: () => emailPattern.test(emailInput?.value.trim() || ''),
            shouldRun: () => Boolean(emailInput?.value.trim()),
        },
        {
            input: messageInput,
            message: getTranslation(currentLanguage, 'contact.validation.messageRequired'),
            test: () => Boolean(messageInput?.value.trim()),
        },
        {
            input: messageInput,
            message: getTranslation(currentLanguage, 'contact.validation.messageMin'),
            test: () => (messageInput?.value.trim().length || 0) >= 10,
            shouldRun: () => Boolean(messageInput?.value.trim()),
        },
    ];

    validations.forEach(({ input, message, test, shouldRun }) => {
        const errorElement = input?.nextElementSibling;

        if (!input || !errorElement) {
            return;
        }

        if (shouldRun && !shouldRun()) {
            errorElement.textContent = '';
            return;
        }

        if (!test()) {
            isValid = false;
            if (showErrors && !errorElement.textContent) {
                errorElement.textContent = message;
            } else if (showErrors) {
                errorElement.textContent = message;
            }
        } else {
            errorElement.textContent = '';
        }
    });

    return isValid;
}

function updateVisibleValidationErrors() {
    const hasVisibleErrors = Array.from(document.querySelectorAll('.error-message')).some(
        (element) => element.textContent.trim() !== '',
    );

    if (hasVisibleErrors) {
        validateContactForm(true);
    }
}

function changeImage(index) {
    if (!currentProjectId) {
        return;
    }

    const images = projectData[currentProjectId]?.images || [];

    if (!images.length || !modalMainImage) {
        return;
    }

    if (index < 0) {
        currentImageIndex = images.length - 1;
    } else if (index >= images.length) {
        currentImageIndex = 0;
    } else {
        currentImageIndex = index;
    }

    modalMainImage.src = images[currentImageIndex];
    modalMainImage.alt = getTranslation(currentLanguage, 'modal.mainImageAlt');

    modalThumbnails?.querySelectorAll('.thumbnail').forEach((thumbnail, thumbnailIndex) => {
        thumbnail.classList.toggle('active', thumbnailIndex === currentImageIndex);
    });
}

function renderProjectModal(projectId) {
    const project = projectData[projectId];

    if (!project || !modalTitle || !modalDescription || !modalMainImage || !modalThumbnails) {
        return;
    }

    const title = getProjectValue(projectId, 'title', currentLanguage);
    const description = getProjectValue(projectId, 'description', currentLanguage)
        || getTranslation(currentLanguage, 'modal.noDescription');

    modalTitle.textContent = title;
    modalDescription.innerHTML = description;
    modalThumbnails.innerHTML = '';

    project.images.forEach((image, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = image;
        thumbnail.alt = `${getTranslation(currentLanguage, 'modal.thumbnailAlt')} ${index + 1}`;
        thumbnail.classList.add('thumbnail');
        thumbnail.classList.toggle('active', index === currentImageIndex);
        thumbnail.addEventListener('click', () => changeImage(index));
        modalThumbnails.appendChild(thumbnail);
    });

    modalMainImage.src = project.images[currentImageIndex];
    modalMainImage.alt = getTranslation(currentLanguage, 'modal.mainImageAlt');
    modalMainImage.style.display = 'block';

    const showNavigation = project.images.length > 1;

    if (prevImgBtn) {
        prevImgBtn.style.display = showNavigation ? 'block' : 'none';
    }

    if (nextImgBtn) {
        nextImgBtn.style.display = showNavigation ? 'block' : 'none';
    }
}

function openProjectModal(projectId) {
    if (!projectModal || !projectData[projectId]) {
        return;
    }

    currentProjectId = projectId;
    currentImageIndex = 0;
    renderProjectModal(projectId);
    projectModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    if (!projectModal) {
        return;
    }

    projectModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    currentProjectId = null;
    currentImageIndex = 0;

    if (modalTitle) {
        modalTitle.textContent = '';
    }

    if (modalDescription) {
        modalDescription.textContent = '';
    }

    if (modalThumbnails) {
        modalThumbnails.innerHTML = '';
    }

    if (modalMainImage) {
        modalMainImage.removeAttribute('src');
        modalMainImage.alt = '';
    }
}

function setLanguage(lang) {
    const nextLanguage = isSupportedLanguage(lang) ? lang : DEFAULT_LANGUAGE;

    currentLanguage = nextLanguage;
    saveLanguage(nextLanguage);
    applyTranslations(nextLanguage);
    translateProjectCards(nextLanguage);
    updateVisibleValidationErrors();
}

function initializeNavigation() {
    burger?.addEventListener('click', () => {
        navLinks?.classList.toggle('active');
        burger.classList.toggle('toggle');
    });

    themeToggle?.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        updateThemeToggle();
    });

    window.addEventListener('scroll', () => {
        if (!navbar) {
            return;
        }

        if (window.scrollY > 100) {
            navbar.style.padding = '15px 50px';
            navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.padding = '20px 50px';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });

    scrollLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            navLinks?.classList.remove('active');

            const targetId = link.getAttribute('href');

            if (targetId && targetId !== '#' && targetId.length > 1) {
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    const targetPosition = targetElement.offsetTop - 80;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth',
                    });
                }
            }
        });
    });
}

function initializeFilters() {
    filterBtns.forEach((button) => {
        button.addEventListener('click', () => {
            filterBtns.forEach((filterButton) => filterButton.classList.remove('active'));
            button.classList.add('active');
            applyProjectFilter(button.dataset.filter);
        });
    });
}

function initializeContactForm() {
    if (!contactForm) {
        return;
    }

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        if (validateContactForm(true)) {
            alert(getTranslation(currentLanguage, 'contact.success'));
            contactForm.reset();
            document.querySelectorAll('.error-message').forEach((element) => {
                element.textContent = '';
            });
        }
    });

    ['name', 'email', 'message'].forEach((inputId) => {
        const input = document.getElementById(inputId);

        input?.addEventListener('input', () => {
            clearValidationError(inputId);
        });
    });
}

function initializeAnimations() {
    const revealSection = (entries, observer) => {
        const [entry] = entries;

        if (!entry.isIntersecting) {
            return;
        }

        entry.target.classList.add('section-visible');
        observer.unobserve(entry.target);
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
        root: null,
        threshold: 0.15,
    });

    sections.forEach((section) => {
        sectionObserver.observe(section);
        section.classList.add('section-hidden');
    });

    projectCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('fade-in');
        }, 100 * index);
    });
}

function initializeModal() {
    document.querySelectorAll('.project-link').forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const projectId = link.closest('.project-card')?.dataset.projectId;

            if (projectId) {
                openProjectModal(projectId);
            }
        });
    });

    closeModal?.addEventListener('click', closeProjectModal);

    prevImgBtn?.addEventListener('click', (event) => {
        event.stopPropagation();
        changeImage(currentImageIndex - 1);
    });

    nextImgBtn?.addEventListener('click', (event) => {
        event.stopPropagation();
        changeImage(currentImageIndex + 1);
    });

    window.addEventListener('click', (event) => {
        if (event.target === projectModal) {
            closeProjectModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (projectModal?.style.display !== 'block') {
            return;
        }

        if (event.key === 'Escape') {
            closeProjectModal();
        }

        if (event.key === 'ArrowLeft') {
            event.preventDefault();
            changeImage(currentImageIndex - 1);
        }

        if (event.key === 'ArrowRight') {
            event.preventDefault();
            changeImage(currentImageIndex + 1);
        }
    });
}

function initializeLanguageSwitcher() {
    langButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const selectedLanguage = button.dataset.langSwitch;

            if (selectedLanguage && selectedLanguage !== currentLanguage) {
                setLanguage(selectedLanguage);
            }
        });
    });
}

function initializePortfolio() {
    initializeNavigation();
    initializeFilters();
    initializeContactForm();
    initializeAnimations();
    initializeModal();
    initializeLanguageSwitcher();

    currentLanguage = getInitialLanguage();
    setLanguage(currentLanguage);
}

initializePortfolio();
