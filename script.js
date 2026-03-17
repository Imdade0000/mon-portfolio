// Sélection des éléments DOM
const navbar = document.getElementById('navbar');
const themeToggle = document.getElementById('theme-toggle');
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const contactForm = document.getElementById('contact-form');
const scrollLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])'); // CORRECTION: Exclure les href="#" vides

// Navigation mobile
burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
});

// Thème clair/sombre
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Navigation sticky
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.padding = '15px 50px';
        navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.padding = '20px 50px';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Animation de défilement fluide - CORRECTION
scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Fermer le menu mobile si ouvert
        navLinks.classList.remove('active');
        
        const targetId = link.getAttribute('href');
        
        // CORRECTION: Vérifier que le targetId est valide
        if (targetId && targetId !== '#' && targetId.length > 1) {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const targetPosition = targetElement.offsetTop - 80;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Filtrage des projets
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Retirer la classe active de tous les boutons
        filterBtns.forEach(btn => btn.classList.remove('active'));
        
        // Ajouter la classe active au bouton cliqué
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            if (filter === 'tous') {
                card.style.display = 'block';
            } else {
                if (card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            }
        });
    });
});

// Validation du formulaire
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        // Validation du nom
        const nameInput = document.getElementById('name');
        const nameError = nameInput?.nextElementSibling;
        
        if (nameInput && nameInput.value.trim() === '') {
            if (nameError) nameError.textContent = 'Le nom est requis';
            isValid = false;
        } else if (nameError) {
            nameError.textContent = '';
        }

        // Validation de l'email
        const emailInput = document.getElementById('email');
        const emailError = emailInput?.nextElementSibling;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (emailInput && !emailPattern.test(emailInput.value)) {
            if (emailError) emailError.textContent = 'Email invalide';
            isValid = false;
        } else if (emailError) {
            emailError.textContent = '';
        }

        // Validation du message
        const messageInput = document.getElementById('message');
        const messageError = messageInput?.nextElementSibling;
        
        if (messageInput && messageInput.value.trim() === '') {
            if (messageError) messageError.textContent = 'Le message est requis';
            isValid = false;
        } else if (messageInput && messageInput.value.trim().length < 10) {
            if (messageError) messageError.textContent = 'Le message doit contenir au moins 10 caractères';
            isValid = false;
        } else if (messageError) {
            messageError.textContent = '';
        }

        // Si tout est valide, afficher un message de confirmation
        if (isValid) {
            alert('Votre message a été envoyé avec succès!');
            contactForm.reset();
        }
    });
}

// Animation apparition au scroll
const sections = document.querySelectorAll('section');

const revealSection = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.classList.add('section-visible');
    observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
});

sections.forEach(function (section) {
    sectionObserver.observe(section);
    section.classList.add('section-hidden');
});

// Animation de dévoilement pour les éléments du portfolio
document.addEventListener('DOMContentLoaded', () => {
    projectCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('fade-in');
        }, 100 * index);
    });
});

