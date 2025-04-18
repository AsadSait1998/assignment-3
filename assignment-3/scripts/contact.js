// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the submit button and contact page elements
    const submitButton = document.getElementById('submit-button');
    const contactPage = document.getElementById('contact-page');
    
    // Add click event listener to the submit button
    submitButton.addEventListener('click', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();
        
        // Clear all content from the contact page
        contactPage.innerHTML = '';
        
        // Create a new paragraph element for the thank you message
        const thankYouMessage = document.createElement('p');
        
        // Set the text content to match what's shown in the screenshot
        thankYouMessage.textContent = 'Thank you for your message';
        
        // Set the font size to 24px to match the requirement
        thankYouMessage.style.fontSize = '24px';
        
        // Center the message vertically and horizontally like in screenshot
        thankYouMessage.style.display = 'flex';
        thankYouMessage.style.justifyContent = 'center';
        thankYouMessage.style.alignItems = 'center';
        thankYouMessage.style.height = '100%';
        
        // Add the message to the contact page
        contactPage.appendChild(thankYouMessage);
    });
});

