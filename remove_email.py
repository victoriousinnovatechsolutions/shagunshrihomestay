import os

pages = ['src/pages/Home.jsx', 'src/pages/About.jsx', 'src/pages/Contact.jsx', 'src/pages/NotFound.jsx']

for page in pages:
    if not os.path.exists(page):
        continue
    with open(page, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Let's just find "tsb.73540@gmail.com"
    # To remove the containing <li>, we can split by "<li" and "</li>"
    parts = content.split('<li')
    new_parts = [parts[0]]
    
    for part in parts[1:]:
        if '</li>' in part:
            li_content, rest = part.split('</li>', 1)
            # Only keep the <li> if it DOES NOT contain the email
            if 'tsb.73540@gmail.com' not in li_content:
                new_parts.append('<li' + li_content + '</li>' + rest)
            else:
                new_parts.append(rest)
        else:
            new_parts.append('<li' + part)
            
    content = "".join(new_parts)
    
    with open(page, 'w', encoding='utf-8') as f:
        f.write(content)

