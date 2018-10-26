function Flappy(level){
    this.x = 40;
    this.y = 300;
    this.width = 50;
    this.height = 50;
    this.speedX;
    this.speedY;
    this.gravity;
    this.gravitySpeed;
    this.level = level;

    this.update = () => {
        let image = new Image();
        image.onload = () => {
          this.level.drawImage(image, this.x, this.y, this.width, this.height);
        };
        image.src = './images/flappy.png';
    }

    this.newPos = () => {
        //updATE POSITION
            this.y += 1;

    }
}