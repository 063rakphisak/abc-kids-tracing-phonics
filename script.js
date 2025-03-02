let tracingCanvas;
let context;

function startTracing() {
    document.querySelector('.main-content').style.display = 'none';
    document.querySelector('#tracing-container').style.display = 'block';

    tracingCanvas = document.getElementById('tracing-canvas');
    context = tracingCanvas.getContext('2d');
    context.lineWidth = 5;
    context.lineCap = 'round';
    context.strokeStyle = 'black';
    let isDrawing = false;

    tracingCanvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
        context.moveTo(e.offsetX, e.offsetY);
    });

    tracingCanvas.addEventListener('mousemove', (e) => {
        if (isDrawing) {
            context.lineTo(e.offsetX, e.offsetY);
            context.stroke();
        }
    });

    tracingCanvas.addEventListener('mouseup', () => {
        isDrawing = false;
    });
}

function clearCanvas() {
    context.clearRect(0, 0, tracingCanvas.width, tracingCanvas.height);
}

function startPhonics() {
    document.querySelector('.main-content').style.display = 'none';
    document.querySelector('#phonics-container').style.display = 'block';
}

function playSound(letter) {
    let audio = new Audio(`sounds/${letter}.mp3`);
    audio.play();
}