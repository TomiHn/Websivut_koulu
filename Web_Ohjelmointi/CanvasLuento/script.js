const Draw = (inputtiValue) => {
    const size = inputtiValue;
    const half = size / 2;
    const radius = size / 5;

    
    let canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    canvas.width = size;
    canvas.height = size;
    canvas.style.outline = "1px solid";
    if(canvas.getContext){
        let ctx = canvas.getContext("2d");
        
        ctx.beginPath();
        ctx.arc(half, half, radius, 0, Math.PI * 2); // Outer circle
        // ctx.moveTo(110, 75);
        // ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
        // ctx.moveTo(65, 65);
        // ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
        // ctx.moveTo(95, 65);
        // ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
        ctx.stroke();
    
    
    }
}

let inputti = document.getElementById("size");
Draw(inputti.value);
inputti.onkeyup = (e) => Draw(inputti.value);




