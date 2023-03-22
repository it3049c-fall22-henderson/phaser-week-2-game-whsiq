class Scene1 extends Phaser.Scene {
    constructor() {
        super("playGame");
    }

    preload() {

    }

    create() {
        var cellSize = (gameSettings.cellXCount + gameSettings.edgeCount * 2) * (gameSettings.cellYCount + gameSettings.edgeCount * 2);
        var cellSizeTotal = cellSize;
        while(cellSize--) {
            var cell = new Cell(cellSizeTotal - cellSize);
            cell.alive = this.game.rnd.integerInRange(0, 1) === 0;
            gameSettings.cells.push
        }
    }
}