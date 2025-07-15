lucide.createIcons();

// Usunęliśmy cały blok kodu 'smooth-scroll', ponieważ CSS teraz tym zarządza.

// Efekt zmiany tła nagłówka przy przewijaniu
window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

// Efekt pojawiania się elementów przy przewijaniu
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.2, // Element musi być widoczny w 20%
    rootMargin: "0px 0px -50px 0px" // Przesunięcie aktywacji animacji
};

const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
) {
        entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        entry.target.classList.add('visible');
        appearOnScroll.unobserve(entry.target);
        });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Logika do obsługi chatbota
document.addEventListener('DOMContentLoaded', () => {
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotWindow = document.getElementById('chatbot-window');
    const closeChatbot = document.getElementById('close-chatbot');
    const openChatbotContact = document.getElementById('open-chatbot-contact');

    // Funkcja otwierająca chatbota
    const openChat = (e) => {
        e.preventDefault();
        if (chatbotWindow) {
            chatbotWindow.classList.remove('hidden');
        }
    };

    // Funkcja zamykająca chatbota
    const closeChat = () => {
        if (chatbotWindow) {
            chatbotWindow.classList.add('hidden');
        }
    };

    // Nasłuchiwanie na kliknięcie ikony chatbota
    if (chatbotToggle) {
        chatbotToggle.addEventListener('click', openChat);
    }

    // Nasłuchiwanie na kliknięcie przycisku w sekcji kontaktowej
    if (openChatbotContact) {
        openChatbotContact.addEventListener('click', openChat);
    }

    // Nasłuchiwanie na kliknięcie przycisku zamykania
    if (closeChatbot) {
        closeChatbot.addEventListener('click', closeChat);
    }
});