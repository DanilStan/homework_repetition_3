import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const currentTime = localStorage.getItem('videoplayer-current-time');

player.on('timeupdate', throttle(onPlay, 1000));
player.setCurrentTime(currentTime);

function onPlay(event) {
  localStorage.setItem('videoplayer-current-time', event.seconds);
}
