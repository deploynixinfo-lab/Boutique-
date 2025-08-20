// Contact Form Functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    const formInputs = document.querySelectorAll('.contact-form input, .contact-form select, .contact-form textarea');

    // Form validation and submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Basic validation
        if (validateForm(data)) {
            // Simulate form submission
            showSuccessMessage();
            contactForm.reset();
        }
    });

    // Real-time validation
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            clearFieldError(this);
        });
    });

    // Form validation function
    function validateForm(data) {
        let isValid = true;
        
        // Check required fields
        if (!data.name || data.name.trim() === '') {
            showFieldError('name', 'Name is required');
            isValid = false;
        }
        
        if (!data.email || !isValidEmail(data.email)) {
            showFieldError('email', 'Please enter a valid email');
            isValid = false;
        }
        
        if (!data.location) {
            showFieldError('location', 'Please select a location');
            isValid = false;
        }
        
        if (!data.message || data.message.trim() === '') {
            showFieldError('message', 'Message is required');
            isValid = false;
        }
        
        return isValid;
    }

    // Field validation
    function validateField(field) {
        const value = field.value.trim();
        const fieldName = field.name;
        
        switch(fieldName) {
            case 'name':
                if (!value) {
                    showFieldError(fieldName, 'Name is required');
                }
                break;
            case 'email':
                if (!value || !isValidEmail(value)) {
                    showFieldError(fieldName, 'Please enter a valid email');
                }
                break;
            case 'location':
                if (!value) {
                    showFieldError(fieldName, 'Please select a location');
                }
                break;
            case 'message':
                if (!value) {
                    showFieldError(fieldName, 'Message is required');
                }
                break;
        }
    }

    // Email validation
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Show field error
    function showFieldError(fieldName, message) {
        const field = document.querySelector(`[name="${fieldName}"]`);
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.textContent = message;
        errorDiv.style.color = '#dc3545';
        errorDiv.style.fontSize = '0.8rem';
        errorDiv.style.marginTop = '4px';
        
        // Remove existing error
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
        
        field.parentNode.appendChild(errorDiv);
        field.style.borderColor = '#dc3545';
    }

    // Clear field error
    function clearFieldError(field) {
        const errorDiv = field.parentNode.querySelector('.field-error');
        if (errorDiv) {
            errorDiv.remove();
        }
        field.style.borderColor = '#e0e0e0';
    }

    // Show success message
    function showSuccessMessage() {
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.textContent = 'Thank you! Your message has been sent successfully.';
        successDiv.style.cssText = `
            background: #d4edda;
            color: #155724;
            padding: 12px 16px;
            border-radius: 8px;
            margin-top: 20px;
            text-align: center;
            font-weight: 500;
        `;
        
        contactForm.appendChild(successDiv);
        
        // Remove success message after 3 seconds
        setTimeout(() => {
            successDiv.remove();
        }, 3000);
    }

    // Social media icons hover effect
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.1)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}); 