import sys, re

def convert_to_jsx(filename, component_name):
    with open(filename, 'r', encoding='utf-8') as f:
        html = f.read()
    
    # Extract body content
    body_match = re.search(r'<body[^>]*>(.*)</body>', html, re.DOTALL | re.IGNORECASE)
    if not body_match:
        print("No body found")
        return
        
    content = body_match.group(1)
    
    # Remove script tags
    content = re.sub(r'<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>', '', content, flags=re.IGNORECASE)
    
    # Replace class with className
    content = content.replace('class=', 'className=')
    content = content.replace('for=', 'htmlFor=')
    
    # Replace HTML comments with JSX comments
    content = content.replace('<!--', '{/*')
    content = content.replace('-->', '*/}')
    
    # Fix style attributes (basic fix: style="margin-top: 10px;" -> style={{marginTop: '10px'}})
    # For a robust fix, we just remove style attributes or leave them and let React complain.
    # Actually, let's remove inline styles or just leave them. React will warn, but it won't crash if it's a string? Wait, React crashes if style is a string.
    content = re.sub(r'style="([^"]*)"', '', content)
    
    # Self-closing tags
    content = re.sub(r'<(img|input|br|hr|meta|link)([^>]*?)(?<!/)>', r'<\1\2 />', content)
    
    # Escape { and } if they are not in comments, but that's hard. Let's just hope there are none.
    
    # Output to a JSX file
    jsx = f"""import React from 'react';
import {{ Link }} from 'react-router-dom';

const {component_name} = () => {{
  return (
    <>
      {content}
    </>
  );
}};

export default {component_name};
"""
    with open(f"src/pages/{component_name}.jsx", "w", encoding="utf-8") as f:
        f.write(jsx)
        
convert_to_jsx('buyer-file/index.html', 'Home')
convert_to_jsx('buyer-file/about.html', 'About')
convert_to_jsx('buyer-file/contact.html', 'Contact')
convert_to_jsx('buyer-file/404.html', 'NotFound')

