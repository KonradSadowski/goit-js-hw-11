const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

let time = localStorage.getItem('videoplayer-current-time');
if (time != null) {
  player.setCurrentTime(time);
}

player.on('pause', function () {
  player.getCurrentTime().then(function (seconds) {
    localStorage.setItem('videoplayer-current-time', seconds);
  });
});

