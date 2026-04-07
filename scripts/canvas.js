let canva1 = document.getElementById('cv-1');
let ctx1 = canva1.getContext('2d');

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
    ctx.font = `${font_size} ${font_name}`;
    ctx.fillText(text, pos_x, pos_y);
    ctx.strokeText(text, pos_x, pos_y);
    ctx.closePath();
}

// Primeiro canva
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

desenhar_linha(ctx1, 0, 150, 300, 150, 'green');