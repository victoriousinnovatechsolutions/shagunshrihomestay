import re
import os

files = [
    'src/pages/Home.jsx',
    'src/pages/About.jsx',
    'src/pages/Contact.jsx',
    'src/pages/NotFound.jsx'
]

# Regex to remove Rooms and Blog from Useful links
rooms_pattern = re.compile(r'<li>\s*<a href="[^"]*">\s*Rooms\s*</a>\s*</li>', re.DOTALL | re.IGNORECASE)
blog_pattern = re.compile(r'<li>\s*<a href="[^"]*">\s*Blog\s*</a>\s*</li>', re.DOTALL | re.IGNORECASE)

# Regex to remove Working Hours column
working_hours_pattern = re.compile(r'<div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="\.7s">\s*<div className="gt-footer-widget-items">\s*<div className="gt-widget-head">\s*<h3>Working Hours</h3>.*?</ul>\s*</div>\s*</div>', re.DOTALL)

for f in files:
    if os.path.exists(f):
        with open(f, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Apply replacements
        content = rooms_pattern.sub('', content)
        content = blog_pattern.sub('', content)
        content = working_hours_pattern.sub('', content)
        
        with open(f, 'w', encoding='utf-8') as file:
            file.write(content)
        print(f"Updated {f}")

