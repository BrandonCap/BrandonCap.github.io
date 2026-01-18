/**
 * Soundboard Application
 * Main application logic for the baseball walk-up music soundboard
 */

(function() {
  'use strict';

  // Application state
  const state = {
    currentAudio: null,
    currentPlayingId: null,
    lineup: [],
    defensiveLineup: {
      P: null,   // Pitcher
      C: null,   // Catcher
      '1B': null, // First Base
      '2B': null, // Second Base
      '3B': null, // Third Base
      SS: null,  // Shortstop
      LF: null,  // Left Field
      CF: null,  // Center Field
      RF: null   // Right Field
    },
    viewMode: 'roster', // 'roster' or 'lineup'
    volume: 0.8,
    previousVolume: 0.8, // Store volume before muting
    isMuted: false,
    isLoading: false
  };

  // Position labels for display
  const positionLabels = {
    P: 'Pitcher',
    C: 'Catcher',
    '1B': '1st Base',
    '2B': '2nd Base',
    '3B': '3rd Base',
    SS: 'Shortstop',
    LF: 'Left Field',
    CF: 'Center Field',
    RF: 'Right Field'
  };

  // DOM Elements
  let elements = {};

  // Initialize the application
  function init() {
    // Check if players array is available from config.js
    if (typeof players === 'undefined' || !Array.isArray(players)) {
      console.error('Soundboard Error: players array not found. Make sure config.js is loaded before app.js');
      const soundboard = document.getElementById('soundboard');
      if (soundboard) {
        soundboard.innerHTML = '<div class="empty-state"><p>Error: Player configuration not loaded. Check console for details.</p></div>';
      }
      return;
    }

    cacheElements();
    loadSavedState();
    setupEventListeners();
    renderSoundboard();
    updateVolumeDisplay();
    updateMuteDisplay();
    updateThemeIcon();
  }

  // Cache frequently used DOM elements
  function cacheElements() {
    elements = {
      soundboard: document.getElementById('soundboard'),
      volumeSlider: document.getElementById('volume-slider'),
      volumeValue: document.getElementById('volume-value'),
      muteBtn: document.getElementById('mute-btn'),
      muteIcon: document.querySelector('.mute-icon'),
      muteLabel: document.querySelector('.mute-label'),
      viewToggle: document.getElementById('view-toggle'),
      viewLabel: document.getElementById('view-label'),
      lineupPanel: document.getElementById('lineup-panel'),
      lineupList: document.getElementById('lineup-list'),
      rosterList: document.getElementById('roster-list'),
      saveLineupBtn: document.getElementById('save-lineup-btn'),
      clearLineupBtn: document.getElementById('clear-lineup-btn'),
      manageLineupBtn: document.getElementById('manage-lineup-btn'),
      closeLineupBtn: document.getElementById('close-lineup-btn'),
      nowPlaying: document.getElementById('now-playing'),
      nowPlayingText: document.getElementById('now-playing-text'),
      themeToggle: document.getElementById('theme-toggle'),
      themeIcon: document.querySelector('.theme-icon'),
      defensivePanel: document.getElementById('defensive-panel'),
      defensiveLineupBtn: document.getElementById('defensive-lineup-btn'),
      closeDefensiveBtn: document.getElementById('close-defensive-btn'),
      saveDefensiveBtn: document.getElementById('save-defensive-btn'),
      clearDefensiveBtn: document.getElementById('clear-defensive-btn')
    };
  }

  // Load saved state from localStorage
  function loadSavedState() {
    try {
      const savedLineup = localStorage.getItem('soundboard_lineup');
      if (savedLineup) {
        state.lineup = JSON.parse(savedLineup);
      }

      const savedDefensiveLineup = localStorage.getItem('soundboard_defensive_lineup');
      if (savedDefensiveLineup) {
        state.defensiveLineup = JSON.parse(savedDefensiveLineup);
      }

      const savedVolume = localStorage.getItem('soundboard_volume');
      if (savedVolume) {
        state.volume = parseFloat(savedVolume);
        elements.volumeSlider.value = state.volume;
      }

      const savedTheme = localStorage.getItem('soundboard_theme');
      if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
      }

      const savedView = localStorage.getItem('soundboard_view');
      if (savedView) {
        state.viewMode = savedView;
        elements.viewToggle.checked = savedView === 'lineup';
        updateViewLabel();
      }
    } catch (e) {
      console.warn('Could not load saved state:', e);
    }
  }

  // Save state to localStorage
  function saveState() {
    try {
      localStorage.setItem('soundboard_lineup', JSON.stringify(state.lineup));
      localStorage.setItem('soundboard_defensive_lineup', JSON.stringify(state.defensiveLineup));
      localStorage.setItem('soundboard_volume', state.volume.toString());
      localStorage.setItem('soundboard_view', state.viewMode);
    } catch (e) {
      console.warn('Could not save state:', e);
    }
  }

  // Setup event listeners
  function setupEventListeners() {
    // Volume control
    if (elements.volumeSlider) {
      elements.volumeSlider.addEventListener('input', handleVolumeChange);
    }

    // Mute button
    if (elements.muteBtn) {
      elements.muteBtn.addEventListener('click', toggleMute);
    }

    // View toggle
    if (elements.viewToggle) {
      elements.viewToggle.addEventListener('change', handleViewToggle);
    }

    // Lineup management
    if (elements.manageLineupBtn) {
      elements.manageLineupBtn.addEventListener('click', openLineupPanel);
    }
    if (elements.closeLineupBtn) {
      elements.closeLineupBtn.addEventListener('click', closeLineupPanel);
    }
    if (elements.saveLineupBtn) {
      elements.saveLineupBtn.addEventListener('click', saveLineup);
    }
    if (elements.clearLineupBtn) {
      elements.clearLineupBtn.addEventListener('click', clearLineup);
    }

    // Theme toggle
    if (elements.themeToggle) {
      elements.themeToggle.addEventListener('click', toggleTheme);
    }

    // Defensive lineup management
    if (elements.defensiveLineupBtn) {
      elements.defensiveLineupBtn.addEventListener('click', openDefensivePanel);
    }
    if (elements.closeDefensiveBtn) {
      elements.closeDefensiveBtn.addEventListener('click', closeDefensivePanel);
    }
    if (elements.saveDefensiveBtn) {
      elements.saveDefensiveBtn.addEventListener('click', saveDefensiveLineup);
    }
    if (elements.clearDefensiveBtn) {
      elements.clearDefensiveBtn.addEventListener('click', clearDefensiveLineup);
    }

    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyboardShortcut);

    // Click outside lineup panel to close
    if (elements.lineupPanel) {
      elements.lineupPanel.addEventListener('click', function(e) {
        if (e.target === elements.lineupPanel) {
          closeLineupPanel();
        }
      });
    }

    // Click outside defensive panel to close
    if (elements.defensivePanel) {
      elements.defensivePanel.addEventListener('click', function(e) {
        if (e.target === elements.defensivePanel) {
          closeDefensivePanel();
        }
      });
    }
  }

  // Render the soundboard
  function renderSoundboard() {
    elements.soundboard.innerHTML = '';

    let playersToRender;

    if (state.lineup.length > 0) {
      // When a lineup exists, always show lineup players first in order
      const lineupPlayers = state.lineup
        .map(id => players.find(p => p.id === id))
        .filter(p => p && p.active);

      if (state.viewMode === 'lineup') {
        // Lineup view: show only lineup players
        playersToRender = lineupPlayers;
      } else {
        // Roster view with lineup: show lineup players first, then remaining players
        const lineupIds = new Set(state.lineup);
        const remainingPlayers = players.filter(p => p.active && !lineupIds.has(p.id));
        playersToRender = [...lineupPlayers, ...remainingPlayers];
      }
    } else {
      // No lineup: show full roster in config order
      playersToRender = players.filter(p => p.active);
    }

    playersToRender.forEach((player, index) => {
      const isInLineup = state.lineup.includes(player.id);
      const lineupPosition = isInLineup ? state.lineup.indexOf(player.id) + 1 : null;
      const button = createPlayerButton(player, index, lineupPosition);
      elements.soundboard.appendChild(button);
    });

    // Show empty state if no players
    if (playersToRender.length === 0) {
      const emptyState = document.createElement('div');
      emptyState.className = 'empty-state';
      emptyState.innerHTML = state.viewMode === 'lineup'
        ? '<p>No players in lineup. Click "Manage Lineup" to add players.</p>'
        : '<p>No active players configured. Edit js/config.js to add players.</p>';
      elements.soundboard.appendChild(emptyState);
    }
  }

  // Create a player button element
  function createPlayerButton(player, index, lineupPosition) {
    const button = document.createElement('button');
    button.className = 'player-btn';
    button.dataset.playerId = player.id;
    button.dataset.index = index;

    const isPlaying = state.currentPlayingId === player.id;
    if (isPlaying) {
      button.classList.add('playing');
    }

    // Add lineup styling if player is in lineup
    if (lineupPosition !== null) {
      button.classList.add('in-lineup');
    }

    const numberDisplay = player.number ? `#${player.number}` : '';
    const shortcutHint = index < 10 ? `<span class="shortcut-hint">${(index + 1) % 10}</span>` : '';
    const lineupBadge = lineupPosition !== null ? `<span class="lineup-badge">${lineupPosition}</span>` : '';

    button.innerHTML = `
      ${lineupBadge}
      <div class="player-number">${numberDisplay}</div>
      <div class="player-name">${escapeHtml(player.name)}</div>
      <div class="play-indicator">
        <span class="play-icon">&#9658;</span>
        <span class="playing-icon">&#9632;</span>
      </div>
      <div class="progress-bar"><div class="progress-fill"></div></div>
      ${shortcutHint}
    `;

    // Toggle play/stop on click
    button.addEventListener('click', () => togglePlayAudio(player));

    return button;
  }

  // Toggle play/stop for a player
  function togglePlayAudio(player) {
    if (state.currentPlayingId === player.id) {
      // Already playing this player's audio, stop it
      stopAudio();
    } else {
      // Play this player's audio
      playAudio(player);
    }
  }

  // Play audio for a player
  function playAudio(player) {
    // Stop any currently playing audio
    stopAudio();

    // Create new audio element
    const audio = new Audio(player.audioFile);
    audio.muted = state.isMuted;

    // Update state
    state.currentAudio = audio;
    state.currentPlayingId = player.id;

    // Update UI
    updatePlayingState();
    showNowPlaying(player);

    // Handle audio events
    audio.addEventListener('loadstart', () => {
      const btn = document.querySelector(`[data-player-id="${player.id}"]`);
      if (btn) btn.classList.add('loading');
    });

    audio.addEventListener('canplay', () => {
      const btn = document.querySelector(`[data-player-id="${player.id}"]`);
      if (btn) btn.classList.remove('loading');
    });

    audio.addEventListener('ended', () => {
      // Reset progress bar
      const btn = document.querySelector(`[data-player-id="${player.id}"]`);
      if (btn) {
        const progressFill = btn.querySelector('.progress-fill');
        if (progressFill) progressFill.style.width = '0%';
      }
      state.currentAudio = null;
      state.currentPlayingId = null;
      updatePlayingState();
      hideNowPlaying();
    });

    // Update progress bar as audio plays
    audio.addEventListener('timeupdate', () => {
      if (audio.duration) {
        const progress = (audio.currentTime / audio.duration) * 100;
        const btn = document.querySelector(`[data-player-id="${player.id}"]`);
        if (btn) {
          const progressFill = btn.querySelector('.progress-fill');
          if (progressFill) progressFill.style.width = `${progress}%`;
        }
      }
    });

    audio.addEventListener('error', (e) => {
      console.error('Audio error:', e);
      const btn = document.querySelector(`[data-player-id="${player.id}"]`);
      if (btn) {
        btn.classList.remove('loading');
        btn.classList.add('error');
        setTimeout(() => btn.classList.remove('error'), 2000);
      }
      state.currentAudio = null;
      state.currentPlayingId = null;
      updatePlayingState();
      hideNowPlaying();
      showError(`Could not play audio for ${player.name}`);
    });

    // Play the audio
    audio.play().catch(e => {
      console.error('Playback error:', e);
      showError(`Could not play audio for ${player.name}`);
    });
  }

  // Stop currently playing audio
  function stopAudio() {
    if (state.currentAudio) {
      // Reset progress bar for the currently playing button
      const btn = document.querySelector(`[data-player-id="${state.currentPlayingId}"]`);
      if (btn) {
        const progressFill = btn.querySelector('.progress-fill');
        if (progressFill) progressFill.style.width = '0%';
      }
      state.currentAudio.pause();
      state.currentAudio.currentTime = 0;
      state.currentAudio = null;
      state.currentPlayingId = null;
      updatePlayingState();
      hideNowPlaying();
    }
  }

  // Update the playing state in the UI
  function updatePlayingState() {
    document.querySelectorAll('.player-btn').forEach(btn => {
      const playerId = parseInt(btn.dataset.playerId);
      if (playerId === state.currentPlayingId) {
        btn.classList.add('playing');
      } else {
        btn.classList.remove('playing');
      }
    });
  }

  // Show now playing indicator
  function showNowPlaying(player) {
    elements.nowPlayingText.textContent = `Now Playing: ${player.name}`;
    elements.nowPlaying.classList.add('visible');
  }

  // Hide now playing indicator
  function hideNowPlaying() {
    elements.nowPlaying.classList.remove('visible');
  }

  // Handle volume change
  function handleVolumeChange(e) {
    state.volume = parseFloat(e.target.value);

    // If user manually adjusts volume, unmute
    if (state.isMuted && state.volume > 0) {
      state.isMuted = false;
      updateMuteDisplay();
    }

    // Update previous volume for unmute restoration
    if (state.volume > 0) {
      state.previousVolume = state.volume;
    }

    if (state.currentAudio) {
      state.currentAudio.volume = state.volume;
    }
    updateVolumeDisplay();
    saveState();
  }

  // Update volume display
  function updateVolumeDisplay() {
    const percentage = Math.round(state.volume * 100);
    elements.volumeValue.textContent = `${percentage}%`;
  }

  // Handle view toggle
  function handleViewToggle(e) {
    state.viewMode = e.target.checked ? 'lineup' : 'roster';
    updateViewLabel();
    renderSoundboard();
    saveState();
  }

  // Update view label
  function updateViewLabel() {
    elements.viewLabel.textContent = state.viewMode === 'lineup' ? 'Lineup View' : 'Full Roster';
  }

  // Open lineup management panel
  function openLineupPanel() {
    renderLineupPanel();
    elements.lineupPanel.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  // Close lineup management panel
  function closeLineupPanel() {
    elements.lineupPanel.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Render lineup management panel
  function renderLineupPanel() {
    // Render current lineup
    elements.lineupList.innerHTML = '';
    state.lineup.forEach((playerId, index) => {
      const player = players.find(p => p.id === playerId);
      if (player) {
        const item = createLineupItem(player, index);
        elements.lineupList.appendChild(item);
      }
    });

    // Render available roster
    elements.rosterList.innerHTML = '';
    players.filter(p => p.active && !state.lineup.includes(p.id)).forEach(player => {
      const item = createRosterItem(player);
      elements.rosterList.appendChild(item);
    });

    // Setup drag and drop
    setupDragAndDrop();
  }

  // Create lineup item element
  function createLineupItem(player, index) {
    const item = document.createElement('div');
    item.className = 'lineup-item';
    item.dataset.playerId = player.id;
    item.draggable = true;

    const isFirst = index === 0;
    const isLast = index === state.lineup.length - 1;

    item.innerHTML = `
      <span class="lineup-position">${index + 1}</span>
      <div class="lineup-reorder-btns">
        <button class="lineup-move-btn lineup-move-up" title="Move up" ${isFirst ? 'disabled' : ''}>&#9650;</button>
        <button class="lineup-move-btn lineup-move-down" title="Move down" ${isLast ? 'disabled' : ''}>&#9660;</button>
      </div>
      <span class="lineup-player-info">
        ${player.number ? `#${player.number} ` : ''}${escapeHtml(player.name)}
      </span>
      <button class="lineup-remove-btn" title="Remove from lineup">&times;</button>
    `;

    item.querySelector('.lineup-move-up').addEventListener('click', (e) => {
      e.stopPropagation();
      moveInLineup(player.id, -1);
    });

    item.querySelector('.lineup-move-down').addEventListener('click', (e) => {
      e.stopPropagation();
      moveInLineup(player.id, 1);
    });

    item.querySelector('.lineup-remove-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      removeFromLineup(player.id);
    });

    return item;
  }

  // Create roster item element
  function createRosterItem(player) {
    const item = document.createElement('div');
    item.className = 'roster-item';
    item.dataset.playerId = player.id;

    item.innerHTML = `
      <span class="roster-player-info">
        ${player.number ? `#${player.number} ` : ''}${escapeHtml(player.name)}
      </span>
      <button class="roster-add-btn" title="Add to lineup">+</button>
    `;

    item.querySelector('.roster-add-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      addToLineup(player.id);
    });

    return item;
  }

  // Setup drag and drop for lineup reordering (supports both mouse and touch)
  function setupDragAndDrop() {
    const lineupItems = elements.lineupList.querySelectorAll('.lineup-item');
    let draggedItem = null;

    // Helper to find target item by Y position
    function findTargetItemAtY(touchY, excludeItem) {
      const items = elements.lineupList.querySelectorAll('.lineup-item');
      for (const item of items) {
        if (item === excludeItem) continue;
        const rect = item.getBoundingClientRect();
        if (touchY >= rect.top && touchY <= rect.bottom) {
          return item;
        }
      }
      return null;
    }

    lineupItems.forEach(item => {
      // Mouse drag events (desktop)
      item.addEventListener('dragstart', (e) => {
        draggedItem = item;
        item.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'move';
      });

      item.addEventListener('dragend', () => {
        item.classList.remove('dragging');
        draggedItem = null;
        document.querySelectorAll('.lineup-item').forEach(i => i.classList.remove('drag-over'));
      });

      item.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        item.classList.add('drag-over');
      });

      item.addEventListener('dragleave', () => {
        item.classList.remove('drag-over');
      });

      item.addEventListener('drop', (e) => {
        e.preventDefault();
        item.classList.remove('drag-over');

        if (draggedItem && draggedItem !== item) {
          const fromId = parseInt(draggedItem.dataset.playerId);
          const toId = parseInt(item.dataset.playerId);
          reorderLineup(fromId, toId);
        }
      });

      // Touch events (mobile)
      let touchTimeout = null;
      let isDragging = false;

      item.addEventListener('touchstart', (e) => {
        // Only start drag if touching the item itself, not the remove button
        if (e.target.classList.contains('lineup-remove-btn')) return;

        draggedItem = item;
        isDragging = false;

        // Start drag after a long press (200ms)
        touchTimeout = setTimeout(() => {
          isDragging = true;
          item.classList.add('dragging');
        }, 200);
      }, { passive: true });

      item.addEventListener('touchmove', (e) => {
        if (!draggedItem || draggedItem !== item) return;

        // If we moved before the long press completed, cancel the drag
        if (!isDragging && touchTimeout) {
          clearTimeout(touchTimeout);
          touchTimeout = null;
          draggedItem = null;
          return;
        }

        if (!isDragging) return;

        e.preventDefault(); // Prevent scrolling while dragging

        const touch = e.touches[0];
        const touchY = touch.clientY;

        // Find which item we're over using bounding rect comparison
        const targetItem = findTargetItemAtY(touchY, draggedItem);

        // Update drag-over state
        document.querySelectorAll('.lineup-item').forEach(i => {
          if (i === targetItem) {
            i.classList.add('drag-over');
          } else {
            i.classList.remove('drag-over');
          }
        });
      }, { passive: false });

      item.addEventListener('touchend', (e) => {
        if (touchTimeout) {
          clearTimeout(touchTimeout);
          touchTimeout = null;
        }

        if (!draggedItem || !isDragging) {
          draggedItem = null;
          isDragging = false;
          return;
        }

        item.classList.remove('dragging');
        document.querySelectorAll('.lineup-item').forEach(i => i.classList.remove('drag-over'));

        // Find the target item at touch end position
        if (e.changedTouches.length > 0) {
          const touch = e.changedTouches[0];
          const targetItem = findTargetItemAtY(touch.clientY, draggedItem);

          if (targetItem && draggedItem !== targetItem) {
            const fromId = parseInt(draggedItem.dataset.playerId);
            const toId = parseInt(targetItem.dataset.playerId);
            reorderLineup(fromId, toId);
          }
        }

        draggedItem = null;
        isDragging = false;
      });

      item.addEventListener('touchcancel', () => {
        if (touchTimeout) {
          clearTimeout(touchTimeout);
          touchTimeout = null;
        }
        if (draggedItem) {
          draggedItem.classList.remove('dragging');
        }
        document.querySelectorAll('.lineup-item').forEach(i => i.classList.remove('drag-over'));
        draggedItem = null;
        isDragging = false;
      });
    });
  }

  // Add player to lineup
  function addToLineup(playerId) {
    if (!state.lineup.includes(playerId)) {
      state.lineup.push(playerId);
      renderLineupPanel();
    }
  }

  // Remove player from lineup
  function removeFromLineup(playerId) {
    state.lineup = state.lineup.filter(id => id !== playerId);
    renderLineupPanel();
  }

  // Move player up or down in lineup
  function moveInLineup(playerId, direction) {
    const currentIndex = state.lineup.indexOf(playerId);
    const newIndex = currentIndex + direction;

    if (currentIndex === -1 || newIndex < 0 || newIndex >= state.lineup.length) {
      return;
    }

    // Swap positions
    state.lineup.splice(currentIndex, 1);
    state.lineup.splice(newIndex, 0, playerId);
    renderLineupPanel();
  }

  // Reorder lineup
  function reorderLineup(fromId, toId) {
    const fromIndex = state.lineup.indexOf(fromId);
    const toIndex = state.lineup.indexOf(toId);

    if (fromIndex !== -1 && toIndex !== -1) {
      state.lineup.splice(fromIndex, 1);
      state.lineup.splice(toIndex, 0, fromId);
      renderLineupPanel();
    }
  }

  // Save lineup
  function saveLineup() {
    saveState();
    closeLineupPanel();
    // Always re-render since lineup order affects button order in both views
    renderSoundboard();
    showNotification('Lineup saved!');
  }

  // Clear lineup
  function clearLineup() {
    if (confirm('Are you sure you want to clear the lineup?')) {
      state.lineup = [];
      renderLineupPanel();
      // Always re-render since lineup affects button order
      renderSoundboard();
      saveState();
    }
  }

  // Open defensive lineup panel
  function openDefensivePanel() {
    elements.defensivePanel.classList.add('open');
    renderDefensivePanel();
  }

  // Close defensive lineup panel
  function closeDefensivePanel() {
    elements.defensivePanel.classList.remove('open');
  }

  // Render defensive lineup panel
  function renderDefensivePanel() {
    const positions = ['P', 'C', '1B', '2B', '3B', 'SS', 'LF', 'CF', 'RF'];

    positions.forEach(pos => {
      const select = document.getElementById(`pos-${pos}`);
      if (!select) return;

      // Clear existing options
      select.innerHTML = '<option value="">-- Select --</option>';

      // Add lineup players as options
      state.lineup.forEach(playerId => {
        const player = players.find(p => p.id === playerId);
        if (player) {
          const option = document.createElement('option');
          option.value = player.id;
          option.textContent = player.number ? `#${player.number} ${player.name}` : player.name;

          // Check if already selected at this position
          if (state.defensiveLineup[pos] === player.id) {
            option.selected = true;
          }

          select.appendChild(option);
        }
      });

      // Add change listener
      select.onchange = function() {
        const value = this.value;
        state.defensiveLineup[pos] = value ? parseInt(value) : null;
      };
    });
  }

  // Save defensive lineup
  function saveDefensiveLineup() {
    saveState();
    closeDefensivePanel();
    showNotification('Defensive lineup saved!');
  }

  // Clear defensive lineup
  function clearDefensiveLineup() {
    if (confirm('Are you sure you want to clear the defensive lineup?')) {
      state.defensiveLineup = {
        P: null, C: null, '1B': null, '2B': null, '3B': null,
        SS: null, LF: null, CF: null, RF: null
      };
      renderDefensivePanel();
      saveState();
    }
  }

  // Toggle theme
  function toggleTheme() {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    localStorage.setItem('soundboard_theme', isLight ? 'light' : 'dark');
    updateThemeIcon();
  }

  // Update theme icon based on current theme
  function updateThemeIcon() {
    const isLight = document.body.classList.contains('light-theme');
    if (elements.themeIcon) {
      elements.themeIcon.textContent = isLight ? '☀️' : '🌙';
    }
  }

  // Toggle mute
  function toggleMute() {
    state.isMuted = !state.isMuted;

    // Update audio if playing - use muted property (works on iOS)
    if (state.currentAudio) {
      state.currentAudio.muted = state.isMuted;
    }

    // Update UI
    updateMuteDisplay();
  }

  // Update mute button display
  function updateMuteDisplay() {
    if (elements.muteIcon && elements.muteLabel) {
      if (state.isMuted) {
        elements.muteIcon.textContent = '🔇';
        elements.muteLabel.textContent = 'Unmute';
        elements.muteBtn.classList.add('muted');
      } else {
        elements.muteIcon.textContent = '🔊';
        elements.muteLabel.textContent = 'Mute';
        elements.muteBtn.classList.remove('muted');
      }
    }
  }

  // Handle keyboard shortcuts
  function handleKeyboardShortcut(e) {
    // Don't handle shortcuts if a modal is open or in an input
    if (elements.lineupPanel.classList.contains('open')) return;
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    // M key to toggle mute
    if (e.key === 'm' || e.key === 'M') {
      e.preventDefault();
      toggleMute();
    }
  }

  // Show notification
  function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => notification.classList.add('show'), 10);
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => notification.remove(), 300);
    }, 2000);
  }

  // Show error message
  function showError(message) {
    const notification = document.createElement('div');
    notification.className = 'notification error';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => notification.classList.add('show'), 10);
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }

  // Escape HTML to prevent XSS
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
