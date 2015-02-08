/*
 * This file is part of pkmn
 *
 * (c) Elliot Wright <elliot@elliotwright.co>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

"use strict";

var TileFactory = require("./Entities/Tile");
var tileFactory = new TileFactory(createjs);
var Tile = tileFactory.build();

var HeroFactory = require("./Entities/Hero");
var heroFactory = new HeroFactory(createjs, Tile);
var Hero = heroFactory.build();
var hero1 = new Hero(0, 0);
var hero2 = new Hero(1, 1);
var hero3 = new Hero(2, 2);
var hero4 = new Hero(3, 3);
var hero5 = new Hero(4, 4);
var hero6 = new Hero(5, 5);

var stage = new createjs.Stage("pkmn");

stage.addChild(hero1);
stage.addChild(hero2);
stage.addChild(hero3);
stage.addChild(hero4);
stage.addChild(hero5);
stage.addChild(hero6);
stage.update();

// var BlockFactory     = require("./Entities/Factory/BlockFactory.js");
// var BoxFactory       = require("./Entities/Factory/BoxFactory.js");
// var DiamondFactory   = require("./Entities/Factory/DiamondFactory.js");
// var HeroFactory      = require("./Entities/Factory/HeroFactory");
// var TileFactory      = require("./Entities/Factory/TileFactory");
// var SubClassFactory  = require("./Utilities/Factory/SubClassFactory");
// var DomReadyListener = require("./Utilities/Listener/DomReadyListener");
// var Game             = require("./Game");

// var c = createjs;
// var domReadyListener = new DomReadyListener(Promise);
// var subClassFactory  = new SubClassFactory();
// var tileFactory      = new TileFactory(c, subClassFactory);
// var game             = new Game(c);

// var Tile = tileFactory.build();

// var blockFactory   = new BlockFactory(Tile, subClassFactory);
// var boxFactory     = new BoxFactory(Tile, subClassFactory);
// var diamondFactory = new DiamondFactory(Tile, subClassFactory);
// var heroFactory    = new HeroFactory(Tile, subClassFactory);

// var Block   = blockFactory.build();
// var Box     = boxFactory.build();
// var Diamond = diamondFactory.build();
// var Hero    = heroFactory.build();

// var levels = require("./Resources/config/levels");

// var classMap = {
//     "1": Block,
//     "2": Diamond,
//     "3": Box,
//     "4": Hero
// };

// domReadyListener
//     .isReady()
//     .then(function() {
//         console.log("Document is ready, initialising engine.");
//     })
//     .then(function() {
//         game.initialize("pkmn");

//         var map = levels[0].map;
//         var tiles = [];

//         map.forEach(function(row, y) {
//             tiles.push([]);

//             row.forEach(function(tileType, x) {
//                 var TileClass = classMap[tileType];

//                 if (TileClass) {
//                     var tile = new TileClass(x, y);

//                     game.getStage().addChild(tile);

//                     tiles[y][x] = tile;
//                 }
//             });
//         });

//         console.log(tiles);
//     })
// ;
