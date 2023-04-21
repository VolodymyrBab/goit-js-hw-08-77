import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
// console.log(iframe);
const throttle = require('lodash.throttle');
const player = new Player(iframe);
// console.log(player);

player.on('timeupdate', throttle(currentTimeWatching, 1000));

function currentTimeWatching(evt) {
  localStorage.setItem('videoplayer-current-time', evt.seconds);
};

if(localStorage.getItem('videoplayer-current-time')){
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
} else {
  player.setCurrentTime(0)
}