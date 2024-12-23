// Some variables.
let brokenOrns = new Array;
let giftIndex = ['teddy bear', 'toy train', 'letter blocks', 'PS2', 'baseball', 'lump of coal', 'huge d20', 'brick cellphone', 'camera', 'book'];
let pictureIsSwapped = false;

document.addEventListener("DOMContentLoaded", () => {
    // Logic can go here.
    document.getElementById("tree").addEventListener("click", () => {

    })
    document.getElementById("snowman").addEventListener("click", () => {
        snowmanWave();
    })
    document.getElementById("painting").addEventListener("click", () =>{
        let elem = document.getElementById("painting");
        if(!pictureIsSwapped){
            swapImage(elem, "picture1.png");
            pictureIsSwapped = true;
            console.log(pictureIsSwapped);
        }else{
            swapImage(elem, "picture0.png");
            pictureIsSwapped = false;
        }
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
}


function swapImage(elementToSwap, newImage) {
    // Select the targeted element and replace it with the specified new image.
    elementToSwap.style.backgroundImage = "url(" + newImage + ")";
}

function rockToPane(){

}
function snowmanWave(){
    let mans = document.getElementById("snowman");
        setTimeout(() => {
            swapImage(mans,"snowman_wav0.png");
          }, "500");
        setTimeout(() => {
            swapImage(mans,"snowman_wav1.png");
          }, "1000");
          setTimeout(() => {
            swapImage(mans,"snowman_wav0.png");
          }, "1500");
        setTimeout(() => {
            swapImage(mans,"snowman_wav1.png");
          }, "2000");
          setTimeout(() => {
            swapImage(mans,"snowman_wav0.png");
          }, "2500");
        setTimeout(() => {
            swapImage(mans,"snowman_wav1.png");
          }, "3000");
          setTimeout(() => {
            swapImage(mans,"snowman_wav0.png");
          }, "3500");
          setTimeout(() => {
            swapImage(mans,"snowman.png");
          }, "4000");
}