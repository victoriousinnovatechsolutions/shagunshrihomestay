import re

nav_replacement = """<ul>
    <li>
        <a href="/">Home</a>
    </li>
    <li>
        <a href="/about">About Us</a>
    </li>
    <li>
        <a href="/contact">Contact Us</a>
    </li>
</ul>"""

footer_nav_replacement = """<ul>
    <li>
        <a href="/"><i className="fa-solid fa-chevrons-right"></i> Home</a>
    </li>
    <li>
        <a href="/about"><i className="fa-solid fa-chevrons-right"></i> About Us</a>
    </li>
    <li>
        <a href="/contact"><i className="fa-solid fa-chevrons-right"></i> Contact Us</a>
    </li>
</ul>"""

social_replacement = """<div className="gt-social-icon d-flex align-items-center">
    <a href="#"><i className="fa-brands fa-linkedin"></i></a>
</div>"""

footer_social_replacement = """<div className="social-icon d-flex align-items-center">
    <a href="#"><i className="fa-brands fa-linkedin"></i></a>
</div>"""

pages = ['src/pages/Home.jsx', 'src/pages/About.jsx', 'src/pages/Contact.jsx', 'src/pages/NotFound.jsx']

for page in pages:
    with open(page, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Terminology Overhaul
    content = re.sub(r'\bHotel\b', 'Homestay', content)
    content = re.sub(r'\bhotel\b', 'homestay', content)
    content = re.sub(r'\bHOTEL\b', 'HOMESTAY', content)
    content = re.sub(r'\bResort\b', 'Homestay', content)
    content = re.sub(r'\bresort\b', 'homestay', content)
    content = re.sub(r'\bRESORT\b', 'HOMESTAY', content)
    
    # Also fix some grammar like "a Homestay" instead of "an Hotel" if it exists
    content = content.replace('a Homestay', 'a homestay').replace('A Homestay', 'A homestay') # Just lowercase homestay in middle of sentences? Actually, leave case as matched by regex.
    content = content.replace('an homestay', 'a homestay')
    content = content.replace('An homestay', 'A homestay')
    
    # 2. Navigation Menu Simplification
    content = re.sub(r'<nav id="mobile-menu">\s*<ul>.*?</ul>\s*</nav>', f'<nav id="mobile-menu">\n{nav_replacement}\n</nav>', content, flags=re.DOTALL)
    
    # 3. Footer Links Simplification
    # Footer has two link widgets usually. Let's just find them by class.
    # The first one is typically "Quick Links" and the second "Services".
    content = re.sub(r'<ul className="footer-menu">.*?</ul>', footer_nav_replacement, content, flags=re.DOTALL)
    
    # 4. Social Media Pruning
    # Top bar social
    content = re.sub(r'<div className="gt-social-icon d-flex align-items-center">.*?</div>', social_replacement, content, flags=re.DOTALL)
    # Footer social
    content = re.sub(r'<div className="social-icon d-flex align-items-center">.*?</div>', footer_social_replacement, content, flags=re.DOTALL)

    with open(page, 'w', encoding='utf-8') as f:
        f.write(content)

