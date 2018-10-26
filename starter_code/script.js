window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {

  }

  const canvas = document.getElementById('flappy');
  const level = canvas.getContext('2d');
  let frame = 0;
 
  window.addEventListener('keypress', function(key){
    if (key.keyCode === 37){
      // update gravity
    }
  })

  const drawBird = () => {
    flappy.update(level);
    
  }
  
  const drawLevel = () => {

  let image = new Image();
    image.onload =function () {
    level.drawImage(image, 0, 0, 800, 600);
  };
    image.src = './images/bg.png';
  }


  const createObstacles = (level) => {

    OBSTACLES.push(new Obstacles(level));
  }
  const drawObstacle = (level)=>{
    OBSTACLES.forEach(obstacle=>{
obstacle.draw(level);
    })
  }
  const flappy = new Flappy(level);
  let OBSTACLES = [];

  createObstacles(level); 
  drawObstacle(level);
   console.log(OBSTACLES);
   drawBird(level);

  const render = () => {
    //resetLevel();

    //drawLevel();

    //drawBird();

    //drawObstacle();


    //frame += 1;

  }

};
