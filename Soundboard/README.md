# Baseball Walk-Up Music Soundboard

A standalone web application for playing baseball walk-up music during games. Click a player button to play their walk-up song!

## Features

- **10 Player Buttons** - Easily expandable by editing the config file
- **Volume Control** - Master volume slider
- **Stop Button** - Instantly stop any playing audio
- **Lineup Management** - Create custom batting lineups with drag-and-drop reordering
- **View Modes** - Toggle between full roster and lineup view
- **Dark/Light Theme** - Toggle between themes for different lighting conditions
- **Keyboard Shortcuts** - Number keys 1-0 play players, Space/Esc stops audio
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Local Storage** - Saves lineup and preferences between sessions
- **No Server Required** - Pure HTML/CSS/JavaScript, works as static files

## Quick Start

1. Copy the entire `/Soundboard` folder to your website's repository
2. Add your audio files to the `/audio` folder
3. Edit `js/config.js` to configure your players
4. Access via: `yourusername.github.io/Soundboard/soundboard.html`

## File Structure

```
/Soundboard/
├── soundboard.html      # Main entry point
├── css/
│   └── styles.css       # All styling
├── js/
│   ├── app.js           # Application logic
│   └── config.js        # Player configuration (EDIT THIS)
├── audio/               # Audio files go here
│   ├── player1.mp3
│   ├── player2.mp3
│   └── ...
└── README.md            # This file
```

## Configuration

### Adding/Editing Players

Edit `js/config.js` to configure your players:

```javascript
const players = [
  {
    id: 1,                          // Unique ID (required)
    name: "John Smith",             // Display name (required)
    number: "24",                   // Jersey number (optional, use "" for none)
    audioFile: "audio/john.mp3",    // Path to audio file (required)
    active: true                    // Show in soundboard (required)
  },
  // Add more players...
];
```

### Adding Audio Files

1. Place audio files in the `/audio` folder
2. Supported formats: MP3, WAV, OGG
3. Update the `audioFile` path in `js/config.js`

**Recommended**: Use MP3 format for best browser compatibility and smaller file sizes.

### Expanding Beyond 10 Players

Simply add more player objects to the `players` array in `js/config.js`:

```javascript
const players = [
  // ... existing players ...
  {
    id: 11,
    name: "New Player",
    number: "99",
    audioFile: "audio/newplayer.mp3",
    active: true
  }
];
```

## Deploying to GitHub Pages

1. Create a repository on GitHub (e.g., `my-website`)
2. Copy the entire `/Soundboard` folder into your repository
3. Enable GitHub Pages in repository Settings > Pages
4. Access your soundboard at: `yourusername.github.io/my-website/Soundboard/soundboard.html`

**Direct repository deployment:**
If the Soundboard folder is at the root of your repository:
`yourusername.github.io/Soundboard/soundboard.html`

## Usage During Games

### Basic Playback
- Click any player button to play their walk-up music
- Click the **Stop** button or press **Space/Esc** to stop
- Adjust volume with the slider

### Lineup Mode
1. Click **Manage Lineup** to open the lineup panel
2. Click **+** next to players to add them to the lineup
3. Drag players in the lineup to reorder
4. Click **Save & Close**
5. Toggle the view switch to "Lineup View"
6. Only lineup players will show, in batting order

### Keyboard Shortcuts
| Key | Action |
|-----|--------|
| `1`-`9` | Play player 1-9 |
| `0` | Play player 10 |
| `Space` | Stop audio |
| `Esc` | Stop audio |

## Customization

### Styling
Edit `css/styles.css` to customize:
- Colors (CSS variables at the top)
- Button sizes
- Grid layout
- Fonts

### Theme Colors
The CSS uses CSS variables for easy theming. Edit the `:root` section in `styles.css`:

```css
:root {
  --bg-primary: #1a1a2e;
  --accent-primary: #e94560;
  /* ... more variables ... */
}
```

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome for Android)

## Troubleshooting

### Audio doesn't play
- Check that the audio file exists in the `/audio` folder
- Verify the path in `config.js` matches the actual filename
- Ensure the audio format is supported (MP3, WAV, OGG)
- On mobile, you may need to tap once to enable audio

### Buttons don't appear
- Check browser console for JavaScript errors
- Verify `config.js` has valid JSON syntax
- Ensure player `active` property is set to `true`

### Lineup not saving
- Check that localStorage is enabled in your browser
- Clear browser data and try again

## License

MIT License - Feel free to use and modify for your team!
