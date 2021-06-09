export class lifeState {
  state: number[][] = [[0]];
  neighbors: number[][] = [[0]];

  constructor(public sizex: number, public sizey: number) {
    //  инициализировать массив
    this.state = Array.from(Array(sizey), () => new Array(sizex).fill(0));
    this.neighbors = Array.from(Array(sizey), () => new Array(sizex).fill(0));
  }

  randSize(size: number): number {
    let x = Math.floor(Math.random() * size);
    if (x === size) x--;
    return x;
  }

  randomSeed(seedPercent: number) {
    //  заполнить массив случайно
    const totalSize = Math.floor(this.sizex * this.sizey * seedPercent);
    for (let i = 0; i < totalSize; i++) {
      const xRand = this.randSize(this.sizex);
      const yRand = this.randSize(this.sizey);
      this.state[yRand][xRand] = 1;
    }
  }

  fillStateFromConst(b: number[][], startx: number, starty: number) {
    for (let y = 0; y < b.length; y++) {
      for (let x = 0; x < b[0].length; x++) {
        this.state[starty + y][startx + x] = b[y][x];
      }
    }
  }

  beehiveSeed(startx: number, starty: number) {
    const b = [
      [0, 1, 0],
      [1, 0, 1],
      [1, 0, 1],
      [0, 1, 0],
    ];

    this.fillStateFromConst(b, startx, starty);
  }

  squareSeed(startx: number, starty: number) {
    const b = [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ];

    this.fillStateFromConst(b, startx, starty);
  }

  planer1Seed(startx: number, starty: number) {
    const b = [
      [0, 1, 0],
      [0, 0, 1],
      [1, 1, 1],
    ];

    this.fillStateFromConst(b, startx, starty);
  }

  checkOneNeigbor(
    deltaX: number,
    deltaY: number,
    x: number,
    y: number
  ): number {
    x += deltaX;
    y += deltaY;

    if (x < 0 || y < 0) return 0;
    if (x >= this.sizex || y >= this.sizey) return 0;
    return this.state[y][x];
  }

  caclNeighbors() {
    for (let y = 0; y < this.sizey; y++) {
      for (let x = 0; x < this.sizex; x++) {
        let numNeighbors = 0;

        // 8 вариантов соседей
        for (let deltaX = -1; deltaX <= 1; deltaX++) {
          for (let deltaY = -1; deltaY <= 1; deltaY++) {
            if (!(deltaX === 0 && deltaY === 0))
              numNeighbors += this.checkOneNeigbor(deltaX, deltaY, x, y);
          }
        }

        this.neighbors[y][x] = numNeighbors;
      }
    }
  }

  nextState() {
    for (let y = 0; y < this.sizey; y++) {
      for (let x = 0; x < this.sizex; x++) {
        if (this.state[y][x] > 0) {
          if (this.neighbors[y][x] < 2 || this.neighbors[y][x] > 3)
            this.state[y][x] = 0;
        } else {
          if (this.neighbors[y][x] === 3) this.state[y][x] = 1;
        }
      }
    }
  }

  printSize() {
    console.log(this.state);
    console.log(this.neighbors);
  }
}
