import re
import os

def remove_section(content, section_comment):
    pattern = re.compile(r'\{/\* ' + re.escape(section_comment) + r' \*/\}.*?</section>', re.DOTALL | re.IGNORECASE)
    return pattern.sub('', content)

def process_file(filename):
    if not os.path.exists(filename):
        return
        
    with open(filename, 'r', encoding='utf-8') as file:
        content = file.read()
        
    # Remove News Sections
    content = remove_section(content, 'GT News Section Start')
    
    # Remove Room Section
    content = remove_section(content, 'GT Room Section Start')
    
    # Modify Theme word
    content = content.replace('Shagunshri Homestay Theme', 'Shagunshri Homestay')
    
    # Remove 'The Framework' in About.jsx
    if 'About.jsx' in filename:
        # User wants to remove "The Framework"
        content = re.sub(r'<h2[^>]*>\s*The Framework\s*</h2>', '', content)
        content = re.sub(r'<p[^>]*>\s*The Framework blends modern luxury.*?</p>', '', content, flags=re.DOTALL)
        
    with open(filename, 'w', encoding='utf-8') as file:
        file.write(content)
        
    print(f"Processed {filename}")

process_file('src/pages/Home.jsx')
process_file('src/pages/About.jsx')
process_file('src/pages/Contact.jsx')
