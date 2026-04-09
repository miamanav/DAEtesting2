# DAEtesting2

A simple web page with a dark mode toggle, built with plain HTML, CSS, and JavaScript -- no frameworks or dependencies required.

## Features

- **Dark mode toggle** -- click the button in the header to switch between light and dark themes
- **Persistent preference** -- your chosen theme is saved to `localStorage` and restored on the next visit
- **Smooth transitions** -- all color changes are animated with CSS transitions
- **Zero dependencies** -- works in any modern browser with no build step

## Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/miamanav/DAEtesting2.git
   cd DAEtesting2
   ```

2. Open `index.html` in your browser:
   ```bash
   open index.html        # macOS
   xdg-open index.html    # Linux
   start index.html       # Windows
   ```

   Or simply double-click the `index.html` file in your file explorer.

## How It Works

The page uses a CSS class (`dark`) on the `<body>` element to toggle between light and dark styles. A small JavaScript snippet listens for clicks on the toggle button, adds or removes the class, and persists the choice to `localStorage`.

## License

MIT
