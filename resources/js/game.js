
var Game = {};

Game.init = function(){
    game.stage.disableVisibilityChange = true;
};

Game.preload = function() {
    game.load.tilemap('map', 'resources/assets/map/example_map.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.spritesheet('tileset', 'resources/assets/map/tilesheet.png',32,32);
    game.load.image('sprite','resources/assets/sprites/sprite.png'); // player sprite
};

Game.create = function(){
    Game.playerMap = {};
    var map = game.add.tilemap('map');
    map.addTilesetImage('tilesheet', 'tileset');
    var layer;
    for(var i = 0; i < map.layers.length; i++) {
        layer = map.createLayer(i);
    }
    layer.inputEnabled = true; // Allows clicking on the map
    Client.askNewPlayer();
    layer.events.onInputUp.add(Game.getCoordinates, this);
};

Game.addNewPlayer = function(id,x,y) {
    Game.playerMap[id] = game.add.sprite(x,y,'sprite');
};

Game.removePlayer = function(id){
    Game.playerMap[id].destroy();
    delete Game.playerMap[id];
};

Game.getCoordinates = function(layer, pointer){
    Client.sendClick(pointer.worldX, pointer.worldY);
};

Game.movePlayer = function(id, x, y) {
    var player = Game.playerMap[id];
    var distance = Phaser.Math.distance(player.x, player.y, x, y);
    var duration = distance * 10;
    var tween = game.add.tween(player);
    tween.to({x:x,y:y}, duration);
    tween.start();
};

var game = new Phaser.Game(800, 600, Phaser.AUTO, document.getElementById('game'));
game.state.add('Game',Game);
game.state.start('Game');