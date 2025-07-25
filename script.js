// Remove QlockTwo code, keep only analog clock
const canvas = document.getElementById('analogClock');
const ctx = canvas.getContext('2d');
const w = canvas.width;
const h = canvas.height;
const cx = w / 2;
const cy = h / 2;
const radius = w * 0.45;

const fullscreenBtn = document.getElementById('fullscreenBtn');
const fullscreenIcon = document.getElementById('fullscreenIcon');
let isFullscreen = false;

const modeToggleIcon = document.getElementById('modeToggleIcon');
let isLightMode = false;

fullscreenIcon.onclick = function() {
    if (!isFullscreen) {
        const elem = document.documentElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
};

modeToggleIcon.onclick = function() {
    isLightMode = !isLightMode;
    document.body.classList.toggle('light-mode', isLightMode);
    modeToggleIcon.innerHTML = isLightMode ? '&#x2600;' : '&#x1F319;'; // sun/moon
    drawClock();
};

document.addEventListener('fullscreenchange', () => {
    isFullscreen = !!document.fullscreenElement;
    fullscreenIcon.innerHTML = isFullscreen ? '&#x2715;' : '&#x26F6;';
});

function drawClock() {
    ctx.clearRect(0, 0, w, h);
    // Draw clock face
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.strokeStyle = isLightMode ? '#bbb' : '#222';
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.restore();

    const now = new Date();
    const sec = now.getSeconds();
    const min = now.getMinutes();
    const hr = now.getHours() % 12;

    // Second: draw a blue line
    const secAngle = (Math.PI * 2 * sec / 60) - Math.PI / 2;
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + radius * 0.95 * Math.cos(secAngle), cy + radius * 0.95 * Math.sin(secAngle));
    ctx.strokeStyle = isLightMode ? '#0077cc' : '#00aaff';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();

    // Minute: draw a red dot
    const minAngle = (Math.PI * 2 * min / 60) - Math.PI / 2;
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx + radius * 0.75 * Math.cos(minAngle), cy + radius * 0.75 * Math.sin(minAngle), 12, 0, Math.PI * 2);
    ctx.fillStyle = isLightMode ? '#e53935' : '#ff3333';
    ctx.fill();
    ctx.restore();

    // Hour: draw a dot (black in light mode, white in dark mode)
    const hourAngle = (Math.PI * 2 * ((hr * 60 + min) / 720)) - Math.PI / 2;
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx + radius * 0.45 * Math.cos(hourAngle), cy + radius * 0.45 * Math.sin(hourAngle), 16, 0, Math.PI * 2);
    ctx.fillStyle = isLightMode ? '#222' : '#fff';
    ctx.fill();
    ctx.restore();
}

setInterval(drawClock, 1000);
drawClock();