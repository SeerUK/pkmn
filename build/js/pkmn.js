(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
 * This file is part of pkmn
 *
 * (c) Elliot Wright <elliot@elliotwright.co>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

"use strict";

module.exports = function(c, Tile) {
    var that = this;

    var Hero = function(x, y) {
        this.Tile_constructor.apply(this, arguments);

        that.initializeDisplay.call(this);
    };

    that.initializeDisplay = function() {
        var entity = new c.Shape();
        entity.graphics.beginFill("green").drawRoundRect(0, 0, 32, 32, 8);

        this.addChild(entity);
    };

    return {
        build: function() {
            c.extend(Hero, Tile);

            return c.promote(Hero, "Tile");
        }
    };
};

},{}],2:[function(require,module,exports){
/*
 * This file is part of pkmn
 *
 * (c) Elliot Wright <elliot@elliotwright.co>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

"use strict";

var TILE_SIZE = 32;

module.exports = function(c) {
    var that = this;

    var Tile = function(x, y) {
        this.Container_constructor.apply(this, arguments);

        that.setPosition.call(this, x, y);
    };

    that.setPosition = function(x, y) {
        this.cX = x;
        this.cY = y;

        this.x = x * TILE_SIZE;
        this.y = y * TILE_SIZE;

        console.log(this);
    };

    return {
        build: function() {
            c.extend(Tile, c.Container);

            return c.promote(Tile, "Container");
        }
    };
};

},{}],3:[function(require,module,exports){
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

},{"./Entities/Hero":1,"./Entities/Tile":2}]},{},[3])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZWVyL2dpdC9wcm9qZWN0cy9TZWVyVUtAZ2l0aHViLmNvbS9wa21uL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9zZWVyL2dpdC9wcm9qZWN0cy9TZWVyVUtAZ2l0aHViLmNvbS9wa21uL3NyYy9qcy9zcmMvRW50aXRpZXMvSGVyby5qcyIsIi9Vc2Vycy9zZWVyL2dpdC9wcm9qZWN0cy9TZWVyVUtAZ2l0aHViLmNvbS9wa21uL3NyYy9qcy9zcmMvRW50aXRpZXMvVGlsZS5qcyIsIi9Vc2Vycy9zZWVyL2dpdC9wcm9qZWN0cy9TZWVyVUtAZ2l0aHViLmNvbS9wa21uL3NyYy9qcy9zcmMvZmFrZV82YmE3MDMzMi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBwa21uXG4gKlxuICogKGMpIEVsbGlvdCBXcmlnaHQgPGVsbGlvdEBlbGxpb3R3cmlnaHQuY28+XG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGMsIFRpbGUpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgICB2YXIgSGVybyA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICAgICAgdGhpcy5UaWxlX2NvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgdGhhdC5pbml0aWFsaXplRGlzcGxheS5jYWxsKHRoaXMpO1xuICAgIH07XG5cbiAgICB0aGF0LmluaXRpYWxpemVEaXNwbGF5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBlbnRpdHkgPSBuZXcgYy5TaGFwZSgpO1xuICAgICAgICBlbnRpdHkuZ3JhcGhpY3MuYmVnaW5GaWxsKFwiZ3JlZW5cIikuZHJhd1JvdW5kUmVjdCgwLCAwLCAzMiwgMzIsIDgpO1xuXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQoZW50aXR5KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYnVpbGQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgYy5leHRlbmQoSGVybywgVGlsZSk7XG5cbiAgICAgICAgICAgIHJldHVybiBjLnByb21vdGUoSGVybywgXCJUaWxlXCIpO1xuICAgICAgICB9XG4gICAgfTtcbn07XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgcGttblxuICpcbiAqIChjKSBFbGxpb3QgV3JpZ2h0IDxlbGxpb3RAZWxsaW90d3JpZ2h0LmNvPlxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIFRJTEVfU0laRSA9IDMyO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGMpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgICB2YXIgVGlsZSA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICAgICAgdGhpcy5Db250YWluZXJfY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgICAgICB0aGF0LnNldFBvc2l0aW9uLmNhbGwodGhpcywgeCwgeSk7XG4gICAgfTtcblxuICAgIHRoYXQuc2V0UG9zaXRpb24gPSBmdW5jdGlvbih4LCB5KSB7XG4gICAgICAgIHRoaXMuY1ggPSB4O1xuICAgICAgICB0aGlzLmNZID0geTtcblxuICAgICAgICB0aGlzLnggPSB4ICogVElMRV9TSVpFO1xuICAgICAgICB0aGlzLnkgPSB5ICogVElMRV9TSVpFO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBidWlsZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjLmV4dGVuZChUaWxlLCBjLkNvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIHJldHVybiBjLnByb21vdGUoVGlsZSwgXCJDb250YWluZXJcIik7XG4gICAgICAgIH1cbiAgICB9O1xufTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBwa21uXG4gKlxuICogKGMpIEVsbGlvdCBXcmlnaHQgPGVsbGlvdEBlbGxpb3R3cmlnaHQuY28+XG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgVGlsZUZhY3RvcnkgPSByZXF1aXJlKFwiLi9FbnRpdGllcy9UaWxlXCIpO1xudmFyIHRpbGVGYWN0b3J5ID0gbmV3IFRpbGVGYWN0b3J5KGNyZWF0ZWpzKTtcbnZhciBUaWxlID0gdGlsZUZhY3RvcnkuYnVpbGQoKTtcblxudmFyIEhlcm9GYWN0b3J5ID0gcmVxdWlyZShcIi4vRW50aXRpZXMvSGVyb1wiKTtcbnZhciBoZXJvRmFjdG9yeSA9IG5ldyBIZXJvRmFjdG9yeShjcmVhdGVqcywgVGlsZSk7XG52YXIgSGVybyA9IGhlcm9GYWN0b3J5LmJ1aWxkKCk7XG52YXIgaGVybzEgPSBuZXcgSGVybygwLCAwKTtcbnZhciBoZXJvMiA9IG5ldyBIZXJvKDEsIDEpO1xudmFyIGhlcm8zID0gbmV3IEhlcm8oMiwgMik7XG52YXIgaGVybzQgPSBuZXcgSGVybygzLCAzKTtcbnZhciBoZXJvNSA9IG5ldyBIZXJvKDQsIDQpO1xudmFyIGhlcm82ID0gbmV3IEhlcm8oNSwgNSk7XG5cbnZhciBzdGFnZSA9IG5ldyBjcmVhdGVqcy5TdGFnZShcInBrbW5cIik7XG5cbnN0YWdlLmFkZENoaWxkKGhlcm8xKTtcbnN0YWdlLmFkZENoaWxkKGhlcm8yKTtcbnN0YWdlLmFkZENoaWxkKGhlcm8zKTtcbnN0YWdlLmFkZENoaWxkKGhlcm80KTtcbnN0YWdlLmFkZENoaWxkKGhlcm81KTtcbnN0YWdlLmFkZENoaWxkKGhlcm82KTtcbnN0YWdlLnVwZGF0ZSgpO1xuXG4vLyB2YXIgQmxvY2tGYWN0b3J5ICAgICA9IHJlcXVpcmUoXCIuL0VudGl0aWVzL0ZhY3RvcnkvQmxvY2tGYWN0b3J5LmpzXCIpO1xuLy8gdmFyIEJveEZhY3RvcnkgICAgICAgPSByZXF1aXJlKFwiLi9FbnRpdGllcy9GYWN0b3J5L0JveEZhY3RvcnkuanNcIik7XG4vLyB2YXIgRGlhbW9uZEZhY3RvcnkgICA9IHJlcXVpcmUoXCIuL0VudGl0aWVzL0ZhY3RvcnkvRGlhbW9uZEZhY3RvcnkuanNcIik7XG4vLyB2YXIgSGVyb0ZhY3RvcnkgICAgICA9IHJlcXVpcmUoXCIuL0VudGl0aWVzL0ZhY3RvcnkvSGVyb0ZhY3RvcnlcIik7XG4vLyB2YXIgVGlsZUZhY3RvcnkgICAgICA9IHJlcXVpcmUoXCIuL0VudGl0aWVzL0ZhY3RvcnkvVGlsZUZhY3RvcnlcIik7XG4vLyB2YXIgU3ViQ2xhc3NGYWN0b3J5ICA9IHJlcXVpcmUoXCIuL1V0aWxpdGllcy9GYWN0b3J5L1N1YkNsYXNzRmFjdG9yeVwiKTtcbi8vIHZhciBEb21SZWFkeUxpc3RlbmVyID0gcmVxdWlyZShcIi4vVXRpbGl0aWVzL0xpc3RlbmVyL0RvbVJlYWR5TGlzdGVuZXJcIik7XG4vLyB2YXIgR2FtZSAgICAgICAgICAgICA9IHJlcXVpcmUoXCIuL0dhbWVcIik7XG5cbi8vIHZhciBjID0gY3JlYXRlanM7XG4vLyB2YXIgZG9tUmVhZHlMaXN0ZW5lciA9IG5ldyBEb21SZWFkeUxpc3RlbmVyKFByb21pc2UpO1xuLy8gdmFyIHN1YkNsYXNzRmFjdG9yeSAgPSBuZXcgU3ViQ2xhc3NGYWN0b3J5KCk7XG4vLyB2YXIgdGlsZUZhY3RvcnkgICAgICA9IG5ldyBUaWxlRmFjdG9yeShjLCBzdWJDbGFzc0ZhY3RvcnkpO1xuLy8gdmFyIGdhbWUgICAgICAgICAgICAgPSBuZXcgR2FtZShjKTtcblxuLy8gdmFyIFRpbGUgPSB0aWxlRmFjdG9yeS5idWlsZCgpO1xuXG4vLyB2YXIgYmxvY2tGYWN0b3J5ICAgPSBuZXcgQmxvY2tGYWN0b3J5KFRpbGUsIHN1YkNsYXNzRmFjdG9yeSk7XG4vLyB2YXIgYm94RmFjdG9yeSAgICAgPSBuZXcgQm94RmFjdG9yeShUaWxlLCBzdWJDbGFzc0ZhY3RvcnkpO1xuLy8gdmFyIGRpYW1vbmRGYWN0b3J5ID0gbmV3IERpYW1vbmRGYWN0b3J5KFRpbGUsIHN1YkNsYXNzRmFjdG9yeSk7XG4vLyB2YXIgaGVyb0ZhY3RvcnkgICAgPSBuZXcgSGVyb0ZhY3RvcnkoVGlsZSwgc3ViQ2xhc3NGYWN0b3J5KTtcblxuLy8gdmFyIEJsb2NrICAgPSBibG9ja0ZhY3RvcnkuYnVpbGQoKTtcbi8vIHZhciBCb3ggICAgID0gYm94RmFjdG9yeS5idWlsZCgpO1xuLy8gdmFyIERpYW1vbmQgPSBkaWFtb25kRmFjdG9yeS5idWlsZCgpO1xuLy8gdmFyIEhlcm8gICAgPSBoZXJvRmFjdG9yeS5idWlsZCgpO1xuXG4vLyB2YXIgbGV2ZWxzID0gcmVxdWlyZShcIi4vUmVzb3VyY2VzL2NvbmZpZy9sZXZlbHNcIik7XG5cbi8vIHZhciBjbGFzc01hcCA9IHtcbi8vICAgICBcIjFcIjogQmxvY2ssXG4vLyAgICAgXCIyXCI6IERpYW1vbmQsXG4vLyAgICAgXCIzXCI6IEJveCxcbi8vICAgICBcIjRcIjogSGVyb1xuLy8gfTtcblxuLy8gZG9tUmVhZHlMaXN0ZW5lclxuLy8gICAgIC5pc1JlYWR5KClcbi8vICAgICAudGhlbihmdW5jdGlvbigpIHtcbi8vICAgICAgICAgY29uc29sZS5sb2coXCJEb2N1bWVudCBpcyByZWFkeSwgaW5pdGlhbGlzaW5nIGVuZ2luZS5cIik7XG4vLyAgICAgfSlcbi8vICAgICAudGhlbihmdW5jdGlvbigpIHtcbi8vICAgICAgICAgZ2FtZS5pbml0aWFsaXplKFwicGttblwiKTtcblxuLy8gICAgICAgICB2YXIgbWFwID0gbGV2ZWxzWzBdLm1hcDtcbi8vICAgICAgICAgdmFyIHRpbGVzID0gW107XG5cbi8vICAgICAgICAgbWFwLmZvckVhY2goZnVuY3Rpb24ocm93LCB5KSB7XG4vLyAgICAgICAgICAgICB0aWxlcy5wdXNoKFtdKTtcblxuLy8gICAgICAgICAgICAgcm93LmZvckVhY2goZnVuY3Rpb24odGlsZVR5cGUsIHgpIHtcbi8vICAgICAgICAgICAgICAgICB2YXIgVGlsZUNsYXNzID0gY2xhc3NNYXBbdGlsZVR5cGVdO1xuXG4vLyAgICAgICAgICAgICAgICAgaWYgKFRpbGVDbGFzcykge1xuLy8gICAgICAgICAgICAgICAgICAgICB2YXIgdGlsZSA9IG5ldyBUaWxlQ2xhc3MoeCwgeSk7XG5cbi8vICAgICAgICAgICAgICAgICAgICAgZ2FtZS5nZXRTdGFnZSgpLmFkZENoaWxkKHRpbGUpO1xuXG4vLyAgICAgICAgICAgICAgICAgICAgIHRpbGVzW3ldW3hdID0gdGlsZTtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgfSk7XG5cbi8vICAgICAgICAgY29uc29sZS5sb2codGlsZXMpO1xuLy8gICAgIH0pXG4vLyA7XG4iXX0=
