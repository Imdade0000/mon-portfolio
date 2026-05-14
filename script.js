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

const projectCases = {
    'health-app': {
        kicker: 'Santé - Application web',
        title: 'Application de suivi de santé',
        description:
            "Une application web pensée pour mieux organiser le suivi des patients : inscription, tableaux de bord, listes et actions de gestion. Le projet montre ma capacité à construire des interfaces métier claires avec un back-end structuré.",
        tags: ['PHP', 'Laravel', 'Bootstrap', 'JavaScript'],
        images: ['page-inscription.png', 'dashboard.png', 'dashboard-menu.png', 'ajout-patient.png', 'liste-patients.png'],
    },
    'market-app': {
        kicker: 'Commerce local - Plateforme web',
        title: 'Marché artisanal',
        description:
            "Une plateforme de commerce solidaire pour donner plus de visibilité aux artisans locaux. Elle facilite la présentation des produits, la navigation dans le catalogue et le contact client via WhatsApp ou email.",
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
        kicker: 'Productivité - Dashboard et API',
        title: 'TaskFlow',
        description:
            "Une solution de gestion de projets avec rôles, permissions, membres, tâches, commentaires et notifications. L'objectif est de centraliser le suivi et de rendre les responsabilités plus visibles dans une équipe.",
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
        kicker: 'Support client - Assistant virtuel',
        title: 'Chatbot de discussion',
        description:
            "Un assistant conversationnel conçu pour répondre aux questions fréquentes à partir des informations d'une entreprise. Le projet illustre l'intégration d'un outil pratique pour améliorer la disponibilité du support.",
        tags: ['GPT-trainer', 'Assistant virtuel', 'Support client'],
        images: ['beni-dashboard.png', 'beni-interface.png', 'beni-question.png', 'beni-remerciement.png'],
    },
    'personal-growth': {
        kicker: 'Contenu - Plateforme web',
        title: 'Plateforme de développement personnel',
        description:
            "Une plateforme de contenu pour organiser et présenter des ebooks, vidéos, audios et articles. Le projet met l'accent sur la clarté de consultation et la possibilité de faire évoluer l'offre de contenu.",
        tags: ['Next.js', 'Plateforme de contenu', 'Front-end'],
        images: ['accueil-personnel.png', 'accueil-footer.png', 'pdf1-ebook.png', 'contenu-pdf1-ebook.png', 'footer-personnel.png'],
    },
};

let currentProject = null;
let currentImageIndex = 0;

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

    clearErrors();

    if (!name?.value.trim()) {
        setError(name, 'Indiquez votre nom pour que je puisse vous répondre correctement.');
        isValid = false;
    }

    if (!email?.value.trim()) {
        setError(email, 'Indiquez votre adresse email.');
        isValid = false;
    } else if (!emailPattern.test(email.value.trim())) {
        setError(email, 'Indiquez une adresse email valide.');
        isValid = false;
    }

    if (!message?.value.trim()) {
        setError(message, 'Décrivez brièvement votre besoin ou votre objectif.');
        isValid = false;
    } else if (message.value.trim().length < 25) {
        setError(message, 'Ajoutez quelques détails pour que je comprenne mieux le projet.');
        isValid = false;
    }

    return isValid;
}

function buildMailto() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const projectType = document.getElementById('project-type').value;
    const budget = document.getElementById('budget').value;
    const message = document.getElementById('message').value.trim();
    const subject = encodeURIComponent(`Projet web - ${projectType}`);
    const body = encodeURIComponent(
        `Bonjour Imdade,

Je vous contacte pour discuter d'un projet.

Nom : ${name}
Email : ${email}
Type de projet : ${projectType}
Budget / priorité : ${budget}

Besoin :
${message}

Cordialement,`,
    );

    return `mailto:imdademoutairou@gmail.com?subject=${subject}&body=${body}`;
}

function renderModalImage() {
    if (!currentProject || !modalImage) {
        return;
    }

    modalImage.src = currentProject.images[currentImageIndex];
    modalImage.alt = `${currentProject.title} - aperçu ${currentImageIndex + 1}`;
}

function openModal(projectId) {
    const project = projectCases[projectId];

    if (!project || !modal) {
        return;
    }

    currentProject = project;
    currentImageIndex = 0;

    modalKicker.textContent = project.kicker;
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modalTags.innerHTML = '';

    project.tags.forEach((tag) => {
        const tagElement = document.createElement('span');
        tagElement.textContent = tag;
        modalTags.appendChild(tagElement);
    });

    renderModalImage();
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
        formStatus.textContent = "Votre messagerie va s'ouvrir avec un email prérempli. L'envoi final se fait depuis votre application email.";
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
