document.addEventListener('DOMContentLoaded', () => {
    const movingBtn = document.getElementById('yes-btn-move');
    const container = document.querySelector('.no-options');

    // Function to calculate a random position within the container bounds
    function moveButton() {
        const containerRect = container.getBoundingClientRect();
        const btnRect = movingBtn.getBoundingClientRect();

        // Calculate maximum movement range
        // Subtract button size to ensure it stays fully inside the container
        const maxX = containerRect.width - btnRect.width - 60; // Extra padding
        const maxY = containerRect.height - btnRect.height - 60; // Extra padding

        // Generate a random position (between 0 and Max)
        // Add a small offset to prevent it from hugging the container edges
        const randomX = 30 + (Math.random() * maxX); 
        const randomY = 30 + (Math.random() * maxY);

        // Apply the new position
        movingBtn.style.left = `${randomX}px`;
        movingBtn.style.top = `${randomY}px`;
    }
    
    // Set initial position for the moving button (relative to the container)
    movingBtn.style.position = 'absolute';
    movingBtn.style.left = '10%'; 
    movingBtn.style.top = '30%';


    // Add event listener: when the mouse hovers over (or nearly over) the button
    movingBtn.addEventListener('mouseover', moveButton);
    movingBtn.addEventListener('click', (e) => {
        // Prevent the button from actually being clicked successfully
        e.preventDefault(); 
    });
});