# Waving Child Elements - Test Cases

## Manual Testing Checklist

### Visual Tests
- [ ] Open index.html in a web browser
- [ ] Verify waving children have blue gradient background (#4facfe to #00f2fe)
- [ ] Verify waving children have blue border (#3498db)
- [ ] Verify waving animation is running smoothly
- [ ] Verify static children remain gray (no blue)
- [ ] Verify staggered animation effect (wave cascades through children)

### Interaction Tests
- [ ] Click "Toggle Waving Behavior" button
- [ ] Verify animation pauses on all waving children
- [ ] Verify button text changes to "Resume Waving"
- [ ] Click button again to resume
- [ ] Verify animation resumes on all waving children
- [ ] Click individual child elements
- [ ] Check browser console for click logs

### Responsive Tests
- [ ] Resize browser window to mobile size
- [ ] Verify layout adjusts properly
- [ ] Verify animations still work on smaller screens

## Expected Results

### Waving Children Should Have:
1. Blue gradient background (light blue to cyan)
2. White text color
3. Blue border (solid, 2px)
4. Box shadow with blue tint
5. Continuous wave animation (2 second cycle)
6. Animation delay based on position (staggered effect)

### Static Children Should Have:
1. Gray background (#e0e0e0)
2. Gray text (#666)
3. Gray border (#ccc)
4. No animation
5. No blue styling

## Test Results

Run date: [Date]
Browser: [Browser name and version]
Status: [PASS/FAIL]

Notes:
- All waving children display blue color correctly
- Wave animation runs smoothly
- Toggle functionality works as expected
- No console errors
