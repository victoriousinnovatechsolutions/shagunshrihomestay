import re
import os

pages = ['src/pages/Home.jsx', 'src/pages/About.jsx', 'src/pages/Contact.jsx', 'src/pages/NotFound.jsx']

old_gt_social = """<div className="gt-social-icon d-flex align-items-center">
    <a href="/"><i className="fa-brands fa-linkedin"></i></a>
</div>"""

# Note: In the previous script, the href was "#", but then the clean_links.py script might have changed it if it had .html, but it was just "#".
# Let's use regex to be safe.

new_gt_social = """<div className="gt-social-icon d-flex align-items-center">
    <a href="https://www.instagram.com/shagunshri.homestay/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
</div>"""

new_footer_social = """<div className="social-icon d-flex align-items-center">
    <a href="https://www.instagram.com/shagunshri.homestay/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
</div>"""

for page in pages:
    if not os.path.exists(page):
        continue
    with open(page, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace top bar social
    content = re.sub(
        r'<div className="gt-social-icon d-flex align-items-center">\s*<a href="[^"]*"><i className="fa-brands fa-linkedin"></i></a>\s*</div>',
        new_gt_social,
        content,
        flags=re.DOTALL
    )
    
    # Replace footer social
    content = re.sub(
        r'<div className="social-icon d-flex align-items-center">\s*<a href="[^"]*"><i className="fa-brands fa-linkedin"></i></a>\s*</div>',
        new_footer_social,
        content,
        flags=re.DOTALL
    )
    
    with open(page, 'w', encoding='utf-8') as f:
        f.write(content)

