let cells = [];
let buster; 
let len = 25
let stack;



function setup() {
  createCanvas(1200, 1200);
  setFrameRate(200)
  let cell_w = width / len;

  for (let j = 0; j < len; j++) {
    cells.push([]);
    for (let i = 0; i < len; i++) {
      let cell = new Cell(i, j, cell_w);  
      cells[j][i] = cell;
    }
  
  }

  //Generate Grid

  


  //Initialize Wall Buster
  buster = new Buster(cells)
  
  ///Initialize stack
  stack = []
  buster.current.visited = true
  stack.push(buster.current)
}


function validIndex(index) {
  if (index[0] < 0 || index[0] > len-1 || index[1] < 0 || index[1] > len-1) {
    return false
  } else {
    return true
  }
}

function nextNeighbor(cell) {
  neighbors = []
  let top = [cell.x, cell.y - 1]
  let left = [cell.x - 1, cell.y]
  let right = [cell.x + 1, cell.y]
  let bottom = [cell.x, cell.y + 1]

  if (validIndex(top) && !cells[top[1]][top[0]].visited) {
    neighbors.push(cells[top[1]][top[0]])
  }

  if (validIndex(left) && !cells[left[1]][left[0]].visited) {
    neighbors.push(cells[left[1]][left[0]])
  }

  if (validIndex(right) && !cells[right[1]][right[0]].visited) {
    neighbors.push(cells[right[1]][right[0]])
  } 

  if (validIndex(bottom) && !cells[bottom[1]][bottom[0]].visited) {
    neighbors.push(cells[bottom[1]][bottom[0]])
  } 

  if (neighbors.length > 0) {
    let choice = floor(random(0, neighbors.length));
    return neighbors[choice]
  } else {
      return false
  }
}

for (let i = 0; i < 20; i++) {
  for (let j = 0; j < 20; j++) {
    
  }

}

function removeWalls(cell1, cell2) {
  let x = cell1.x - cell2.x
  let y = cell1.y - cell2.y
  
  if (x === -1) {
    cell1.walls[2] = false
    cell2.walls[1] = false
  } else if (y === -1){
      cell1.walls[3] = false
      cell2.walls[0] = false
    } else if (x === 1) {
        cell1.walls[1] = false
        cell2.walls[2] = false

    } else if (y === 1) {
        cell1.walls[0] = false
        cell2.walls[3] = false

  }
}




function draw() {
  background(255);
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      cells[i][j].show();
    }
  
  }
  
  buster.show()

  if (stack.length > 0) {
    buster.current = stack.pop()
    let next = nextNeighbor(buster.current);

    if (next) {
      stack.push(buster.current)
      removeWalls(buster.current, next)
      buster.current = next
      buster.current.visited = true
      stack.push(buster.current)

    }
    
  } else {
    setFrameRate(0)
  }

}
