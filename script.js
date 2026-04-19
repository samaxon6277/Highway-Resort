// Initial Data Setup for LocalStorage
const defaultRooms = [
    {
        id: 1,
        name: "Deluxe Ocean View",
        price: 250,
        image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80",
        features: ["King Bed", "Ocean View", "Balcony", "Free WiFi"],
        description: "Experience luxury with a stunning view of the ocean."
    },
    {
        id: 2,
        name: "Premium Garden Suite",
        price: 180,
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
        features: ["Queen Bed", "Garden View", "Bathtub", "Free WiFi"],
        description: "A serene suite surrounded by lush gardens."
    },
    {
        id: 3,
        name: "Presidential Villa",
        price: 800,
        image: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=800&q=80",
        features: ["2 King Beds", "Private Pool", "Butler Service", "Ocean Front"],
        description: "The ultimate luxury experience with unparalleled privacy."
    },
    {
        id: 4,
        name: "Family Comfort Room",
        price: 320,
        image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
        features: ["2 Queen Beds", "Spacious Layout", "Kid-Friendly", "Free WiFi"],
        description: "Perfect for families looking for comfort and space."
    }
];

const defaultAmenities = [
    { name: "Infinity Pool", icon: "fas fa-swimmer", description: "Temperature-controlled outdoor pool." },
    { name: "Luxury Spa", icon: "fas fa-spa", description: "A full range of refreshing treatments." },
    { name: "Fine Dining", icon: "fas fa-utensils", description: "Multi-cuisine restaurant." },
    { name: "Free High-Speed WiFi", icon: "fas fa-wifi", description: "Stay connected anywhere." },
    { name: "Fitness Centre", icon: "fas fa-dumbbell", description: "State-of-the-art gym equipment." },
    { name: "24/7 Room Service", icon: "fas fa-concierge-bell", description: "Round-the-clock service." },
    { name: "Conference Hall", icon: "fas fa-handshake", description: "Perfect for events and meetings." },
    { name: "Complimentary Breakfast", icon: "fas fa-coffee", description: "Daily buffet breakfast." },
    { name: "Valet Parking", icon: "fas fa-parking", description: "Secure on-site parking." }
];

function initializeData() {
    if (!localStorage.getItem('rooms')) {
        localStorage.setItem('rooms', JSON.stringify(defaultRooms));
    }
    if (!localStorage.getItem('amenities')) {
        localStorage.setItem('amenities', JSON.stringify(defaultAmenities));
    }
}

// Logo Click for Admin Panel (5 clicks)
let logoClickCount = 0;
let logoClickTimer;

function setupAdminAccess() {
    const logo = document.getElementById('resort-logo');
    if (logo) {
        logo.addEventListener('click', (e) => {
            logoClickCount++;
            
            clearTimeout(logoClickTimer);
            logoClickTimer = setTimeout(() => {
                logoClickCount = 0;
            }, 2000);
            
            if (logoClickCount >= 5) {
                e.preventDefault();
                window.location.href = 'admin.html';
                logoClickCount = 0;
            }
        });
    }
}

// Mobile Navigation Toggle
function setupMobileNav() {
    const toggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (toggle && navLinks) {
        toggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initializeData();
    setupAdminAccess();
    setupMobileNav();
});
