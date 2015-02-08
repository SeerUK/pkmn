/*
 * This file is part of pkmn
 *
 * (c) Elliot Wright <elliot@elliotwright.co>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

"use strict";

var BlockFactory     = require("./Entities/Factory/BlockFactory");
var BoxFactory       = require("./Entities/Factory/BoxFactory");
var DiamondFactory   = require("./Entities/Factory/DiamondFactory");
var HeroFactory      = require("./Entities/Factory/HeroFactory");
var TileFactory      = require("./Entities/Factory/TileFactory");
var DomReadyListener = require("./Utilities/Listener/DomReadyListener");
var Game             = require("./Game");

var c = createjs;
var domReadyListener = new DomReadyListener(Promise);
var game             = new Game(c);

var TILE_SIZE = 64;

var tileFactory = new TileFactory(c, TILE_SIZE);
var Tile = tileFactory.build();

var blockFactory   = new BlockFactory(c, Tile, TILE_SIZE);
var boxFactory     = new BoxFactory(c, Tile, TILE_SIZE);
var diamondFactory = new DiamondFactory(c, Tile, TILE_SIZE);
var heroFactory    = new HeroFactory(c, Tile, TILE_SIZE);

var Block   = blockFactory.build();
var Box     = boxFactory.build();
var Diamond = diamondFactory.build();
var Hero    = heroFactory.build();

var levels = require("./Resources/config/levels");

var classMap = {
    "1": Block,
    "2": Diamond,
    "3": Box,
    "4": Hero
};

domReadyListener
    .isReady()
    .then(function() {
        console.log("Document is ready, initialising engine.");
    })
    .then(function() {
        game.initialize("pkmn");

        var map = levels[0].map;
        var tiles = [];

        map.forEach(function(row, y) {
            tiles.push([]);

            row.forEach(function(tileType, x) {
                var TileClass = classMap[tileType];

                if (TileClass) {
                    var tile = new TileClass(x, y);

                    game.getStage().addChild(tile);

                    tiles[y][x] = tile;
                }
            });
        });
    })
;
