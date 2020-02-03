var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'sawblade', x: 400, y: 200},
                {type: 'sawblade', x: 600, y: 300},
                {type: 'sawblade', x: 900, y: 300},
                {type: "enemy", x: 400, y: 275},
                {type: "enemy", x: 700, y: 275},
                {type: "goal", x: 2000, y: 125, img: 'img/goal.png'},
                {type: "goal", x: 3000, y: 200, img: 'img/goal2.png'},
                {type: "goal", x: 4000, y: 125, img: 'img/omae.wa.jpg'},
                {type: "goal", x: 5000, y: 200, img: 'img/kono.jpg'},
                {type: "ring", x: 600, y: 250},
                {type: "ring", x: 580, y: 250},
                {type: "ring", x: 620, y: 250},
                {type: "ring", x: 900, y: 250},
                {type: "ring", x: 880, y: 250},
                {type: "ring", x: 920, y: 250}
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE

        var hitZoneSize = 25;
        var damageFromObstacle = 10;
        
        for (var i = 0; i < levelData.gameItems.length; i++) {
            var gameItem = levelData.gameItems[i];
            
            if (gameItem.type === "sawblade") {
                createSawBlade(gameItem.x, gameItem.y);
            }
            else if (gameItem.type === "box") {
                drawBox(gameItem.x, gameItem.y);
            }
            else if (gameItem.type === "enemy") {
                createEnemy(gameItem.x, gameItem.y);
            }
            else if (gameItem.type === "goal") {
                createReward(gameItem.x, gameItem.y, gameItem.img);
            }
            else if (gameItem.type === "ring") {
                createCollectible(gameItem.x, gameItem.y);
            }
        }
        
        function createSawBlade(x,y) {
            var myObstacle = game.createObstacle(hitZoneSize, damageFromObstacle);
            myObstacle.x = x;
            myObstacle.y = y;
            game.addGameItem(myObstacle);  
            
            var obstacleImage = draw.bitmap('img/sawblade.png');
            myObstacle.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;
        } 
        
        function drawBox(x, y) {
            damageFromObstacle = 0;
            var myBox = game.createObstacle(hitZoneSize, damageFromObstacle);
            myBox.x = x;
            myBox.y = y;
            game.addGameItem(myBox);
            
            var boxImage = draw.rect(50, 50, x, y);
            myBox.addChild(boxImage);
            boxImage.x-=25;
            boxImage.y-=25;
        }
        
        function createEnemy(x, y) {
        
            var enemy =  game.createGameItem('enemy', 25);
            var redSquare = draw.rect(50,50,'red');
            redSquare.x = -25;
            redSquare.y = -25;
            enemy.addChild(redSquare);
            enemy.x = x;
            enemy.y = y;
            game.addGameItem(enemy);
            enemy.velocityX = -2;
            enemy.rotationalVelocity = 10;
            
            enemy.onProjectileCollision = function() {
                enemy.flyTo(1000, 300);
                game.increaseScore(500);
            };
            
            enemy.onPlayerCollision = function() {
                game.changeIntegrity(-10);
            };
        }
        
        function createReward(x, y, img) {
            var reward = game.createGameItem('goal', 200);
            var goal = draw.bitmap(img);
            goal.x = -300;
            goal.y = -300;
            reward.addChild(goal);
            reward.x = x;
            reward.y = y;
            game.addGameItem(reward);
            reward.velocityX = -2;
            
            reward.onPlayerCollision = function() {
                game.increaseScore(5000);
                game.changeIntegrity(-1000000);
            };
        }
        
        function createCollectible(x, y) {
            var collect = game.createGameItem('ring', 10);
            var ring = draw.bitmap('img/ring.png');
            collect.x = x;
            collect.y = y;
            ring.x = -10;
            ring.y = -10;
            collect.addChild(ring);
            game.addGameItem(collect);
            collect.velocityX = -2;
            
            collect.onPlayerCollision = function() {
                game.increaseScore(100);
                collect.shrink();
            }
        }
        
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}