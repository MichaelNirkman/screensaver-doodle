var img = document.getElementById("image");
var imgdiv = document.getElementById("bounds")
var speedx = 3;
var speedy = 3;
var posx = Math.random()*1000;
var posy = Math.random()*600;

var stop = false;
var frameCount = 0;
var fps, fpsInterval, startTime, now, then, elapsed;

var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    var vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)


// initialize the timer variables and start the animation

function startAnimating(fps) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    img.src=imglist[0]
    shuffleArray(imglist)
    bounds.style.left = posx;
    bounds.style.top = posy;
    animate();
}

var imglist = ['imgs/towerbridge.png', 'imgs/bluetooth.png', 'imgs/trophy.png', 'imgs/emoji2.png', 'imgs/tarantula.png', 'imgs/beaver.png', 'imgs/peasant.png', 'imgs/emoji1.png', 'imgs/leak.png', 'imgs/whistle.png', 'imgs/beartrap.png', 'imgs/monalisa.png', 'imgs/buttcheeks.png', 'imgs/rick.png', 'imgs/puddle.png', 'imgs/musket.png', 'imgs/thebeatles.png', 'imgs/genie.png', 'imgs/joker.png', 'imgs/penguin.png', 'imgs/cabdriver.png', 'imgs/yeti.png', 'imgs/homeless.png', 'imgs/corgi.png', 'imgs/cruise.png', 'imgs/thor.png', 'imgs/reddit.png', 'imgs/warm.png', 'imgs/smell.png', 'imgs/spear.png', 'imgs/christmas.png', 'imgs/trumpet.png', 'imgs/broccoli.png', 'imgs/stab.png'];
var imgiterator = 1;

function animate() {

    // request another frame

    requestAnimationFrame(animate);

    // calc elapsed time since last loop

    now = Date.now();
    elapsed = now - then;

    // if enough time has elapsed, draw the next frame

    if (elapsed > fpsInterval) {

        // Get ready for next frame by setting then=now, but also adjust for your
        // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
        then = now - (elapsed % fpsInterval);

        // Put your drawing code here
        doMovement()

    }
}

function doMovement(){

    if(posx > (vw-bounds.clientWidth) && speedx > 0 || posx < 0 && speedx < 0){
        speedx = -speedx;
        changeImage();
    } else if(posy > (vh-bounds.clientHeight) && speedy > 0 || posy < 0 && speedy < 0){
        speedy = -speedy;
        changeImage();
    }

    posx = posx + speedx;
    posy = posy + speedy;
    bounds.style.left = posx + "px";
    bounds.style.top = posy + "px";
}

function changeImage(){
    img.src = imglist[imgiterator]
    if(imgiterator == imglist.length - 1){
        imgiterator = 0
        shuffleArray(imglist)
    } else {
        imgiterator++;
    }
}

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}