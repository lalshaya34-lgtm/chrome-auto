# Chrome Auto Clicker

This repo contains a Chromebook-friendly Chrome extension that clicks automatically on web pages.

## What it does

- Starts and stops an auto clicker from the extension popup
- Works on normal Chrome web pages
- Can click at the current cursor position or at a CSS selector you choose
- Good for repeated clicking tasks on websites during class, testing, or simple automation

## Install on a Chromebook

1. Download this repo as a ZIP file from GitHub.
2. Open Chrome on your Chromebook.
3. Go to `chrome://extensions`.
4. Turn on `Developer mode`.
5. Click `Load unpacked`.
6. Select the folder that contains `manifest.json`.
7. The extension icon will appear in Chrome.
8. Open any normal webpage and click the extension icon.
9. Set the interval, choose a mode, and press Start.

## Click modes

- `Current cursor position`: the extension clicks where the mouse is currently pointing.
- `CSS selector`: the extension clicks the first matching element, such as `button`, `.buy-button`, or `#start`.

## Example CSS selectors

- `button`
- `.primary-button`
- `#start-btn`
- `a[href*="next"]`

## Notes

- This works on normal web pages.
- It does not work on Chrome system pages like `chrome://` or `chrome-extension://` pages.
- For a reliable click target, use a CSS selector that matches a unique button or link.

## Files

- `manifest.json` — browser extension config
- `popup.html` — popup UI
- `popup.css` — styles
- `popup.js` — popup logic
- `content.js` — the actual click loop

## Quick use

1. Open a webpage.
2. Click the extension icon.
3. Type `1000` in the interval box for 1 second.
4. Choose `CSS selector` and use something like `button`.
5. Press Start.

This creates a simple auto clicker you can install locally on a Chromebook.
