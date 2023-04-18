const CreateCanvas = (size) =>{

    if(document.getElementById("myCanvas")){
        document.getElementById("myCanvas").remove();
    }

    let canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    canvas.style.outline = "1px solid";
    canvas.style.display = "block"
    canvas.id = "myCanvas";
    document.body.appendChild(canvas);

    return canvas;
}

const UpdateCanvas = (canvas, half, radius) => {
    
    let ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(half, half, radius, 0, Math.PI * 2); // Outer circle
    ctx.moveTo(half + 65, half);
    ctx.arc(half, half, radius / 1.5, 0, Math.PI, false); // Mouth (clockwise)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
    ctx.stroke();
}

const Draw = (inputtiValue) => {
    const size = inputtiValue;
    const half = size / 2;
    const radius = size / 5;

    const canvas = CreateCanvas(size);
    
    UpdateCanvas(canvas, half, radius);
}

let inputti = document.getElementById("size");
Draw(inputti.value);
inputti.onkeyup = (e) => Draw(inputti.value);




