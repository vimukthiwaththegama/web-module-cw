document.addEventListener('DOMContentLoaded', function() {
    // Get all node elements
    const nodes = document.querySelectorAll('.node, .sub-node');
    
    // Add keyboard navigation functionality
    nodes.forEach(node => {
        // Handle keyboard events
        node.addEventListener('keydown', function(event) {
            // Enter key to follow link
            if (event.key === 'Enter') {
                const link = node.querySelector('a');
                if (link) {
                    link.click();
                }
            }
        });
        
        // Mouse enter event - could add additional features here
        node.addEventListener('mouseenter', function() {
            // Optional: Could add tooltip or other hover effects
        });
        
        // Mouse leave event
        node.addEventListener('mouseleave', function() {
            // Reset any hover-specific states
        });
    });
    
    // Make sure SVG is responsive
    const svg = document.getElementById('sitemap');
    
    // Function to adjust SVG viewBox on window resize
    function adjustSvgViewBox() {
        const containerWidth = svg.parentElement.clientWidth;
        if (containerWidth < 600) {
            // Adjust viewBox for smaller screens if needed
            svg.setAttribute('viewBox', '0 0 1000 700');
        } else {
            // Reset to original viewBox
            svg.setAttribute('viewBox', '0 0 1000 600');
        }
    }
    
    // Initial call and set up resize listener
    adjustSvgViewBox();
    window.addEventListener('resize', adjustSvgViewBox);
});