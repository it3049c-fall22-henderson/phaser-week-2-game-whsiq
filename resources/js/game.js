window.onload = function() {

    config = {
        width: 1920,
        height: 1080,
        backgroundColor: 0x000000,
        scene: [Scene1]
    }

    gameSettings = {
        cellXCount: 160,
        cellYCount: 90,
        edgeCount: 6,
        cells: [],
        stagingCells: []

    }

    var game = new Phaser.Game(config);
}