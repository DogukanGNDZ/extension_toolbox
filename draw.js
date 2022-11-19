const body = document.getElementsByTagName("body");
const canvas = document.createElement("canvas");
const body2 = document.createElement("body");
canvas.height = window.innerHeight
canvas.width = window.innerWidth


/*function draww() {*/

  
    chrome.storage.sync.get("activateDraw", (data) => {
        
            // ctx is the context of our canvas
            // we use ctx to draw on the canvas
            const ctx = canvas.getContext("2d")
            console.log("Mouuuuuuuuuuuuuuuuuuuuuse ");
            console.log(body[0]);
            console.log(canvas);
            body2.innerHTML = body[0];
            console.log("OOOOOOOOOOOOO");
            console.log(body2);
            body.innerHTML = "";
            canvas.appendChild(body2);
            body[0].appendChild(canvas);
            // previous mouse positions
            // They will be null initially
        if (data.activateDraw) {    
            let prevX = null
            let prevY = null
            // How thick the lines should be
            ctx.lineWidth = 5

            let draw = false

            // Set draw to true when mouse is pressed
            window.addEventListener("mousedown", (e) => draw = true)
            // Set draw to false when mouse is released
            window.addEventListener("mouseup", (e) => draw = false)

            window.addEventListener("mousemove", (e) => {
                // if draw is false then we won't draw
                if(prevX == null || prevY == null || !draw){
                    prevX = e.clientX
                    prevY = e.clientY
                    return
                }

                let currentX = e.clientX
                let currentY = e.clientY

                ctx.beginPath()
                ctx.moveTo(prevX, prevY)
                ctx.lineTo(currentX, currentY)
                ctx.stroke()

                prevX = currentX
                prevY = currentY
            })
        }
    });/*
}
draww();

export default draww;*/