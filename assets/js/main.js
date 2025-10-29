const slider = document.querySelector('[data-slider]');
if (slider) {
    const track = slider.querySelector('.slider__track');
    const slides = Array.from(track.children);
    const prevBtn = slider.querySelector('.slider__control--prev');
    const nextBtn = slider.querySelector('.slider__control--next');
    const dotsContainer = slider.querySelector('.slider__dots');
    let currentIndex = 0;
    let autoPlayId;

    const createDots = () => {
        slides.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.className = 'slider__dot';
            dot.type = 'button';
            dot.setAttribute('role', 'tab');
            dot.setAttribute('aria-label', `${index + 1}. slayt`);
            dot.dataset.index = index;
            if (index === 0) {
                dot.setAttribute('aria-selected', 'true');
            }
            dotsContainer.appendChild(dot);
        });
    };

    const updateSlider = (index) => {
        currentIndex = (index + slides.length) % slides.length;
        const offset = -currentIndex * 100;
        track.style.transform = `translateX(${offset}%)`;
        dotsContainer.querySelectorAll('.slider__dot').forEach(dot => {
            dot.setAttribute('aria-selected', dot.dataset.index == currentIndex ? 'true' : 'false');
        });
    };

    const startAutoPlay = () => {
        autoPlayId = setInterval(() => {
            updateSlider(currentIndex + 1);
        }, 6000);
    };

    const stopAutoPlay = () => {
        clearInterval(autoPlayId);
    };

    createDots();
    startAutoPlay();

    nextBtn?.addEventListener('click', () => {
        stopAutoPlay();
        updateSlider(currentIndex + 1);
        startAutoPlay();
    });

    prevBtn?.addEventListener('click', () => {
        stopAutoPlay();
        updateSlider(currentIndex - 1);
        startAutoPlay();
    });

    dotsContainer.addEventListener('click', (event) => {
        if (event.target.matches('.slider__dot')) {
            stopAutoPlay();
            updateSlider(Number(event.target.dataset.index));
            startAutoPlay();
        }
    });

    slider.addEventListener('mouseenter', stopAutoPlay);
    slider.addEventListener('mouseleave', startAutoPlay);
}

const accordion = document.querySelector('[data-accordion]');
if (accordion) {
    accordion.addEventListener('click', (event) => {
        const trigger = event.target.closest('.accordion__trigger');
        if (!trigger) return;
        const item = trigger.parentElement;
        const panel = trigger.nextElementSibling;
        const expanded = trigger.getAttribute('aria-expanded') === 'true';
        trigger.setAttribute('aria-expanded', expanded ? 'false' : 'true');
        panel.hidden = expanded;
    });
}

const menuToggle = document.getElementById('menuToggle');
const offcanvas = document.getElementById('mobileMenu');
const closeCanvasBtn = document.querySelector('.offcanvas__close');

const toggleOffcanvas = () => {
    const isOpen = offcanvas.classList.toggle('is-open');
    offcanvas.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    document.body.style.overflow = isOpen ? 'hidden' : '';
};

menuToggle?.addEventListener('click', toggleOffcanvas);
closeCanvasBtn?.addEventListener('click', toggleOffcanvas);
offcanvas?.addEventListener('click', (event) => {
    if (event.target === offcanvas) {
        toggleOffcanvas();
    }
});

offcanvas?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        offcanvas.classList.remove('is-open');
        offcanvas.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    });
});

const goRegionBtn = document.getElementById('goRegion');
if (goRegionBtn) {
    goRegionBtn.addEventListener('click', () => {
        const region = document.getElementById('regionSelect').value;
        const brand = document.getElementById('brandSelect').value;
        if (region && brand) {
            window.location.href = `bolgeler/${region}.html#${brand}`;
        }
    });
}

const yearEl = document.getElementById('year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

const modalLinks = document.querySelectorAll('[data-modal]');
const modals = document.querySelectorAll('.modal');

const closeModal = (modal) => {
    modal.hidden = true;
    document.body.style.overflow = '';
};

modalLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const modalId = link.dataset.modal;
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.hidden = false;
            document.body.style.overflow = 'hidden';
        }
    });
});

modals.forEach(modal => {
    modal.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal') || event.target.closest('.modal__close')) {
            closeModal(modal);
        }
    });
});

const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        } else {
            entry.target.classList.remove('is-visible');
        }
    });
}, { threshold: 0.4 });

sections.forEach(section => {
    section.dataset.observeSection = '';
    observer.observe(section);
});

const brandAnchors = document.querySelectorAll('.brand-card[data-brand]');
brandAnchors.forEach(card => {
    card.addEventListener('click', () => {
        const link = card.querySelector('a');
        if (link) {
            window.location.href = link.href;
        }
    });
});

const track = document.querySelector('.review-marquee__track');
if (track) {
    track.innerHTML += track.innerHTML;
}
