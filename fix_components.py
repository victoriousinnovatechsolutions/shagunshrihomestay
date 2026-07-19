import sys, re, os

def to_camel_case(k):
    parts = k.split('-')
    return parts[0] + ''.join(x.title() for x in parts[1:])

def style_to_object(match):
    style_str = match.group(1)
    props = style_str.split(';')
    obj_props = []
    for prop in props:
        if ':' in prop:
            k, v = prop.split(':', 1)
            k = to_camel_case(k.strip())
            v = v.strip().replace('"', "'") 
            obj_props.append(f"{k}: \"{v}\"")
    return "style={{" + ", ".join(obj_props) + "}}"

def convert_to_jsx(filename, component_name):
    with open(filename, 'r', encoding='utf-8') as f:
        html = f.read()
    
    body_match = re.search(r'<body[^>]*>(.*)</body>', html, re.DOTALL | re.IGNORECASE)
    if not body_match: return
    content = body_match.group(1)
    
    # Remove script tags
    content = re.sub(r'<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>', '', content, flags=re.IGNORECASE)
    
    # Clean up preloader and overlays by splitting at fix-area
    if '<div class="fix-area">' in content:
        content = '<div class="fix-area">' + content.split('<div class="fix-area">', 1)[1]
    
    # Replace class and for
    content = content.replace('class="', 'className="')
    content = content.replace("class='", "className='")
    content = content.replace('for="', 'htmlFor="')
    
    # Convert styles
    content = re.sub(r'style="([^"]*)"', style_to_object, content)
    
    # Convert HTML comments
    content = content.replace('<!--', '{/*')
    content = content.replace('-->', '*/}')
    
    # Self close tags
    content = re.sub(r'<(img|input|br|hr|meta|link)([^>]*?)(?<!/)>', r'<\1\2 />', content)
    
    jsx = f"import React from 'react';\n\nconst {component_name} = () => {{\n  return (\n    <>\n      {content}\n    </>\n  );\n}};\n\nexport default {component_name};\n"
    with open(f"src/pages/{component_name}.jsx", "w", encoding="utf-8") as f:
        f.write(jsx)

convert_to_jsx('buyer-file/index.html', 'Home')
convert_to_jsx('buyer-file/about.html', 'About')
convert_to_jsx('buyer-file/contact.html', 'Contact')
convert_to_jsx('buyer-file/404.html', 'NotFound')
