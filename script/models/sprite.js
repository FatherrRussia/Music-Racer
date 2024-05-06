import conf from "../config";
import Clock from "./clock";    
import Vector2D from "./vector2d";
import Hitbox from "./hitbox";  ù

class Sprite{
    image;
    spriteX;
    spriteY;
    spriteHeight;
    spriteWidth;
    maxSpriteX;
    maxSpriteY;
    velocity;

    constructor(spriteSheetSrc, square_width, squareheight, nImagesX, nImagesY, width, height, spawnX, spawnY){
        super(spawnX, spawnY, width, height);

        this.image = new Image();
        this.image.src = spriteSheetSrc;
        this.spriteWidth = square_width;
        this.spriteHeight = squareheight;

        this.spriteX = 0;
        this.spriteY = 0;
        this.maxSpriteX = nImagesX;
        this.maxSpriteY = nImagesY;
        this.clock = new Clock(120);

        this.position.x = spawnX;
        this.position.y = spawnY;
        this.velocity = new Vector2D(5, 0);
    }

    update(){
        this.clock.update();
        this.position.add(this.velocity);
        if(this.clock.tick()){
            if(this.spriteX == this.maxSpriteX){
                this.spriteY = (this.spriteY + 1) % this.maxSpriteY;
            }
        }
    }

    draw(ctx){
        ctx.drawImage(this.image, this.spriteX * this.spriteWidth, 
                      this.spriteY * this.spriteHeight, this.spriteWidth, 
                      this.spriteHeight, this.position.x, this.position.y, 
                      this.width, this.height);
    }
}

export default Sprite;