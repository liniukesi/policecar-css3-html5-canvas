/**
 * Created by aaronli on 4/3/14.
 */
$(function(e) {
    var context = document.getElementById('car_window')
        , canvas = context.getContext('2d');
    drawCar(canvas);
    $('body').on('mousemove', function(e) {
        spot(e);
    });
});

function spot(e) {
    e.preventDefault();
    var ex = e.clientX
        , ey = e.clientY
        , x = ex - 250
        , y = ey - 250;
    $('.spot').css({cursor: 'none', left: x, top: y });
}

function drawCar(canvas) {
    setCanvasStyle(canvas);

    drawCarWindowLeftBorder(canvas);
    drawCarWindowRightBorder(canvas);
    drawCarWindowBottomBorder(canvas);
    drawDirectionPanel(canvas);
    drawCopilot(canvas);
    drawDriver(canvas);

    drawByCanvas(canvas);
}

function setCanvasStyle(canvas) {
    canvas.beginPath();
    canvas.lineWidth = 5;
}

function drawByCanvas(canvas) {
    canvas.stroke();
}

function drawCarWindowLeftBorder(canvas) {
    canvas.moveTo(55, 0);
    canvas.lineTo(10, 145);
}

function drawCarWindowRightBorder(canvas) {
    canvas.moveTo(255, 0);
    canvas.lineTo(295, 145);
}

function drawCarWindowBottomBorder(canvas) {
    canvas.moveTo(10, 145);
    canvas.lineTo(297, 145);
}

function drawDirectionPanel(canvas) {
    canvas.arc(230, 145, 50, 0, 180);

    canvas.lineWidth = 10;
    canvas.moveTo(200, 100);
    canvas.lineTo(230, 145);

    canvas.moveTo(270, 110);
    canvas.lineTo(230, 145);
}

function drawCopilot(canvas) {
    canvas.strokeRect(60, 80, 50, 30);
    canvas.moveTo(60, 110);
    canvas.lineTo(40, 145);

    canvas.moveTo(110, 110);
    canvas.lineTo(130, 145);
}

function drawDriver(canvas) {
    canvas.strokeRect(200, 80, 50, 30);
    canvas.moveTo(200, 110);
    canvas.lineTo(180, 145);

    canvas.moveTo(250, 110);
    canvas.lineTo(265, 145);
}