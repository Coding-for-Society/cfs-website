import './Background.css';
import {useEffect, useRef} from "react";

function createGlitches(glitchContainer) {

    if(glitchContainer.current == null) {
        return;
    }
    // Clean up old glitches
    while(glitchContainer.current.firstChild) {
        glitchContainer.current.removeChild(glitchContainer.current.lastChild);
    }

    //glitchContainer.current.removeChild();

    // Create new glitches
    let count = 20;
    for(let i = 0; i < count; i++) {
        // Create Glitch
        let glitch = document.createElement("div");
        glitch.className = "Glitch";
        // Style Glitch
        glitch.style.left = Math.floor(Math.random()*100) + "vw";
        glitch.style.top = Math.floor(Math.random()*100) + "vh";
        glitch.style.width = Math.floor(Math.random()*400) + "px";
        glitch.style.height = Math.floor(Math.random()*100) + "px";
        //glitch.style.backgroundPosition = Math.floor(Math.random()*50) + "px";

        // Add Glitch to HTML
        glitchContainer.current.appendChild(glitch);
    }

}

function Background() {
    const glitchContainer = useRef();

    useEffect(() => {
        const glitchInterval = setInterval(
            () => {createGlitches(glitchContainer)
            },1000);

        return () => clearInterval(glitchInterval);
    },[]);

    return (
        <div className="Background">
            <div className="GlitchContainer" ref={glitchContainer}></div>
            <div className="Circle" id="redCircle"></div>
            <div className="Circle" id="blueCircle"></div>
            <div className="Circle" id="purpleCircle"></div>
        </div>
    );
}

export default Background;
