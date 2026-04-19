# 🌴 Highway Resort Website

A fully functional, production-ready luxury resort website built with pure HTML, CSS, and Vanilla JavaScript. Designed for a scalable, responsive, and premium user experience!

## 🚀 Live Demo
*(You can add your GitHub Pages link here once deployed! Example: `https://yourusername.github.io/highway-resort/`)*

---

## ✨ Features
- **Multi-Page Architecture**: Spread across 7 individual files structure (`Home`, `Rooms`, `Amenities`, `Gallery`, `Booking`, `Contact`, `Admin`) for superior SEO scalability.
- **Dynamic Booking System**: Powered by **Flatpickr** graphical calendars, checking validation dates dynamically and resolving directly to a structured WhatsApp URL Payload.
- **Data Persistence**: Eliminates the need for a backend by storing and tracking newly generated Rooms, pricing, and resort amenities locally within the browser `localStorage`.
- **Secret Administrator CMS**: A hidden interface accessed by rapidly clicking the website's logo exactly **5 times**. Allows for creating, reading, updating, and deleting rooms in real-time.
- **Premium Aesthetics**: Engineered with soft mint/slate-green color palettes inspired by Google Hotels, utilizing Glassmorphism and CSS Grid for layout structuring. Fully responsive on Mobile.

---

## 📂 File Structure
```text
/
├── index.html         # Landing Hero & Quick Booking
├── rooms.html         # Dynamic listing populated by JS
├── amenities.html     # Icon grid of facilities
├── gallery.html       # Image gallery with vanilla JS lightbox
├── booking.html       # Full reservation form with Flatpickr
├── contact.html       # Map embed & WhatsApp floating actions
├── admin.html         # Hidden CMS panel (password: admin123)
├── css/
│   └── style.css      # Single stylesheet utilizing variables
└── js/
    └── script.js      # Core logic, LocalStorage init, Lightbox
```

## 🛠️ How to Deploy on GitHub Pages
This site utilizes entirely **Relative Paths** (`href="css/style.css"`, `href="rooms.html"`) which means it is 100% ready for GitHub pages out of the box with zero routing configurations needed!

1. Upload all these files into a new GitHub Repository.
2. Go to **Settings > Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select the `main` (or `master`) branch and hit **Save**.
5. Within 2 minutes, your website will be live globally!

---

**Built with ❤️ and pure Vanilla Web Technologies.**
