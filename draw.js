const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const scale = 30;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

var snake;

(function setup() {
  snake = new Snake();
  fruit = new Fruit();
  fruit.pickLocation();

  window.setInterval(() => {
   context.clearRect(0, 0, canvas.width, canvas.height);
   fruit.draw();
   snake.update();
   snake.draw();

   if(snake.eat(fruit)){
     fruit.pickLocation();
   }
   document.getElementById('score').innerText = snake.total;
   snake.checkCollision();

}, 250);
}());

window.addEventListener('keydown', ((event) => {
 const direction = event.key.replace('Arrow', '');
 console.log(direction);
 snake.changeDirection(direction);
}))






