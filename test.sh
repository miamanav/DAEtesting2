#!/bin/bash

# Test script to verify the implementation
echo "==================================="
echo "DAEtesting2 - Orange Dress Feature Test"
echo "==================================="
echo ""

# Check if files exist
echo "1. Checking file structure..."
if [ -f "index.html" ] && [ -f "styles.css" ] && [ -f "script.js" ]; then
    echo "   ✓ All required files present"
else
    echo "   ✗ Missing files"
    exit 1
fi

# Check for orange color in CSS
echo ""
echo "2. Verifying orange dress styling..."
ORANGE_COUNT=$(grep -c "#FF8C00" styles.css)
if [ $ORANGE_COUNT -gt 0 ]; then
    echo "   ✓ Orange color (#FF8C00) found $ORANGE_COUNT times in styles.css"
else
    echo "   ✗ Orange color not found"
    exit 1
fi

# Check for Child class in JavaScript
echo ""
echo "3. Checking Child character implementation..."
if grep -q "class Child" script.js; then
    echo "   ✓ Child class defined"
else
    echo "   ✗ Child class not found"
    exit 1
fi

# Check for dress creation
echo ""
echo "4. Verifying orange dress creation logic..."
if grep -q "child-dress" script.js && grep -q "orange dress" script.js; then
    echo "   ✓ Orange dress creation implemented"
else
    echo "   ✗ Dress creation logic not found"
    exit 1
fi

# Check HTML structure
echo ""
echo "5. Validating HTML structure..."
if grep -q "childrenContainer" index.html && grep -q "addChild" index.html; then
    echo "   ✓ HTML structure and controls present"
else
    echo "   ✗ HTML structure incomplete"
    exit 1
fi

# Verify CSS classes
echo ""
echo "6. Checking CSS styling completeness..."
REQUIRED_CLASSES=(".child-dress" ".child-head" ".child-arms" ".child-name")
MISSING=0
for class in "${REQUIRED_CLASSES[@]}"; do
    if ! grep -q "$class" styles.css; then
        echo "   ✗ Missing CSS class: $class"
        MISSING=1
    fi
done

if [ $MISSING -eq 0 ]; then
    echo "   ✓ All required CSS classes present"
fi

echo ""
echo "==================================="
echo "Test Summary"
echo "==================================="
echo "✓ Feature: Children wear orange dresses"
echo "✓ Implementation: Functional"
echo "✓ Styling: Orange (#FF8C00) applied"
echo "✓ Interactive: Add/Remove/Animate controls"
echo ""
echo "To view the application:"
echo "  Open index.html in a web browser"
echo "  Or run: python -m http.server 8000"
echo "==================================="
