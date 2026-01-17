/**
 * Soundboard Player Configuration
 *
 * Edit this file to add, remove, or modify players.
 * Each player object should have:
 *   - id: Unique identifier (number)
 *   - name: Player's display name (string)
 *   - number: Jersey number (string, can be empty)
 *   - audioFile: Path to audio file relative to soundboard.html (string)
 *   - active: Whether the player is available for selection (boolean)
 */

const players = [
  {
    id: 1,
    name: "Brandon Capparelli",
    number: "69",
    audioFile: "audio/player69.mp3",
    active: true
  },
  {
    id: 2,
    name: "Isabella Capparelli",
    number: "2",
    audioFile: "audio/player2.mp3",
    active: true
  },
  {
    id: 3,
    name: "Debora Capparelli",
    number: "3",
    audioFile: "audio/player3.mp3",
    active: true
  },
  {
    id: 4,
    name: "Julianna Capparelli",
    number: "4",
    audioFile: "audio/player4.mp3",
    active: true
  },
  {
    id: 5,
    name: "Marissa Lavezzari",
    number: "5",
    audioFile: "audio/player5.mp3",
    active: true
  },
  {
    id: 6,
    name: "Natalie Lavezzari",
    number: "6",
    audioFile: "audio/player6.mp3",
    active: true
  },
  {
    id: 7,
    name: "David Lavezzari",
    number: "7",
    audioFile: "audio/player7.mp3",
    active: true
  },
  {
    id: 8,
    name: "Brandon Lehman",
    number: "8",
    audioFile: "audio/player8.mp3",
    active: true
  },
  {
    id: 9,
    name: "Player 9",
    number: "9",
    audioFile: "audio/player9.mp3",
    active: true
  },
  {
    id: 10,
    name: "Player 10",
    number: "10",
    audioFile: "audio/player10.mp3",
    active: true
  }
];

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { players };
}
