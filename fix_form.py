import re

with open('src/pages/Contact.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

handler = """
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const emailBody = `
Booking Enquiry

Name: ${data.get('name') || data.get('author') || ''}
Email/Phone: ${data.get('email') || ''}
Message: ${data.get('message') || ''}
    `.trim();
    
    const mailtoLink = `mailto:tsb.73540@gmail.com?subject=New Booking Enquiry&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
  };
"""

content = content.replace('const Contact = () => {', f'const Contact = () => {{\n{handler}')
content = content.replace('<form action="#" id="contact-form" className="contact-form-box">', '<form onSubmit={handleSubmit} id="contact-form" className="contact-form-box">')

with open('src/pages/Contact.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

