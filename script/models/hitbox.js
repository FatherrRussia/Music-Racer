import Vector2D from "./vector2d";

class Hitbox {
    position;
    width;
    height;

    constructor(x, y, width, height) {
        this.position = new Vector2D(x, y);
        this.width = width;
        this.height = height;
    }

    Intersection(point, area) {
        console.log(area);
        if (point.x > area.position.x && point.x < area.position.x + area.width &&
            point.y > area.position.y && point.y < area.position.y + area.height) {
            return true;
        }
        return false;
    }

    draw(ctx) {
        ctx.lineWidth = "5";
        ctx.strokeStyle = "red";
        ctx.strokeRect(this.position.x, this.canvas.height - this.position.y, this.width, this.height);
    }
}

export default Hitbox;