// Some variables.
let brokenOrns = new Array;
const giftIndex = ['teddy.png', 'ps2.png', 'baseball.png', 'coal.png', 'rubix.png'];
let pictureIsSwapped = false;
let treeIsBurntAlready = false;
let starExploded = false;
let paneBroke = false;

document.addEventListener("DOMContentLoaded", () => {
    // Logic can go here.
    document.getElementById("tree").addEventListener("click", () => {
        // console.log(brokenOrns);
        if (ornamentChecker() && !treeIsBurntAlready) {
            // console.log("here!");
            burnTree(document.getElementById("tree"));
        }

    })
    document.getElementById("snowman").addEventListener("click", () => {
        snowmanWave();
    })
    document.getElementById("painting").addEventListener("click", () => {
        let elem = document.getElementById("painting");
        if (!pictureIsSwapped) {
            swapImage(elem, "picture1.png");
            pictureIsSwapped = true;
            // console.log(pictureIsSwapped);
        } else {
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

    document.getElementById("star").addEventListener("click", () => {
        if (starExploded) {
            return null;
        } else {
            starGleam();
        }
    })
    document.getElementById("windowpane").addEventListener("click", () => {
        if (paneBroke) {
            return null;
        } else {
            breakTheGlass();
            paneBroke = true;
        }
    })
    document.getElementById("rock").addEventListener("click", () => {
        if (paneBroke) {
            return null;
        } else {
            breakTheGlass();
            paneBroke = true;
        }
    })
    document.querySelectorAll('.gift').forEach(element => {
        element.addEventListener("click", () => {
            openPresent(element);
        })
    });
})

// Functions

function dropOrnament(ornToDrop) {
    // Move the element down until it reaches the floor, then play a glass breaking sound,
    // and replace the element's image with a broken variant.
    let animInt = null;
    let pos = parseFloat(getComputedStyle(ornToDrop).getPropertyValue("top").replace('px', ''));
    clearInterval(animInt);
    animInt = setInterval(moveIt, 1);
    function moveIt() {
        // Might have to resort to pixels here.
        if (parseFloat(window.getComputedStyle(ornToDrop).getPropertyValue("top").replace('px', '')) >= 400) {
            clearInterval(animInt);
            swapImage(ornToDrop, 'ornbrk.png')
            let ornBreak = new Audio('https://files.catbox.moe/gse1cm.wav');
            ornBreak.play();
            if (!brokenOrns.includes(ornToDrop.id)) {
                brokenOrns.push(ornToDrop.id);
            }
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
function snowmanWave() {
    let mans = document.getElementById("snowman");
    setTimeout(() => {
        swapImage(mans, "snowman_wav0.png");
    }, "500");
    setTimeout(() => {
        swapImage(mans, "snowman_wav1.png");
    }, "1000");
    setTimeout(() => {
        swapImage(mans, "snowman_wav0.png");
    }, "1500");
    setTimeout(() => {
        swapImage(mans, "snowman_wav1.png");
    }, "2000");
    setTimeout(() => {
        swapImage(mans, "snowman_wav0.png");
    }, "2500");
    setTimeout(() => {
        swapImage(mans, "snowman_wav1.png");
    }, "3000");
    setTimeout(() => {
        swapImage(mans, "snowman_wav0.png");
    }, "3500");
    setTimeout(() => {
        swapImage(mans, "snowman.png");
    }, "4000");
}

function ornamentChecker() {
    if (brokenOrns.includes("orn1") && brokenOrns.includes("orn2") && brokenOrns.includes("orn3") && brokenOrns.includes("orn4") && brokenOrns.includes("orn5") && brokenOrns.includes("orn6") && brokenOrns.includes("orn7") && brokenOrns.includes("orn8")) {
        return true;
    } else {
        return false;
    }
}

function burnTree(theTree) {
    let burn = new Audio('https://files.catbox.moe/35nweb.wav')
    burn.play();
    // Tiny delay before burning the tree.
    simpleDelay(250).then(() => swapImage(theTree, "flame.gif"));
    // Delay for 11760 milliseconds (length of the burning audio) then swap to the dead tree.
    simpleDelay(11760).then(() => swapImage(theTree, "treeDead.png"));
    // Make sure to set the treeIsBurntAlready variable to TRUE so it won't burn again on next click.
    treeIsBurntAlready = true;
}

function simpleDelay(ms) {
    return new Promise((resolve => setTimeout(resolve, ms)));
}

function starGleam() {
    let rng = Math.floor(Math.random() * 20);
    let flash = document.getElementById("flashbang");
    if (rng == 0) {
        flash.classList.add('flash')
        swapImage(document.getElementById('star'), '')
        simpleDelay(500).then(() => {
            flash.classList.add('flash2');
            flash.classList.remove('flash');
        }).then(simpleDelay(1500).then(() => {
            flash.classList.add('flash3');
            flash.classList.remove('flash2');
        })).then(
            simpleDelay(2500).then(() => {
                flash.classList.add('flash4');
                flash.classList.remove('flash3');
            })).then(
                simpleDelay(3500).then(() => flash.classList.remove('flash4')))
        starExploded = true;
    }
    else {
        swapImage(document.getElementById('star'), "star.gif");
        simpleDelay(1750).then(() => swapImage(document.getElementById('star'), "star.png"));
    }
}

function breakTheGlass() {
    let panesfx = new Audio('https://files.catbox.moe/2af7d5.wav');
    let theRock = document.getElementById("rock");
    panesfx.play();
    simpleDelay(250).then(() => {
        document.getElementById("windowpane").classList.add('brokenglass');
        theRock.classList.add("visiblerock");
        let animInt = null;
        let pos = parseFloat(getComputedStyle(theRock).getPropertyValue("top").replace('px', ''));
        clearInterval(animInt);
        animInt = setInterval(moveIt, 0.2);
        function moveIt() {
            // Might have to resort to pixels here.
            if (parseFloat(window.getComputedStyle(theRock).getPropertyValue("top").replace('px', '')) >= 550) {
                clearInterval(animInt);
            } else {
                pos++;
                theRock.style.top = pos + "px";
            }
        }
    })
}

function openPresent(gift) {
    if (gift.classList == 'subelement gift openedAlready') {
        return null;
    } else {
        console.log(gift.classList)
        let thingamajig = giftIndex[Math.floor(Math.random() * giftIndex.length)];
        swapImage(gift, thingamajig);
        gift.classList.add('openedAlready');
    }
}