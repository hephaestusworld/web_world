function drawGrid() {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)    
    let canvas = document.getElementById("creative_field")
    canvas.width = vw
    canvas.height = vh
    let ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.lineWidth = "1";
    ctx.strokeStyle = "green";
    let rect_w = 20
    let rect_h = 20
    for (let x = 0; x < vw; x += rect_w) {
        for (let y = 0; y < vh; y += rect_h) {
            ctx.rect(x, y, rect_w, rect_h);
        }
    }
    
    ctx.stroke();
}

function resizeCanvas(event) {
    drawGrid();
}