document.addEventListener("DOMContentLoaded", () => {
    // Logic can go here.
    document.getElementById("tree").addEventListener("click", () => {

    })
    document.getElementById("orn1").addEventListener("click", () => {
        dropOrnament(document.getElementById("orn1"));
    })
    // document.getElementById("orn2").addEventListener("click", () => {})
    // document.getElementById("orn3").addEventListener("click", () => {})
    // document.getElementById("orn4").addEventListener("click", () => {})
    // document.getElementById("orn5").addEventListener("click", () => {})
    // document.getElementById("orn6").addEventListener("click", () => {})
    // document.getElementById("orn7").addEventListener("click", () => {})
    // document.getElementById("orn8").addEventListener("click", () => {})
    // getElementsByClassName("ornament").addEventListener("click", () =>{
    //     // add drop ornament function to all ornament elements
    // })

    // document.getElementById("gift1").addEventListener("click", () => { })
    // document.getElementById("gift2").addEventListener("click", () => { })
    // document.getElementById("gift3").addEventListener("click", () => { })
})

// Functions

function dropOrnament(ornToDrop) {
    // Move the element down until it reaches the floor, then play a glass breaking sound,
    // and replace the element's image with a broken variant.
    ornToDrop.style.top = 90 + "%";
}
function swapImage(elementToSwap, newImage){
    // Select the targeted element and replace it with the specified new image.
}