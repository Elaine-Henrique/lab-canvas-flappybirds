function Obstacles(level){
    this.x=100;
    this.y=100;
    this.width;
    this.height = Math.random()*200+100;
    this.space=Math.random()*150+100;
    this.level=level;
this.draw = () => {
    let bottom = new Image();
    bottom.onload = () => {
      this.level.drawImage(bottom, this.x, 600, 50, -this.height);
    };
    let top = new Image();
    top.onload =  ()=> {
      this.level.drawImage(top, this.x, 0, 50, 600 - this.height - this.space);
    };
    
    bottom.src = './images/obstacle_bottom.png';
    top.src='./images/obstacle_top.png';
}
}
