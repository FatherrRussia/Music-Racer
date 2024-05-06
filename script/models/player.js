import conf from "../config";
import Clock from "./clock";
import Vector2D from "./vector2d";
import Hitbox from "./hitbox";

class Player {
    name;
    score;
    image;
    speed;
    moving;
    update_timer;

    constructor(name, image){
        this.name = name;
        this.score = 0;
        
        this.update_timer = new Clock(125);
        this.moving = false;
        this.speed = new Vector2D();
    }

    draw(ctx){
        ctx.drawImage(this.image, this.position.x, this.position.y);
    }
}