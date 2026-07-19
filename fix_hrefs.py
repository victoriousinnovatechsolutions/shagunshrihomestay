import re
import os
import glob

files = glob.glob('src/**/*.jsx', recursive=True)

for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Only replace exact matching strings in hrefs
    content = content.replace('href="/"', 'href="/#/"')
    content = content.replace("href='/'", "href='/#/'")
    
    content = content.replace('href="/about"', 'href="/#/about"')
    content = content.replace("href='/about'", "href='/#/about'")
    
    content = content.replace('href="/contact"', 'href="/#/contact"')
    content = content.replace("href='/contact'", "href='/#/contact'")
    
    with open(f, 'w', encoding='utf-8') as file:
        file.write(content)
        
    print(f"Updated links in {f}")

