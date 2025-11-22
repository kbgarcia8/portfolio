// ! CSS PIXELS VS REAL PIXELS — IMPORTANT
// ? CSS "px" is NOT the same as a device’s hardware pixels.
// * CSS pixels = abstract units used by browsers for consistent sizing.
// * Device pixels = the physical dots on the screen.
// ? Modern screens (Retina, HiDPI) map multiple device pixels to ONE CSS pixel.
//   Example: MacBook Air with a scale factor of 2:
//      1 CSS pixel = 2 × 2 hardware pixels (4 physical pixels)

// ! VIEWPORT SIZE ≠ SCREEN RESOLUTION
// * CSS breakpoints use the VIEWPORT WIDTH, not the actual hardware resolution.
// * A laptop with 2560px hardware width might only have a ~1280px CSS viewport
//   because macOS scales the UI (devicePixelRatio = 2).

// ? Why your media.desktop may not trigger:
// * Even if your display is “large”, the **CSS viewport** might only be 1280px,
//   meaning breakpoints like min-width: 1400px won’t fire.

// * Always check `window.innerWidth` (CSS px) when debugging breakpoints.

// ! CSS PX — BEST PRACTICES
// * Use REM for scalable text (1rem = root font-size).
// * Use px for sharp UI edges (borders, hairlines).
// * Use % or flexbox for layout instead of px-based heights.
// * Use responsive units for spacing: rem, %, vw, flexbox growth.

// ? QUICK CHEAT SHEET
// CSS px = what media queries use
// Device px = physical display dots (ignore for layout)
// Breakpoints respond to CSS px only
// MacBooks typically have 1280–1440 CSS px viewport widths even if hardware is 2560px+

export const breakpoints ={
    mobile: '320px', //Small iPhone SE & Medium: iPhone 12-15
    tablet: '768px', //iPad 
    desktop: '992px', //Macbook 13" (1280x800)
    largeDesktop: '1200px',
    largerDesktop: '1400px'
}

export const lightTheme = {
    name: 'light',
    text: '#333446',
    bg: '#EEEEEE',
    blue: '#7F8CAA',
    blue2: '#80A6FF',
    teal: '#5b8280ff',
    teal2: '#AEEAE7',
    gray: '#AEAEAE',
    information: '#202234',
    success: '#123524',
    warning: '#F2C265',
    error: '#990000'
}

export const darkTheme = {
    name: 'dark',
    bg: '#333446',
    text: '#EEEEEE',
    blue: '#80A6FF',
    blue2: '#7F8CAA',
    teal: '#AEEAE7',
    teal2: '#5b8280ff',
    gray: '#D0D0DD',
    information: '#C9E6F0',
    success: '#9EDF9C',
    warning: '#FCFFC1',
    error: '#FAD4D4'
}