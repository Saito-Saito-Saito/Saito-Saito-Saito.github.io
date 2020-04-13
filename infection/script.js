$(function () {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2s');

    ctx.strokeRect(0, 0, 80, 80);
    ctx.fillRect(100, 0, 80, 80);
    ctx.fillStyle = 'blue';
});