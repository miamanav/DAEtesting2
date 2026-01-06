# DAEtesting2

## Project Overview
This repository contains an interactive web application that demonstrates children characters wearing orange dresses. The application provides a visual and functional representation of children styled with orange dress styling.

## Features

### Orange Dress Styling for Children
- **Visual Representation**: Children characters are rendered with distinctive orange dresses (#FF8C00)
- **Interactive Controls**: Add or remove children dynamically
- **Animation Effects**: Watch the orange dresses shimmer with animation
- **Responsive Design**: Works on various screen sizes

### Key Components
1. **Child Character Class**: Object-oriented representation of each child
2. **Orange Dress Rendering**: CSS-based styling for the signature orange dresses
3. **Dynamic Management**: Add/remove children in real-time
4. **Animation System**: Interactive dress animation effects

## Project Setup

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required - pure HTML/CSS/JavaScript

### Installation Steps
1. Clone the repository
   ```bash
   git clone https://github.com/miamanav/DAEtesting2.git
   cd DAEtesting2
   ```

2. Open the application
   ```bash
   # Simply open index.html in your web browser
   # On Linux/Mac:
   open index.html
   
   # Or start a simple local server:
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

## Usage

### Basic Operations
- **Add Child**: Click the "Add Child" button to add a new child character with an orange dress
- **Remove Child**: Click the "Remove Child" button to remove the last child
- **Animate Dresses**: Click "Animate Dresses" to see the orange dresses shimmer

### Technical Details
- **Orange Color Code**: #FF8C00 (Dark Orange)
- **Architecture**: Vanilla JavaScript with CSS3 animations
- **No External Dependencies**: Self-contained application

## File Structure
```
DAEtesting2/
├── index.html      # Main HTML structure
├── styles.css      # Orange dress styling and visual design
├── script.js       # Child character logic and interactivity
└── README.md       # Project documentation
```

## Development

### Extending the Feature
The code is organized for easy extension:
- Modify `Child` class in `script.js` to change character attributes
- Update `.child-dress` styles in `styles.css` to customize the orange dress appearance
- Add new interactions by extending the control functions

### Customization
To change the orange dress color, update the following in `styles.css`:
```css
.child-dress {
    background: #FF8C00; /* Change this color */
}
```

## Implementation Notes
- All children automatically wear orange dresses upon creation
- Each child has a unique name from a predefined list
- The orange dress includes decorative elements and animated sleeves
- Hover effects provide interactive feedback
