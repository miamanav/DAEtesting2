// Child character class
class Child {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.element = null;
    }

    // Create the child character DOM element
    createElement() {
        const childDiv = document.createElement('div');
        childDiv.className = 'child';
        childDiv.id = `child-${this.id}`;
        
        // Create child head
        const head = document.createElement('div');
        head.className = 'child-head';
        
        // Create eyes
        const eyes = document.createElement('div');
        eyes.className = 'child-eyes';
        const leftEye = document.createElement('div');
        leftEye.className = 'child-eye';
        const rightEye = document.createElement('div');
        rightEye.className = 'child-eye';
        eyes.appendChild(leftEye);
        eyes.appendChild(rightEye);
        head.appendChild(eyes);
        
        // Create smile
        const smile = document.createElement('div');
        smile.className = 'child-smile';
        head.appendChild(smile);
        
        // Create orange dress (main feature)
        const dress = document.createElement('div');
        dress.className = 'child-dress';
        
        // Create arms with orange sleeves
        const arms = document.createElement('div');
        arms.className = 'child-arms';
        const leftArm = document.createElement('div');
        leftArm.className = 'child-arm left';
        const rightArm = document.createElement('div');
        rightArm.className = 'child-arm right';
        arms.appendChild(leftArm);
        arms.appendChild(rightArm);
        dress.appendChild(arms);
        
        // Create name label
        const nameLabel = document.createElement('div');
        nameLabel.className = 'child-name';
        nameLabel.textContent = this.name;
        
        // Assemble child character
        childDiv.appendChild(head);
        childDiv.appendChild(dress);
        childDiv.appendChild(nameLabel);
        
        this.element = childDiv;
        return childDiv;
    }

    // Toggle animation on the orange dress
    toggleAnimation() {
        if (this.element) {
            const dress = this.element.querySelector('.child-dress');
            const arms = this.element.querySelectorAll('.child-arm');
            dress.classList.toggle('animate');
            arms.forEach(arm => arm.classList.toggle('animate'));
        }
    }
}

// Global state
let children = [];
let childCounter = 0;
const childNames = [
    'Emma', 'Olivia', 'Sophia', 'Ava', 'Isabella',
    'Mia', 'Charlotte', 'Amelia', 'Harper', 'Evelyn',
    'Lily', 'Grace', 'Zoe', 'Chloe', 'Luna'
];

// Initialize with some children
function initialize() {
    const container = document.getElementById('childrenContainer');
    
    // Add initial children
    for (let i = 0; i < 3; i++) {
        const name = childNames[childCounter % childNames.length];
        const child = new Child(name, childCounter);
        children.push(child);
        container.appendChild(child.createElement());
        childCounter++;
    }
    
    console.log('DAEtesting2: Children in Orange Dresses feature initialized');
    console.log(`Initial children count: ${children.length}`);
}

// Add a new child
function addChild() {
    const container = document.getElementById('childrenContainer');
    const name = childNames[childCounter % childNames.length];
    const child = new Child(name, childCounter);
    
    children.push(child);
    const childElement = child.createElement();
    container.appendChild(childElement);
    
    // Add entrance animation
    childElement.style.opacity = '0';
    childElement.style.transform = 'scale(0.5)';
    setTimeout(() => {
        childElement.style.transition = 'all 0.5s ease';
        childElement.style.opacity = '1';
        childElement.style.transform = 'scale(1)';
    }, 10);
    
    childCounter++;
    console.log(`Child added: ${name} (Total: ${children.length})`);
    
    // Show message if many children
    if (children.length >= 10) {
        showMessage('Wow! That\'s a lot of children in orange dresses!');
    }
}

// Remove the last child
function removeChild() {
    if (children.length === 0) {
        showMessage('No children to remove!');
        return;
    }
    
    const container = document.getElementById('childrenContainer');
    const lastChild = children.pop();
    
    if (lastChild && lastChild.element) {
        // Add exit animation
        lastChild.element.style.transition = 'all 0.5s ease';
        lastChild.element.style.opacity = '0';
        lastChild.element.style.transform = 'scale(0.5)';
        
        setTimeout(() => {
            container.removeChild(lastChild.element);
        }, 500);
    }
    
    console.log(`Child removed (Remaining: ${children.length})`);
    
    if (children.length === 0) {
        showMessage('All children have been removed!');
    }
}

// Animate all children's dresses
function animateChildren() {
    if (children.length === 0) {
        showMessage('Add some children first!');
        return;
    }
    
    children.forEach((child, index) => {
        setTimeout(() => {
            child.toggleAnimation();
            
            // Stop animation after 3 seconds
            setTimeout(() => {
                child.toggleAnimation();
            }, 3000);
        }, index * 100); // Stagger the animation start
    });
    
    showMessage('Watch the orange dresses shimmer!');
}

// Show temporary message
function showMessage(text) {
    // Remove existing message if any
    const existingMsg = document.querySelector('.temp-message');
    if (existingMsg) {
        existingMsg.remove();
    }
    
    const message = document.createElement('div');
    message.className = 'temp-message';
    message.textContent = text;
    message.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: #FF8C00;
        color: white;
        padding: 15px 30px;
        border-radius: 25px;
        box-shadow: 0 4px 15px rgba(255, 140, 0, 0.5);
        z-index: 1000;
        font-weight: bold;
        animation: fadeInOut 3s ease-in-out;
    `;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.remove();
    }, 3000);
}

// Add CSS animation for messages
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInOut {
        0% { opacity: 0; transform: translateX(-50%) translateY(-20px); }
        20% { opacity: 1; transform: translateX(-50%) translateY(0); }
        80% { opacity: 1; transform: translateX(-50%) translateY(0); }
        100% { opacity: 0; transform: translateX(-50%) translateY(-20px); }
    }
`;
document.head.appendChild(style);

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
} else {
    initialize();
}

// Export for potential testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Child, addChild, removeChild, animateChildren };
}
