# DAEtesting2

## Project Overview
This repository demonstrates waving behavior for child elements with blue color styling. The project showcases animated child elements within parent containers, where specific children exhibit a smooth waving animation with distinctive blue styling.

## Features

### ✨ Waving Child Elements
- **Wave Animation**: Child elements with the `.waving` class display a smooth, continuous waving motion
- **Blue Styling**: Waving children are styled with a blue gradient background and matching border
- **Staggered Animation**: Multiple waving children animate in sequence for a cascading wave effect
- **Interactive Controls**: Toggle the waving behavior on/off with a button
- **Mixed Containers**: Support for containers with both waving and static children

### 🎨 Visual Design
- Modern gradient backgrounds (blue color scheme for waving elements)
- Smooth animations and transitions
- Responsive layout that works on all screen sizes
- Interactive hover effects
- Box shadows and depth effects for visual appeal

## Project Setup

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required - pure HTML, CSS, and JavaScript

### Installation Steps
1. Clone the repository
   ```bash
   git clone https://github.com/miamanav/DAEtesting2.git
   cd DAEtesting2
   ```

2. Open the application
   ```bash
   # Simply open index.html in your browser
   # On Linux/Mac:
   open index.html
   
   # Or use a local server (optional):
   python3 -m http.server 8000
   # Then visit http://localhost:8000
   ```

## File Structure

```
DAEtesting2/
├── index.html      # Main HTML structure with parent and child elements
├── styles.css      # CSS with blue styling and wave animations
├── script.js       # JavaScript for interactive waving behavior control
└── README.md       # Project documentation
```

## Implementation Details

### HTML Structure
The project uses a parent-child element hierarchy:
- **Parent Containers**: Hold groups of child elements
- **Child Elements**: Individual elements that can have waving behavior
- **Waving Class**: Children with the `.waving` class exhibit the wave animation and blue styling

### CSS Styling
- **Blue Color Theme**: 
  - Background: `linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)`
  - Border: `#3498db`
  - Box shadow with blue tint
- **Wave Animation**: Keyframe animation with rotation and vertical movement
- **Staggered Delays**: Each waving child has a different animation delay for the wave effect

### JavaScript Functionality
- **Dynamic Control**: Toggle waving animation on/off
- **Event Handlers**: Click interactions for all child elements
- **Helper Functions**: `addWavingBehavior()` and `removeWavingBehavior()` for programmatic control

## Usage Examples

### Adding Waving Behavior to an Element
```html
<div class="child waving">I will wave with blue styling!</div>
```

### Creating a Static Child (No Waving)
```html
<div class="child">I'm static (no blue, no waving)</div>
```

### Programmatically Toggle Waving
```javascript
// Add waving behavior
addWavingBehavior(document.querySelector('.child'));

// Remove waving behavior
removeWavingBehavior(document.querySelector('.child.waving'));
```

## Browser Compatibility
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## Development

### Customization
You can customize the waving behavior by modifying:
- **Animation Speed**: Change `2s` in the `animation` property (styles.css, line 73)
- **Animation Style**: Modify the `@keyframes wave` definition (styles.css, lines 76-94)
- **Blue Color**: Update the gradient colors in `.child.waving` (styles.css, lines 70-71)
- **Delay Pattern**: Adjust `animation-delay` values (styles.css, lines 97-117)

### Testing
Open the page in a browser and verify:
1. ✅ Waving children display blue gradient background
2. ✅ Wave animation runs smoothly
3. ✅ Static children remain gray (no blue)
4. ✅ Toggle button pauses/resumes animation
5. ✅ Click interactions work on all children

## License
MIT License
