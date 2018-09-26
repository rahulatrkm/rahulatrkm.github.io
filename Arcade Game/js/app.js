// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
    constructor (posX = 200, posY = 380, speed = 50) {
        this.posX = posX;
        this.posY = posY;
        this.speed = speed;
        this.sprite = 'images/char-boy.png';
    }

    update() {
        // limiting the movement to boundaries
        if (this.posX > 400) {
            this.posX = 400;
        }

        if (this.posY > 380) {
            this.posY = 380;
        }

        if (this.posX < 0) {
            this.posX = 0;
        }

        // checking the winning condition
        if (this.posY < 0) {
            this.posY = 200;
            this.posX = 380;
        }
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.posX, this.posY);
    }

    handleInput(keyPress) {
        if (keyPress === 'left') {
            this.posX -= this.speed + 50;
        }
        else if (keyPress === 'right') {
            this.posX += this.speed + 50;
        }
        else if (keyPress === 'up') {
            this.posY -= this.speed + 30;
        }
        else if (keyPress === 'down') {
            this.posY += this.speed + 30;
        }
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let allEnemies = [];
let player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
