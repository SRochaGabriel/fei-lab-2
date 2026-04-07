let canva1 = document.getElementById('cv-1');
let ctx1 = canva1.getContext('2d');
let canva2 = document.getElementById('cv-2');
let ctx2 = canva2.getContext('2d');

function desenhar_quadrado(ctx, pos_x, pos_y, size, color) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(pos_x, pos_y, size, size);
    ctx.closePath();
}

function desenhar_linha(ctx, initial_x, initial_y, final_x, final_y, color) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(initial_x, initial_y);
    ctx.lineTo(final_x, final_y);
    ctx.stroke();
    ctx.closePath();
}

function desenhar_arco(ctx, pos_x, pos_y, rad, i_angle, f_angle, fillColor, strokeColor) {
    ctx.beginPath();
    ctx.fillStyle = fillColor;
    ctx.strokeStyle = strokeColor;
    ctx.arc(pos_x, pos_y, rad, i_angle, f_angle);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function escrever(ctx, pos_x, pos_y, font_size, font_name, fillColor, strokeColor, text) {
    ctx.beginPath();
    ctx.fillStyle = fillColor;
    ctx.strokeStyle = strokeColor;
    ctx.font = `${font_size}px ${font_name}`;
    ctx.fillText(text, pos_x, pos_y);
    ctx.strokeText(text, pos_x, pos_y);
    ctx.closePath();
}

// ----------- Primeiro canva ---------------
// Quadrados
desenhar_quadrado(ctx1, 0, 0, 50, 'blue');
desenhar_quadrado(ctx1, 250, 0, 50, 'red');
desenhar_quadrado(ctx1, 270, 135, 30, 'aqua');
desenhar_quadrado(ctx1, 0, 150, 30, 'aqua');
desenhar_quadrado(ctx1, 0, 120, 30, 'aqua');
desenhar_quadrado(ctx1, 0, 240, 30, 'yellow');
desenhar_quadrado(ctx1, 0, 270, 30, 'yellow');
desenhar_quadrado(ctx1, 30, 270, 30, 'yellow');
desenhar_quadrado(ctx1, 240, 270, 30, 'black');
desenhar_quadrado(ctx1, 270, 240, 30, 'black');
desenhar_quadrado(ctx1, 270, 270, 30, 'black');
desenhar_quadrado(ctx1, 110, 150, 40, 'red');

// Linhas
desenhar_linha(ctx1, 0, 150, 300, 150, 'green');
desenhar_linha(ctx1, 0, 0, 150, 150, 'blue');
desenhar_linha(ctx1, 300, 0, 150, 150, 'red');
desenhar_linha(ctx1, 150, 150, 150, 260, 'black');

// Arcos
desenhar_arco(ctx1, 150, 300, 40, Math.PI, Math.PI*2, 'aqua', 'green');
desenhar_arco(ctx1, 150, 300, 60, (3*Math.PI)/2, Math.PI*2, 'transparent', 'green');
desenhar_arco(ctx1, 150, 300, 80, Math.PI, (3*Math.PI)/2, 'transparent', 'green');
desenhar_arco(ctx1, 150, 150, 60, Math.PI, Math.PI*2, 'transparent', 'green');
desenhar_arco(ctx1, 150, 150, 80, Math.PI, (5*Math.PI)/4, 'transparent', 'green');
desenhar_arco(ctx1, 150, 150, 80, (7*Math.PI)/4, Math.PI*2, 'transparent', 'green');
desenhar_arco(ctx1, 150, 115, 15, 0, Math.PI*2, 'aqua', 'blue')
desenhar_arco(ctx1, 70, 220, 15, 0, Math.PI*2, 'yellow', 'green');
desenhar_arco(ctx1, 230, 220, 15, 0, Math.PI*2, 'yellow', 'green');

// Escrita
escrever(ctx1, 115, 50, 20, 'Arial', 'black', 'transparent', 'Canvas');

// ----------- Segundo canva ---------------
// Quadrados
desenhar_quadrado(ctx2, 0, 0, 300, 'aquamarine');
desenhar_quadrado(ctx2, 0, 225, 300, 'dimgrey');
desenhar_quadrado(ctx2, 0, 215, 37, 'dodgerblue');
desenhar_quadrado(ctx2, 0, 230, 37, 'dodgerblue');
desenhar_quadrado(ctx2, 0, 263, 37, 'dodgerblue');
desenhar_quadrado(ctx2, 37, 263, 37, 'dodgerblue');
desenhar_quadrado(ctx2, 70, 263, 37, 'dodgerblue');
desenhar_quadrado(ctx2, 105, 263, 37, 'dodgerblue');
desenhar_quadrado(ctx2, 115, 263, 37, 'dodgerblue');
desenhar_quadrado(ctx2, 37, 210, 15, 'saddlebrown');
desenhar_quadrado(ctx2, 37, 195, 15, 'saddlebrown');
desenhar_quadrado(ctx2, 265, 248, 15, 'saddlebrown');
desenhar_quadrado(ctx2, 265, 233, 15, 'saddlebrown');
desenhar_quadrado(ctx2, 110, 150, 75, 'saddlebrown');
desenhar_quadrado(ctx2, 140, 188, 15, '#4e280c');
desenhar_quadrado(ctx2, 140, 200, 15, '#4e280c');
desenhar_quadrado(ctx2, 140, 210, 15, '#4e280c');
desenhar_quadrado(ctx2, 117, 165, 23, 'deepskyblue');
desenhar_quadrado(ctx2, 155, 165, 23, 'deepskyblue');

// Linhas
ctx2.beginPath();
ctx2.fillStyle = 'salmon';
ctx2.moveTo(110, 150);
ctx2.lineTo(147, 110);
ctx2.lineTo(185, 150);
ctx2.fill();
ctx2.closePath();

// Arcos
desenhar_arco(ctx2, 225, 75, 35, 0, Math.PI*2, 'yellow', 'transparent');
desenhar_arco(ctx2, 0, 215, 37, Math.PI, Math.PI*2, 'dodgerblue');
desenhar_arco(ctx2, 150, 300, 37, Math.PI, Math.PI*2, 'dodgerblue');
desenhar_arco(ctx2, 45, 180, 22, 0, Math.PI*2, 'green', 'transparent');
desenhar_arco(ctx2, 273, 218, 22, 0, Math.PI*2, 'green', 'transparent');