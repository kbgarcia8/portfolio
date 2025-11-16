import { css } from "styled-components";
import { breakpoints } from "styles/theme.js";

export const getScrollbarWidth = () => {
    const scrollDiv = document.createElement("div");
    scrollDiv.style.width = "100px";
    scrollDiv.style.height = "100px";
    scrollDiv.style.overflow = "scroll";
    scrollDiv.style.position = "absolute";
    scrollDiv.style.top = "-9999px";

    document.body.appendChild(scrollDiv);
    const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);

    return scrollbarWidth;
};

export function isLightColor(hex) {
    // Remove '#' if present
    hex = hex.replace('#', '');

    // Convert short hex (#abc) → full hex (#aabbcc)
    if (hex.length === 3) {
    hex = hex.split('').map(ch => ch + ch).join('');
    }

    // Convert to RGB values
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);

    // Calculate relative luminance (per ITU-R BT.709)
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    // A midpoint threshold (~128) works well
    return luminance > 128;
}

//INFO: media object is an example of using reduce with an object accumulator to produce dynamic properties/methods

export const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});