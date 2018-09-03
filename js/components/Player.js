
export default class Player {
  constructor(app) {
    this.app = app;
    this.videoButtons = Array.prototype.slice.call(this.app.el.querySelectorAll('.video-switcher .video-button'));
    this.players = [];
    this.currentVideo = 0;
    this.done = false;
  }
  
  init(){
    this.initPlayer('#player1', 'qrpvq6xef2A');
    this.initPlayer('#player2', 'RwUGSYDKUxU');
    this.initPlayer('#player3', 'L7IP4UlXvG8');
  }

  initPlayer(playerId, videoId){
    const ratio = 1.73;
    const gap = 60;
    const width = window.isMobile ? (window.innerWidth - gap) : '770';
    const height = width / ratio;
    const player = new YT.Player(playerId, {
      events: {
        'onReady': this.onReady.bind(this),
        'onStateChange': this.onStateChange.bind(this)
      }
    });
  }

  playVideo(e){
    console.log('onReady');
    const pos = Number(e.target.dataset.pos);
    this.players.forEach((player, i) => {
      console.log(player);
      player.playVideo();
      player.mute();
      player.a.classList.remove('active')
      this.videoButtons[i].classList.remove('active');
      if(i === pos){
        this.videoButtons[i].classList.add('active');
        player.unMute()
        player.a.classList.add('active')
      }
    });
  }

  onReady(event) {
    console.log('onReady');
    this.players.push(player);
    if(this.players.length === 3){
      this.videoButtons.forEach(el => {
        el.addEventListener('click', this.playVideo.bind(this));
      });
    }
  }

  onStateChange(event) {
    console.log('onStateChange');
    if (event.data == YT.PlayerState.PLAYING && !this.done) {
      this.done = true;
    }
    if(event.data === 2){
      this.pauseVideo(this.players);
    }
  }

  pauseVideo(players) {
    players.forEach(player => {
      player.pauseVideo();
    })
  }

  stopVideo() {
    this.players.forEach(player => {
      player.stopVideo();
    })
  }

}


