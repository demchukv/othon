const soundBtn = document.getElementById('sound-btn');

soundBtn.addEventListener('click', () => {
  const videoSoundIcon = document.getElementById('sound-icon');
  const icon = videoSoundIcon.getAttribute('xlink:href');
  if (icon === '/img/icons.svg#icon-sound') {
    videoSoundIcon.setAttribute('xlink:href', '/img/icons.svg#icon-sound-off');
  } else {
    videoSoundIcon.setAttribute('xlink:href', '/img/icons.svg#icon-sound');
  }
});
