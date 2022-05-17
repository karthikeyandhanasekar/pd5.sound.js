let song, fft, button
const songname = `Brandenburg-Concerto-no.-3-BWV-1048-Complete-Performance.mp3`
document.querySelector(".songname").innerHTML = songname
function toogleplay() {
    song.isPlaying() ? song.pause() : song.play()
}

function preload() {
    song = loadSound(`audio/${songname}`)
}

function setup() {

    createCanvas(windowWidth * 0.75, windowHeight * 0.75)
    // angleMode(DEGREES)

    button = createButton('Play/Pause')
    button.mousePressed(toogleplay)
    song.play()
    fft = new p5.FFT()
}

function draw() {
    background("green")
    stroke(255)
    // var spectrum = fft.analyze()
    var wave = fft.waveform()

    // textSize(20);
    // textAlign(CENTER)
    // fill("white")
    // text(songname, width * 0.35, 30)

    beginShape();
    for (let i = 0; i <= width; i++) {
        let index = floor(map(i, 0, width, 0, wave.length - 1))
        let x = i
        let y = wave[index] * 300 + height / 2
        point(x, y)
    }
    // for (i = 0; i < spectrum.length; i++) {
    //     vertex(i, map(spectrum[i], 0, 255, height, 0));
    // }
    endShape();

    noFill()
}

function windowResized() {
    resizeCanvas(windowWidth * 0.75, windowHeight * 0.75);
}
