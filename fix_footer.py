import re
import os

files = [
    'src/pages/Home.jsx',
    'src/pages/About.jsx',
    'src/pages/Contact.jsx',
    'src/pages/NotFound.jsx'
]

replacement = """<div className="footer-wrapper d-flex align-items-center justify-content-center text-center">
                    <p className="mb-0" style={{ fontSize: '15px' }}>
                        Copyright © 2026 Shagun Shri Homestay | Developed by <a href="https://victoriousinnovatechsolutions.com/" target="_blank" rel="noopener noreferrer">Victorious Innovatech Solutions</a>
                    </p>
                </div>"""

pattern = re.compile(r'<div className="footer-wrapper d-flex align-items-center justify-content-between">.*?</ul>\s*</div>', re.DOTALL)

for f in files:
    if os.path.exists(f):
        with open(f, 'r', encoding='utf-8') as file:
            content = file.read()
        
        new_content = pattern.sub(replacement, content)
        
        with open(f, 'w', encoding='utf-8') as file:
            file.write(new_content)
        print(f"Updated {f}")

