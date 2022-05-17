console.log("hello");
let song, fft, button
const songname = `Brandenburg-Concerto-no.-3-BWV-1048-Complete-Performance.mp3`
function toogleplay() {
    song.isPlaying() ? song.pause() : song.play()
}

function preload() {

    song = loadSound(`audio/${songname}`)
}


function setup() {


    createCanvas(windowWidth * 0.75, windowHeight * 0.75)
    angleMode(DEGREES)
    // ellipse(56, 46, 55, 55)
    button = createButton('Play/Pause')
    button.mousePressed(toogleplay)
    song.play()
    fft = new p5.FFT()
}

function draw() {
    background(0)
    stroke(255)

    var spectrum = fft.analyze()
    var wave = fft.waveform()
    textSize(20);
    textAlign(CENTER)
    fill("white")
    text(songname, width * .40, 30)

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

