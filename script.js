let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

function criarBG() {
    context.clearRect(0, 0, 16 * box, 16 * box);
    context.fillStyle = "rgba(166, 166, 166, 0.2)";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha(){
    for(i=0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function drawFood(){
    context.fillStyle = "black";
    context.fillRect(food.x+12, food.y, 12, 2);

    context.fillStyle = "black";
    context.fillRect(food.x+10, food.y+2, 16, 2);

    context.fillStyle = "black";
    context.fillRect(food.x+10, food.y+4, 16, 2);
    context.fillStyle = "#facfaa";
    context.fillRect(food.x+16, food.y+4, 4, 2);

    context.fillStyle = "black";
    context.fillRect(food.x+8, food.y+6, 20, 2);
    context.fillStyle = "#facfaa";
    context.fillRect(food.x+14, food.y+6, 8, 2);

    context.fillStyle = "black";
    context.fillRect(food.x+8, food.y+8, 20, 2);
    context.fillStyle = "#facfaa";
    context.fillRect(food.x+12, food.y+8, 12, 2);

    context.fillStyle = "black";
    context.fillRect(food.x+8, food.y+10, 20, 2);
    context.fillStyle = "#facfaa";
    context.fillRect(food.x+12, food.y+10, 12, 2);
    context.fillStyle = "black";
    context.fillRect(food.x+14, food.y+10, 2, 2);
    context.fillStyle = "black";
    context.fillRect(food.x+20, food.y+10, 2, 2);

    context.fillStyle = "black";
    context.fillRect(food.x+8, food.y+12, 20, 2);
    context.fillStyle = "#facfaa";
    context.fillRect(food.x+12, food.y+12, 12, 2);

    context.fillStyle = "black";
    context.fillRect(food.x+6, food.y+14, 24, 2);
    context.fillStyle = "#facfaa";
    context.fillRect(food.x+14, food.y+14, 8, 2);
    context.fillStyle = "#42413f";
    context.fillRect(food.x+8, food.y+14, 4, 2);
    context.fillStyle = "#42413f";
    context.fillRect(food.x+24, food.y+14, 4, 2);

    context.fillStyle = "black";
    context.fillRect(food.x+4, food.y+16, 28, 2);
    context.fillStyle = "#42413f";
    context.fillRect(food.x+6, food.y+16, 8, 2);
    context.fillStyle = "#42413f";
    context.fillRect(food.x+22, food.y+16, 8, 2);

    context.fillStyle = "black";
    context.fillRect(food.x+4, food.y+18, 28, 2);
    context.fillStyle = "#42413f";
    context.fillRect(food.x+6, food.y+18, 4, 2);
    context.fillStyle = "#42413f";
    context.fillRect(food.x+26, food.y+18, 4, 2);
    context.fillStyle = "#42413f";
    context.fillRect(food.x+12, food.y+18, 12, 2);
    context.fillStyle = "#262625";
    context.fillRect(food.x+14, food.y+18, 8, 2);
    context.fillStyle = "#42413f";
    context.fillRect(food.x+18, food.y+18, 2, 2);

    context.fillStyle = "black";
    context.fillRect(food.x+4, food.y+20, 28, 2);
    context.fillStyle = "#facfaa";
    context.fillRect(food.x+6, food.y+20, 4, 2);
    context.fillStyle = "#facfaa";
    context.fillRect(food.x+26, food.y+20, 4, 2);
    context.fillStyle = "#42413f";
    context.fillRect(food.x+12, food.y+20, 12, 2);
    context.fillStyle = "#262625";
    context.fillRect(food.x+14, food.y+20, 8, 2);
    context.fillStyle = "#42413f";
    context.fillRect(food.x+18, food.y+20, 2, 2);

    context.fillStyle = "black";
    context.fillRect(food.x+6, food.y+22, 24, 2);
    context.fillStyle = "#42413f";
    context.fillRect(food.x+12, food.y+22, 12, 2);
    context.fillStyle = "#262625";
    context.fillRect(food.x+14, food.y+22, 8, 2);
    context.fillStyle = "#42413f";
    context.fillRect(food.x+18, food.y+22, 2, 2);
    context.fillStyle = "#42413f";
    context.fillRect(food.x+4, food.y+22, 2, 2);

    
    context.fillStyle = "black";
    context.fillRect(food.x+10, food.y+24, 16, 2);
    context.fillStyle = "#42413f";
    context.fillRect(food.x+12, food.y+24, 12, 2);
    context.fillStyle = "black";
    context.fillRect(food.x+14, food.y+24, 8, 2);
    context.fillStyle = "#42413f";
    context.fillRect(food.x+2, food.y+24, 2, 2);

    context.fillStyle = "black";
    context.fillRect(food.x+10, food.y+26, 16, 2);
    context.fillStyle = "#42413f";
    context.fillRect(food.x, food.y+26, 2, 2);

    context.fillStyle = "black";
    context.fillRect(food.x+10, food.y+28, 16, 2);

    context.fillStyle = "black";
    context.fillRect(food.x+12, food.y+30, 4, 2);

    context.fillStyle = "black";
    context.fillRect(food.x+20, food.y+30, 4, 2);
}

document.addEventListener('keydown', update);

function update(event){
    if(event.keyCode == 37 && direction != 'right') direction = 'left';
    if(event.keyCode == 38 && direction != 'down') direction = 'up';
    if(event.keyCode == 39 && direction != 'left') direction = 'right';
    if(event.keyCode == 40 && direction != 'up') direction = 'down';
}

function iniciarJogo(){    
    if(snake[0].x > 15*box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == 'left') snake[0].x = 16 * box;
    if(snake[0].y > 15*box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == 'up') snake[0].y = 16 * box;

    for(i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert('Game Over :(');
        }
    }

    criarBG();
    criarCobrinha();
    drawFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if (direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    if(snakeX != food.x || snakeY != food.y){
        snake.pop();
    }
    else{food.x = Math.floor(Math.random() * 15 + 1) * box;
         food.y = Math.floor(Math.random() * 15 + 1) * box;
    }


    let newHead ={
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);


