import { anchor } from "../components/anchor.js"
import { burgerLogic } from "../components/burger.js"
import { tracking } from "../components/tracking.js"

document.addEventListener("DOMContentLoaded", () => {
    window.isOpen = false

    burgerLogic()
    anchor()
    tracking()

    SmoothScroll({
        animationTime: 800,
        stepSize: 75,
        accelerationDelta: 30,  
        accelerationMax: 2,   
        keyboardSupport: true,  
        arrowScroll: 50,
        pulseAlgorithm: true,
        pulseScale: 4,
        pulseNormalize: 1,
        touchpadSupport:true,
    }) 
})