document.addEventListener("DOMContentLoaded", () => {
    // Logic can go here.
    document.getElementById("tree").addEventListener("click", () => {

    })
    // document.getElementById("orn1").addEventListener("click", () => {
    //     dropOrnament(document.getElementById("orn1"));
    // })
    // document.getElementById("orn2").addEventListener("click", () => {})
    // document.getElementById("orn3").addEventListener("click", () => {})
    // document.getElementById("orn4").addEventListener("click", () => {})
    // document.getElementById("orn5").addEventListener("click", () => {})
    // document.getElementById("orn6").addEventListener("click", () => {})
    // document.getElementById("orn7").addEventListener("click", () => {})
    // document.getElementById("orn8").addEventListener("click", () => {})
    document.querySelectorAll('.ornament').forEach(element => {
        element.addEventListener("click", () =>{
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
    let pos = parseFloat(window.getComputedStyle(ornToDrop).getPropertyValue("top").replace('px',''));
    clearInterval(animInt);
    animInt = setInterval(moveIt, 5);
    function moveIt(){
        if(ornToDrop.style.top >= 90+"%"){
            clearInterval(animInt);
            swapImage(ornToDrop, 'ornbrk.png')
            let ornBreak = new Audio('sfx/338691__natemarler__glass-break.wav');
            ornBreak.play();
        }else{
            pos++;
            ornToDrop.style.top = pos + "%";
        }
    }

    // ornToDrop.style.top = 90 + "%";
}
function swapImage(elementToSwap, newImage){
    // Select the targeted element and replace it with the specified new image.
    console.log(newImage);
    elementToSwap.style.backgroundImage = "url("+newImage+")";
}