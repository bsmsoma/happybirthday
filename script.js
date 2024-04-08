function playSong() {
    const playBtn = document.querySelector('button');
    const audio = document.getElementById("audio");
    audio.currentTime = 0;
    audio.play();
}