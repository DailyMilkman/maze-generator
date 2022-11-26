

class Cell {
    constructor(x, y, width) {
        this.x = x;
        this.y = y;


        this.i = this.x * width
        this.j = this.y * width
        this.w = width;
        this.visited = false;
        this.walls = [true, true, true, true];
        this.neighbors = []
    }


    





    show() {
        if (this.visited) {
            noStroke()
            fill(0);
            rect(this.i + 1, this.j + 1, this.w);
        }
        
        
        stroke(255)
        strokeWeight(2)
        //Top Line
        
        if (this.walls[0]) {
            line(this.i, this.j, this.i + this.w, this.j);
        }
        

        //Left Line
        if (this.walls[1]) {
            line(this.i, this.j, this.i, this.j + this.w);
        }

        //Right Line
        if (this.walls[2]) {
            line(this.i + this.w, this.j, this.i + this.w, this.j + this.w);
        }
        

        //Bottom Line
        
        if (this.walls[3]) {
            line(this.i, this.j + this.w, this.i + this.w, this.j + this.w);
        }
        

        
    }
}
