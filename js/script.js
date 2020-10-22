let rect_w = 20
let rect_h = 20

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

let status = false

function set_status(st, e) {
    status = st
}

function init() {
    let canvas = document.getElementById("creative_field")
    canvas.addEventListener("mousemove", function (e) { findxy('move', e) }, false);
    canvas.addEventListener("mousedown", function (e) { set_status(true, e) }, false);
    canvas.addEventListener("mouseup", function (e) { set_status(false, e) }, false);
    canvas.addEventListener("mouseout", function (e) { set_status(false, e) }, false);
    drawGrid();
}