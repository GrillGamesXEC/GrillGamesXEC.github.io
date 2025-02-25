const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');

const ROWS = 20;
const COLS = 10;
const BLOCK_SIZE = 30;

context.scale(BLOCK_SIZE, BLOCK_SIZE);

const board = Array.from({ length: ROWS }, () => Array(COLS).fill(0));

const pieces = [
    [ [1, 1], [1, 1] ], // O
    [ [0, 1, 0], [1, 1, 1] ], // T
    [ [1, 0, 0], [1, 1, 1] ], // L
    [ [0, 0, 1], [1, 1, 1] ], // J
    [ [1, 1, 0], [0, 1, 1] ], // S
    [ [0, 1, 1], [1, 1, 0] ], // Z
    [ [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0] ] // I
];

let piece = pieces[Math.floor(Math.random() * pieces.length)];
let position = { x: 3, y: 0 };

function drawPiece() {
    piece.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value) {
                context.fillStyle = 'blue';
                context.fillRect(position.x + x, position.y + y, 1, 1);
            }
        });
    });
}

function drawBoard() {
    board.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value) {
                context.fillStyle = 'black';
                context.fillRect(x, y, 1, 1);
            }
        });
    });
}

function update() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawBoard();
    drawPiece();
    position.y++;
    if (position.y + piece.length > ROWS) {
        position.y = 0;
        piece = pieces[Math.floor(Math.random() * pieces.length)];
    }
    setTimeout(update, 1000);
}

update();