import re
import os

pages = ['src/pages/Home.jsx', 'src/pages/About.jsx', 'src/pages/Contact.jsx', 'src/pages/NotFound.jsx']

for page in pages:
    if not os.path.exists(page):
        continue
    with open(page, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace any remaining href="something.html" with href="/"
    # (Since about/contact were already replaced with href="/about" etc.)
    # Also catch single quote versions just in case
    content = re.sub(r'href="[^"]+\.html"', 'href="/"', content)
    content = re.sub(r"href='[^']+\.html'", 'href="/"', content)
    
    with open(page, 'w', encoding='utf-8') as f:
        f.write(content)

