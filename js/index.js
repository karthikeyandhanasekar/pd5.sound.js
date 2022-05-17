console.log("hello");
var song, fft, button
var volhistory = []

function toogleplay() {
    song.isPlaying() ? song.pause() : song.play()
}

function preload() {

    song = loadSound('audio/Brandenburg-Concerto-no.-3-BWV-1048-Complete-Performance.mp3')
}


function setup() {
    console.log(song);

    createCanvas(200, 200)
    angleMode(DEGREES)
    button = createButton('toogle')
    button.mousePressed(draw)
    song.play()
    fft = new p5.FFT()
    console.log(fft);
}

function draw() {
    background(255)
    var spectrum = fft.analyze()
    beginShape();
    for (i = 0; i < spectrum.length; i++) {
        vertex(i, map(spectrum[i], 0, 255, height, 0));
    }
    endShape();

    noFill()
}




// document.querySelector(".playsong").addEventListener("click", setup)

