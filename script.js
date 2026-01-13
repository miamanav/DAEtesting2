// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get all waving children elements
    const wavingChildren = document.querySelectorAll('.child.waving');
    const toggleButton = document.getElementById('toggleWave');
    let isWaving = true;

    // Toggle waving behavior on button click
    toggleButton.addEventListener('click', function() {
        isWaving = !isWaving;
        
        wavingChildren.forEach(child => {
            if (isWaving) {
                child.classList.remove('paused');
                child.style.animationPlayState = 'running';
            } else {
                child.classList.add('paused');
                child.style.animationPlayState = 'paused';
            }
        });

        // Update button text
        toggleButton.textContent = isWaving ? 'Pause Waving' : 'Resume Waving';
    });

    // Add click handler to individual children for interaction
    const allChildren = document.querySelectorAll('.child');
    
    allChildren.forEach(child => {
        child.addEventListener('click', function() {
            if (this.classList.contains('waving')) {
                // Show info for waving children
                console.log('Clicked on waving child:', this.textContent);
                this.style.boxShadow = '0 8px 25px rgba(52, 152, 219, 0.8)';
                setTimeout(() => {
                    this.style.boxShadow = '0 4px 15px rgba(52, 152, 219, 0.4)';
                }, 300);
            } else {
                // Show info for non-waving children
                console.log('Clicked on static child:', this.textContent);
                this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
                setTimeout(() => {
                    this.style.boxShadow = 'none';
                }, 300);
            }
        });
    });

    // Log waving children count on load
    console.log(`Found ${wavingChildren.length} waving children with blue styling`);
    
    // Add hover effect enhancement for waving children
    wavingChildren.forEach(child => {
        child.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });

        child.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Initialize button text
    toggleButton.textContent = 'Pause Waving';
});

// Optional: Function to dynamically add waving behavior to elements
function addWavingBehavior(element) {
    if (element && element.classList.contains('child')) {
        element.classList.add('waving');
        console.log('Waving behavior added to:', element.textContent);
    }
}

// Optional: Function to remove waving behavior from elements
function removeWavingBehavior(element) {
    if (element && element.classList.contains('waving')) {
        element.classList.remove('waving');
        console.log('Waving behavior removed from:', element.textContent);
    }
}

// Export functions for potential use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        addWavingBehavior,
        removeWavingBehavior
    };
}
