class Buster {
    constructor(cells) {
        this.grid = [0, 0]
        this.current = cells[0][0]
        this.current.visited = true
    }

    show(){
        let x = this.current.i + 2
        let y = this.current.j + 2
        stroke(255, 0, 0, 200)
        fill(255, 0, 0, 200)
        rect(x, y, this.current.w - 4)
    }
}