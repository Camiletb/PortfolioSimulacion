var vid = document.getElementById("miVideo");
var play = document.getElementById("play");
var icoVol = document.getElementById("icoVol");
var vol = document.getElementById("vol");

function playVideo() {
    if (!vid.paused) {
        vid.pause();
        play.className = "fa fa-play";
        vid.style.border = "2px solid #ECECEC";
    }
    else {
        vid.play();
        play.className = "fa fa-pause";
        vid.style.border = "2px solid #373E48";
    }
}

function stopVideo() {
    vid.currentTime = 0;
    vid.playbackRate = 1;
    play.className = "fa fa-pause";
}

function ffVideo() {
    if (vid.playbackRate == 2)
        vid.playbackRate = 1;
    else
        vid.playbackRate = 2;
}

function fsVideo() {
    vid.requestFullscreen();
}

function changeVolume() {
    var valor = vol.value; 
    
    // icono
    if (valor == 0)
        icoVol.className = "fa fa-volume-off";
    else if (valor <= 0.66)
        icoVol.className = "fa fa-volume-down";
    else
        icoVol.className = "fa fa-volume-up";

    vid.volume = valor;
}