// Gestion de la modal pour les détails des projets - VERSION FINALE CORRIGÉE
document.addEventListener('DOMContentLoaded', function() {
    const projectLinks = document.querySelectorAll('.project-link');
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalMainImage = document.getElementById('modal-main-image');
    const modalThumbnails = document.getElementById('modal-thumbnails');
    const modalDescription = document.getElementById('modal-description');
    const closeModal = document.querySelector('.close-modal');
    const prevImgBtn = document.getElementById('prev-img');
    const nextImgBtn = document.getElementById('next-img');

    let currentImageIndex = 0;
    let projectImages = [];

    // Fonction pour changer l'image
    function changeImage(index) {
        if (projectImages.length === 0) return;
        
        if (index < 0) index = projectImages.length - 1;
        if (index >= projectImages.length) index = 0;
        
        currentImageIndex = index;
        modalMainImage.src = projectImages[index].trim();
        modalMainImage.alt = '';
        modalMainImage.title = '';
        
        // Mettre à jour les miniatures actives
        document.querySelectorAll('.thumbnail').forEach((thumb, idx) => {
            thumb.classList.toggle('active', idx === index);
        });
    }

    // Gestion des clics sur les liens de projet
    projectLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Récupérer les données du projet
            const projectCard = this.closest('.project-card');
            const projectTitle = projectCard.querySelector('h3').textContent;
            const projectDesc = this.getAttribute('data-description') || 'Aucune description disponible';
            const imagesStr = this.getAttribute('data-images');
            
            // Vérifications de sécurité
            if (!modal || !modalTitle || !modalMainImage || !modalThumbnails || !modalDescription) {
                console.error('Éléments de la modal introuvables');
                return;
            }
            
            if (imagesStr && imagesStr.trim()) {
                projectImages = imagesStr.split(',').map(img => img.trim()).filter(img => img.length > 0);
                currentImageIndex = 0;
                
                // CORRECTION FINALE: Nettoyer complètement le titre
                modalTitle.innerHTML = ''; // Vider d'abord
                modalTitle.textContent = projectTitle; // Puis ajouter le texte propre
                
                // Définir l'image principale
                if (projectImages.length > 0) {
                    modalMainImage.src = projectImages[0];
                    modalMainImage.alt = 'Image du projet';
                    modalMainImage.title = ''; // CORRECTION: Supprimer tout title
                    modalMainImage.style.display = 'block';
                }
                
                // CORRECTION: Description propre
                modalDescription.innerHTML = ''; // Vider d'abord
                modalDescription.textContent = projectDesc; // Puis ajouter la description
                
                // CORRECTION: Nettoyer et générer les miniatures
                modalThumbnails.innerHTML = ''; // Vider complètement
                
                if (projectImages.length > 1) {
                    projectImages.forEach((img, index) => {
                        const thumbnail = document.createElement('img');
                        thumbnail.src = img;
                        thumbnail.alt = 'Miniature';
                        thumbnail.title = ''; // CORRECTION: Pas de title
                        thumbnail.classList.add('thumbnail');
                        if (index === 0) thumbnail.classList.add('active');
                        
                        thumbnail.addEventListener('click', () => changeImage(index));
                        modalThumbnails.appendChild(thumbnail);
                    });
                    
                    // Afficher les boutons de navigation
                    if (prevImgBtn) prevImgBtn.style.display = 'block';
                    if (nextImgBtn) nextImgBtn.style.display = 'block';
                } else {
                    // Cacher les boutons de navigation s'il n'y a qu'une image
                    if (prevImgBtn) prevImgBtn.style.display = 'none';
                    if (nextImgBtn) nextImgBtn.style.display = 'none';
                }
                
                // Afficher la modal
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            } else {
                console.warn('Aucune image trouvée pour ce projet');
            }
        });
    });

    // Navigation entre images
    if (prevImgBtn) {
        prevImgBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            changeImage(currentImageIndex - 1);
        });
    }
    
    if (nextImgBtn) {
        nextImgBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            changeImage(currentImageIndex + 1);
        });
    }

    // Fermer la modal
    function closeModalFunction() {
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            
            // CORRECTION: Nettoyer complètement à la fermeture
            modalTitle.innerHTML = '';
            modalDescription.innerHTML = '';
            modalThumbnails.innerHTML = '';
            projectImages = [];
            currentImageIndex = 0;
        }
    }

    if (closeModal) {
        closeModal.addEventListener('click', closeModalFunction);
    }

    // Fermer en cliquant à l'extérieur
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModalFunction();
        }
    });

    // Fermer avec la touche Échap
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.style.display === 'block') {
            closeModalFunction();
        }
    });

    // Navigation au clavier dans la modal
    document.addEventListener('keydown', (e) => {
        if (modal && modal.style.display === 'block') {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                changeImage(currentImageIndex - 1);
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                changeImage(currentImageIndex + 1);
            }
        }
    });
});