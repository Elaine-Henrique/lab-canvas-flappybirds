window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };

  function startGame() {

  }

  const canvas = document.getElementById('flappy');
  const level = canvas.getContext('2d');
  let frames = 0;
  // let image = new Image();
  // image.onload = function () {
  //   resetLevel();
  //   level.drawImage(image, 0, 0, 800, 600);
  //   crash();
  //   showScore();
  // };
  // image.src = './images/bg.png';


  window.addEventListener('keypress', function (key) {
    if (key.keyCode === 32) {
      flappy.newPos();
    }
  })

  const drawBird = () => {
    // checkBorder();
    flappy.update(level);
  }

  const drawLevel = () => {
    let image = new Image();
    image.onload = function () {
      resetLevel();
      level.drawImage(image, 0, 0, 800, 600);
      crash();
      showScore();
    };
    image.src = './images/bg.png';
  }

  const resetLevel = () => {
    level.clearRect(0, 0, canvas.width, canvas.height);
  }

  const createObstacles = (level) => {
    if (frames % 50 === 0){
      OBSTACLES.unshift(new Obstacles(level))
    }
  }

  // const createLevel = (level) => {
  //   if (frames % 700 === 0){
  //     OBSTACLES.unshift(image)
  //   }
  // }

  const drawObstacle = (level) => {
    if(OBSTACLES.length > 5){
      OBSTACLES.pop();
    }
    OBSTACLES.forEach(obstacle => {
      obstacle.x -= 8;
      obstacle.draw(level);
    })
  }

  const showScore = () => {
    level.fillText('SCORE: ' + flappy.score, 40, 40);
  }

  const crash = () => {
    OBSTACLES.forEach(obstacle => {
      if( 
        obstacle.x < flappy.x + flappy.width &&
        (obstacle.height + obstacle.space < flappy.y ||
        obstacle.height > flappy.y))
        {
          clearInterval(interval);
        }

    })
  }

  const gameOver = () => {
    level.font = ('48px serif');
    level.fillText('Game Over', 220, 300);
  }

  const flappy = new Flappy(level);
  let OBSTACLES = [];
  // let LEVEL = [];

  const render = () => {
    drawLevel();
    drawBird(level);
    createObstacles(level);
    drawObstacle(level);
    frames += 1;
    flappy.score = frames;

  }
  const interval = setInterval(render, 50);
};
