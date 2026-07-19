import os, re

replacements = {
    "Arlux- Hotel & Resort Booking HTML Template": "Shagunshri Homestay",
    "Arlux- Hotel & Resort": "Shagunshri Homestay",
    "Arlux": "Shagunshri",
    "Luxery Hotel": "Shagunshri Homestay",
    "Beach  Hotel": "Comfortable Stay",
    "City  Hotel": "Peaceful Stay",
    "Luxery": "Comfortable",
    "Luxury": "Comfortable",
    "+208-6666-0112": "9425904786",
    "+11002345909": "9425904786",
    "0 800 555 44 33": "9425904786",
    "info@example.com": "tsb.73540@gmail.com",
    "Elgin Street, 6391, Celina, Delaware": "60/A, Bank Colony, Subhash Nagar, Ujjain",
    "Main Street, Melbourne, Australia": "60/A, Bank Colony, Subhash Nagar, Ujjain",
    "Mod-friday, 09am -05pm": "Check-in: 12 PM | Check-out: 11 AM",
    "Reste’s Rooms & Suites": "Shagunshri's Rooms",
    "Experience a Luxurious Hotel Stay Comfort and Style": "Your Comfortable Stay in Ujjain",
    "Indulge in a luxurious hotel stay where comfort meets style, offering world-class amenities, elegant design, and exceptional personalized service.": "Relax in clean, comfortable AC & Non-AC rooms near the heart of Ujjain. Experience warm hospitality and a peaceful environment for you and your family.",
    'href="#"': 'href="/"',
    'href="index.html"': 'href="/"',
    'href="about.html"': 'href="/about"',
    'href="contact.html"': 'href="/contact"'
}

pages = ['src/pages/Home.jsx', 'src/pages/About.jsx', 'src/pages/Contact.jsx', 'src/pages/NotFound.jsx', 'index.html']
for page in pages:
    if not os.path.exists(page):
        continue
    with open(page, 'r', encoding='utf-8') as f:
        content = f.read()
    
    for old, new in replacements.items():
        content = content.replace(old, new)
        
    with open(page, 'w', encoding='utf-8') as f:
        f.write(content)

