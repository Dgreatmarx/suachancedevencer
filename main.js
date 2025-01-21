// Main JavaScript file

// Update background periodically
function updateBackground() {
  const backgrounds = [
    'https://i.imgur.com/XZqDCxx.jpg',
    'https://i.imgur.com/another-aviator-bg.jpg',
    'https://i.imgur.com/third-aviator-bg.jpg'
  ];
  
  let currentBg = 0;
  setInterval(() => {
    currentBg = (currentBg + 1) % backgrounds.length;
    document.body.style.backgroundImage = `url(${backgrounds[currentBg]})`;
  }, 30000); // Change background every 30 seconds
}

document.addEventListener('DOMContentLoaded', () => {
  updateBackground();
});