# minusclock
## "all you need is a simple clock"

**minusclock** is a minimalistic analog clock web app with a unique design philosophy: it "removes" all unnecessary information, focusing only on the essentials of time-telling. Instead of traditional clock hands, the clock uses simple geometric shapes and color cues for hours, minutes, and seconds, creating a visually striking and easy-to-read analog clock.

## Features

- **Minimal Analog Clock:**  
  - **Hour:** Large dot (black in light mode, white in dark mode)
  - **Minute:** Red dot
  - **Second:** Blue line
- **Dark & Light Modes:** Toggle between dark and light themes using the moon/sun icon.
- **Fullscreen Mode:** Expand the clock to fullscreen for a distraction-free experience.
- **Responsive Design:** Works on desktop and mobile browsers.


## Usage

Just open `index.html` in your browser.  
No dependencies or installation required.

## How it Works

- The clock is rendered on a `<canvas>` element using JavaScript (`script.js`).
- The hour, minute, and second are represented visually:
  - Hour: Large dot on the clock face.
  - Minute: Smaller red dot.
  - Second: Blue line from the center.
- Theme toggling is handled via a button in the bottom left corner.
- Fullscreen mode is activated via the fullscreen icon.

## File Structure

- `index.html` — Main HTML page.
- `style.css` — Styling for dark/light modes, layout, and controls.
- `script.js` — Handles drawing the clock, theme toggling, and fullscreen behavior.
- `favicon.svg` — Favicon for browser tabs.

## Customization

You can easily tweak the clock’s appearance by modifying `style.css` (colors, sizes) and `script.js` (drawing logic).

## License

[MIT License](LICENSE)

---

Created by [aeratory678](https://github.com/aeratory678)
