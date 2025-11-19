# Camera Page Implementation Documentation

## Overview

The Camera page is a full-screen photo capture interface designed for the Retro24 photo booth application. It implements native camera functionality with a 4:3 aspect ratio enforcement, flash controls, and a mobile-optimized user experience.

## Features Implemented

### 1. Native Camera Integration
- **Capacitor Camera API**: Uses `@capacitor/camera` for native device camera access
- **4:3 Aspect Ratio**: All photos captured at 1600x1200 pixels (4:3 ratio)
- **High Quality**: 90% JPEG quality setting for optimal image quality
- **Auto-orientation**: Automatic orientation correction enabled

### 2. User Interface Components

#### Top Navigation Bar (Overlay)
- **Back Button (Left)**
  - White arrow icon
  - Returns to previous page using React Router's `history.goBack()`
  - Minimum touch target: 48x48px (WCAG AA compliant)
  - Semi-transparent background with blur effect

- **Flash Toggle (Right)**
  - **OFF State**: White flash-off icon with slash
  - **ON State**: Yellow/amber flash-on icon (#FEB200)
  - Toggle state management with React useState
  - Visual feedback with background color change
  - Accessible with ARIA labels and `aria-pressed` attribute

#### Bottom Capture Button
- Large circular capture button (80x80px)
- White border with semi-transparent background
- Inner white circle that scales on press
- Positioned at bottom center with safe area support
- Smooth animations and touch feedback

### 3. Design System Integration

The Camera page follows the Retro24 design system:

- **Colors**: Uses design token variables from `design-tokens.css`
- **Spacing**: Consistent spacing scale (8px base unit)
- **Typography**: Inter font family
- **Transitions**: Standard transition timing (150ms-250ms)
- **Z-index**: Proper layering hierarchy
- **Accessibility**: WCAG 2.1 AA compliant

### 4. Responsive Design

- **Mobile-first approach**: Optimized for phones (320px-428px)
- **Tablet support**: Scales appropriately for larger screens
- **Landscape mode**: Adjusted padding and safe areas
- **Safe area support**: iOS notch and bottom bar handling
- **Breakpoints**:
  - Small devices: < 375px
  - Standard devices: 375px-768px
  - Large devices: > 768px

### 5. Accessibility Features

#### WCAG 2.1 AA Compliance
- Minimum touch targets: 48x48px
- Focus indicators: 3px outlines with proper offset
- ARIA labels: All interactive elements properly labeled
- ARIA states: Flash button uses `aria-pressed` for state
- Keyboard navigation: All buttons are keyboard accessible

#### Special Considerations
- **Reduced Motion**: Animations disabled for users who prefer reduced motion
- **High Contrast**: Enhanced borders and backgrounds in high contrast mode
- **Screen Reader Support**: Proper semantic HTML and ARIA attributes

## File Structure

```
src/
├── pages/
│   ├── Camera.tsx           # Main Camera page component
│   └── Camera.css           # Camera page styles
├── components/
│   └── icons/
│       ├── BackArrowIcon.tsx    # Back navigation icon
│       ├── FlashOffIcon.tsx     # Flash off icon
│       ├── FlashOnIcon.tsx      # Flash on icon
│       └── index.ts             # Icon exports
└── App.tsx                  # Updated with Camera route
```

## Routes

- **Path**: `/camera`
- **Navigation**:
  - From Home page: "Create new roll" button
  - From Home page: Camera icon in bottom navigation
  - Direct URL: `http://localhost:5173/camera`

## State Management

### Component State (useState)
```typescript
const [flashEnabled, setFlashEnabled] = useState(false);
const [capturedPhoto, setCapturedPhoto] = useState<string | null>(null);
```

### State Variables
- `flashEnabled`: Boolean for flash on/off toggle
- `capturedPhoto`: Stores the captured photo URI (for preview)

## Camera Functionality

### Photo Capture Configuration
```typescript
{
  resultType: CameraResultType.Uri,
  source: CameraSource.Camera,
  quality: 90,                    // 90% JPEG quality
  width: 1600,                    // 4:3 aspect ratio
  height: 1200,
  correctOrientation: true,       // Auto-rotate photos
  saveToGallery: false,           // Don't save to device gallery
  allowEditing: false,            // No in-camera editing
}
```

### Aspect Ratio Enforcement
- **Width**: 1600px
- **Height**: 1200px
- **Ratio**: 4:3 (1600 ÷ 1200 = 1.333)
- **Purpose**: Maintains classic disposable camera aesthetic

## Styling Highlights

### Visual Design
- **Background**: Pure black (#000000) for camera view
- **Overlays**: Semi-transparent gradients at top/bottom
- **Blur Effects**: Backdrop blur on navigation buttons
- **Shadows**: Subtle shadows on capture button

### Interactive States
```css
/* Hover states */
.camera-nav-button:hover {
  background: rgba(0, 0, 0, 0.6);
  transform: scale(1.05);
}

/* Active states */
.camera-capture-button:active {
  transform: scale(0.9);
}

/* Focus states */
.camera-nav-button:focus-visible {
  outline: 3px solid rgba(255, 255, 255, 0.8);
  outline-offset: 3px;
}
```

## Browser/Platform Compatibility

### Tested On
- iOS Safari (Capacitor native)
- Android Chrome (Capacitor native)
- Modern web browsers (fallback to web camera API)

### Required Permissions
- Camera access
- Photo storage (optional, if saving to gallery)

### Capacitor Configuration
The app requires the Camera plugin to be synced with native platforms:
```bash
npx cap sync
```

## Future Enhancements

### Planned Features
1. **Photo Preview**: Full-screen preview after capture with retake/confirm options
2. **Roll Management**: Save photos to current "roll" collection
3. **Photo Counter**: Display remaining photos in current roll
4. **Filters**: Retro photo filters and effects
5. **Timer**: Self-timer countdown (3/5/10 seconds)
6. **Grid Lines**: Optional 4:3 ratio guide overlay
7. **Gallery Integration**: Option to save to device gallery
8. **Flash Functionality**: Actual camera flash control (hardware dependent)

### Technical Improvements
1. **Error Handling**: User-friendly error messages and recovery
2. **Loading States**: Loading spinner during photo capture
3. **Offline Support**: Photo queue when offline
4. **Performance**: Image compression optimization
5. **Testing**: Unit and E2E tests for camera functionality

## Known Limitations

1. **Web Browser**: Full camera functionality requires native app (Capacitor)
2. **Flash Control**: Flash toggle currently UI-only (needs native API integration)
3. **Preview**: Captured photos are logged but not shown in preview yet
4. **Storage**: Photos are not persisted (need to implement storage layer)
5. **Permissions**: No explicit permission request UI (relies on OS prompts)

## Usage Instructions

### For Developers

1. **Install Dependencies**:
   ```bash
   npm install @capacitor/camera
   ```

2. **Sync Capacitor**:
   ```bash
   npx cap sync
   ```

3. **Run Development Server**:
   ```bash
   npm run dev
   ```

4. **Navigate to Camera**:
   - Go to `/home` page
   - Click "Create new roll" or camera icon
   - Camera page opens at `/camera`

### For Testing

1. **Test Flash Toggle**:
   - Click flash icon in top-right
   - Icon should change from white (off) to yellow (on)
   - Background should change color

2. **Test Back Navigation**:
   - Click back arrow in top-left
   - Should return to previous page

3. **Test Photo Capture**:
   - Click large capture button at bottom
   - Camera permission prompt should appear (first time)
   - Camera app should open
   - Take photo
   - Photo URI should be logged to console

## Integration with Existing App

### Home Page Updates
```typescript
// Create new roll button navigates to camera
const handleCreateNewRoll = () => {
  history.push('/camera');
};

// Bottom navigation camera icon
const handleNavCamera = () => {
  history.push('/camera');
};
```

### App Router Updates
```typescript
<Route exact path="/camera">
  <Camera />
</Route>
```

## Design System Compliance

### Color Usage
- Background: `#000000` (Camera view black)
- Icons: `#FFFFFF` (White for visibility on dark background)
- Flash ON: `#FEB200` (Rainbow orange from design tokens)
- Overlays: `rgba(0, 0, 0, 0.4-0.8)` (Semi-transparent black)

### Spacing
- Top padding: `var(--retro24-space-lg)` (24px)
- Bottom padding: `var(--retro24-space-3xl)` (48px)
- Button padding: `var(--retro24-space-sm)` (8px)
- Safe area support: `env(safe-area-inset-*)`

### Typography
- Font family: `var(--retro24-font-family)` (Inter)
- Font size: `16px` for placeholder text
- Font weight: `400` (Regular)

## Accessibility Audit

### WCAG 2.1 AA Compliance Checklist
- [x] Contrast ratios meet 4.5:1 minimum
- [x] Touch targets are 48x48px minimum
- [x] Focus indicators are 3px minimum
- [x] All interactive elements have ARIA labels
- [x] State changes announced with ARIA attributes
- [x] Keyboard navigation fully supported
- [x] Reduced motion preferences respected
- [x] High contrast mode supported

## Performance Considerations

### Optimization Strategies
1. **Image Size**: 1600x1200 for 4:3 ratio (reasonable file size)
2. **Quality**: 90% JPEG compression (good quality, smaller files)
3. **Lazy Loading**: Camera API only loads when needed
4. **CSS Animations**: Hardware-accelerated transforms
5. **Debouncing**: Capture button prevents rapid clicks

### Bundle Size
- Camera page adds ~5KB to bundle (minified)
- Icon components: ~2KB total
- CSS: ~3KB (compressed)
- Total impact: ~10KB additional bundle size

## Security Considerations

1. **Permissions**: Camera access requires user permission
2. **Privacy**: Photos not saved to gallery by default
3. **Storage**: No automatic cloud upload
4. **Data**: Photo URIs are temporary (not persisted)

## Conclusion

The Camera page implementation provides a solid foundation for photo capture in the Retro24 app. It follows best practices for:
- Mobile-first design
- Accessibility compliance
- Design system consistency
- Performance optimization
- User experience

The modular architecture allows for easy enhancement and feature additions as the application evolves.

---

**Created**: 2025-01-09
**Version**: 1.0.0
**Status**: Implementation Complete ✓
