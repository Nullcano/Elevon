let darkMode

function toggleDarkMode() {
  darkMode = !darkMode
  if (darkMode) {
    window.document.body.dataset.theme = 'dark'
  } else {
    window.document.body.dataset.theme = ''
  }
}