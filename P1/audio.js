var audio = document.getElementById("audio");
var rr = document.getElementById("rr");
var yq = document.getElementById("yq");
var cb = document.getElementById("cb");


function changeSong(song) {
    audio.src = song;

    if (song == '/P1/Imagenes/rickroll.mp3') {
        rr.style.color = "red";
        yq.style.color = "white";
        cb.style.color = "white";
    }
    else if (song == '/P1/Imagenes/yoquiero.mp3') {
        rr.style.color = "white";
        yq.style.color = "red";
        cb.style.color = "white";
    }
    else if (song == '/P1/Imagenes/cumbia.mp3') {
        rr.style.color = "white";
        yq.style.color = "white";
        cb.style.color = "red";
    }
}