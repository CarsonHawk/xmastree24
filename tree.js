// Some variables.
const brokenOrns = new Array;

document.addEventListener("DOMContentLoaded", () => {
    // Logic can go here.
    document.getElementById("tree").addEventListener("click", () => {

    })
    document.getElementById("snowman").addEventListener("click", () => {
        snowmanWave();
        swapImage(document.getElementById("snowman"),"snowman.png");
    })

    document.querySelectorAll('.ornament').forEach(element => {
        element.addEventListener("click", () => {
            // add drop ornament function to all ornament elements
            dropOrnament(element);
        })
    });

    // document.getElementById("gift1").addEventListener("click", () => { })
    // document.getElementById("gift2").addEventListener("click", () => { })
    // document.getElementById("gift3").addEventListener("click", () => { })
})

// Functions

function dropOrnament(ornToDrop) {
    // Move the element down until it reaches the floor, then play a glass breaking sound,
    // and replace the element's image with a broken variant.
    let animInt = null;
    // let pos = ornToDrop.style.top; // This one drops it from the top of the tree, but nicely.
    // let pos = ornToDrop.offsetTop; // This and the parseFloat one just teleport it.
    let pos = parseFloat(window.getComputedStyle(ornToDrop).getPropertyValue("top").replace('px', ''));
    clearInterval(animInt);
    animInt = setInterval(moveIt, 1);
    function moveIt() {
        // Might have to resort to pixels here.
        if (parseFloat(window.getComputedStyle(ornToDrop).getPropertyValue("top").replace('px', '')) >= 400) {
            clearInterval(animInt);
            swapImage(ornToDrop, 'ornbrk.png')
            let ornBreak = new Audio('sfx/338691__natemarler__glass-break-trim.wav');
            ornBreak.play();
        } else {
            pos++;
            ornToDrop.style.top = pos + "px";
        }
    }

    // ornToDrop.style.top = 90 + "%";
}
// Let's try that again...
// Nevermind, I got the original working right!
function dropOrn(ornDrop) {
    let pos = parseFloat(window.getComputedStyle(ornDrop).getPropertyValue("top").replace('px', ''));
    for (i = pos; i < 400; i++) {
        ornDrop.style.top = i + "px";
    }
    swapImage(ornDrop, 'ornbrk.png')
    let ornBreak = new Audio('sfx/338691__natemarler__glass-break-trim.wav');
    ornBreak.play();
}

function swapImage(elementToSwap, newImage) {
    // Select the targeted element and replace it with the specified new image.
    elementToSwap.style.backgroundImage = "url(" + newImage + ")";
}

function rockToPane(){

}
function snowmanWave(){
    let mans = document.getElementById("snowman");
    //let animInt = null;
    //clearInterval(animInt);
    //animInt = setInterval(waving(),1);
    //function waving(){
        setTimeout(() => {
            swapImage(mans,"snowman_wav0.png");
          }, "1000");
          ;
        setTimeout(() => {
            swapImage(mans,"snowman_wav1.png");
          }, "1000");
    //}
}