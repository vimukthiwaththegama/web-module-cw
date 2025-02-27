// Handle contact form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        
        if (!name || !email || !message) {
            alert('Please fill out all fields in the contact form.');
            return;
        }
        
        // Simulate form submission (in a real app, you'd send this to a server)
        alert(`Thank you for your message, ${name}! We'll respond to ${email} as soon as possible.`);
        
        // Reset form
        contactForm.reset();
    });
}