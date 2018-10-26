function Flappy(level){
    this.x = 40;
    this.y = 300;
    this.width = 50;
    this.height = 50;
    this.speedX;
    this.speedY = 10;
    this.gravity;
    this.gravitySpeed = 2;
    this.level = level;
    this.score = 0;

    this.update = () => {
        this.y += this.gravitySpeed;
        let image = new Image();
        image.onload = () => {
            if(this.y > 550) this.y = 550;
            if(this.y < 0) this.y = 0;
          this.level.drawImage(image, this.x, this.y, this.width, this.height);
        };
        image.src = './images/flappy.png';
    }

    this.newPos = () => {
        this.y -= this.speedY + this.gravitySpeed;
        //updATE POSITION
    }
}