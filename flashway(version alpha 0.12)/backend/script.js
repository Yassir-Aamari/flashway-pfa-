const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Game settings
const pixelSize = 8; // Each "pixel" in our game will be 8x8 actual screen pixels
const gameWidth = 40; // Game world width in game pixels
const gameHeight = 30; // Game world height in game pixels

canvas.width = gameWidth * pixelSize;
canvas.height = gameHeight * pixelSize;

// Player
const player = {
    x: Math.floor(gameWidth / 2), // Initial x position (in game pixels)
    y: Math.floor(gameHeight / 2), // Initial y position (in game pixels)
    size: 1, // Player size in game pixels (1x1 game pixel, so 8x8 screen pixels)
    color: '#0f0' // Green player
};

function drawPixel(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
}

function clearCanvas() {
    ctx.fillStyle = '#000'; // Black background
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawPlayer() {
    drawPixel(player.x, player.y, player.color);
}

function update() {
    // Game logic updates will go here
}

function gameLoop() {
    clearCanvas();
    update();
    drawPlayer();
    requestAnimationFrame(gameLoop);
}

// Keyboard controls
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowUp':
            if (player.y > 0) player.y--;
            break;
        case 'ArrowDown':
            if (player.y < gameHeight - player.size) player.y++;
            break;
        case 'ArrowLeft':
            if (player.x > 0) player.x--;
            break;
        case 'ArrowRight':
            if (player.x < gameWidth - player.size) player.x++;
            break;
    }
});

// Start the game loop
gameLoop();