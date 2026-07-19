import re
import os

pages = ['src/pages/Home.jsx', 'src/pages/About.jsx', 'src/pages/Contact.jsx', 'src/pages/NotFound.jsx']

for page in pages:
    if not os.path.exists(page):
        continue
    with open(page, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Fix the remaining dummy addresses
    content = content.replace('43 Sardinella, 3nd Land Walk, Orchard view, London, UK', '60/A, Bank Colony, Subhash Nagar, Ujjain')
    content = content.replace('UK, 1212; 102/B New Elephant Road London', '60/A, Bank Colony, Subhash Nagar, Ujjain')
    
    # Fix all tel links to point to the correct number
    content = re.sub(r'href="tel:[^"]*"', 'href="tel:+919425904786"', content)
    
    with open(page, 'w', encoding='utf-8') as f:
        f.write(content)

