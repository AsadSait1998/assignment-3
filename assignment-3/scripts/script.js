// This is the main JavaScript file for the index.html page
// Based on the screenshots and requirements, no specific functionality is needed here
// But we'll add some basic initialization code

document.addEventListener('DOMContentLoaded', function() {
    console.log('Delilah\'s Doggy Daycare website loaded successfully');
    
    // Update the link in the header to point to where the site will be hosted
    // This needs to be updated with your actual GitHub Pages URL once deployed
    const headerLink = document.querySelector('header a');
    if (headerLink) {
        // Save the original URL to use as a fallback if needed
        const originalUrl = headerLink.getAttribute('href');
        
        // You'll need to replace this with your actual GitHub Pages URL when deployed
        // For now, it points to the same index.html (as required by the assignment)
        // Example: headerLink.href = "https://yourusername.github.io/lab-6/";
        
        // Note: We're keeping the original link for now
        // This comment serves as a reminder to update it after GitHub deployment
    }
});