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

module.exports = function(c, Tile, TILE_SIZE) {
    var that = this;

    var Block = function(x, y) {
        this.Tile_constructor.apply(this, arguments);

        that.initializeDisplay.call(this);
    };

    that.initializeDisplay = function() {
        var entity = new c.Shape();
        entity.graphics.beginFill("black").drawRect(0, 0, TILE_SIZE, TILE_SIZE);

        this.addChild(entity);
    };

    return {
        build: function() {
            c.extend(Block, Tile);

            return c.promote(Block, "Tile");
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

module.exports = function(c, Tile, TILE_SIZE) {
    var that = this;

    var Box = function(x, y) {
        this.Tile_constructor.apply(this, arguments);

        that.initializeDisplay.call(this);
    };

    that.initializeDisplay = function() {
        var entity = new c.Shape();
        entity.graphics.beginFill("red").drawRect(0, 0, TILE_SIZE, TILE_SIZE);

        this.addChild(entity);
    };

    return {
        build: function() {
            c.extend(Box, Tile);

            return c.promote(Box, "Tile");
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

module.exports = function(c, Tile, TILE_SIZE) {
    var that = this;

    var Diamond = function(x, y) {
        this.Tile_constructor.apply(this, arguments);

        that.initializeDisplay.call(this);
    };

    that.initializeDisplay = function() {
        var entity = new c.Shape();
        entity.graphics.beginFill("blue").drawCircle(0, 0, TILE_SIZE / 2);
        entity.regX = - (TILE_SIZE / 2);
        entity.regY = - (TILE_SIZE / 2);

        this.addChild(entity);
    };

    return {
        build: function() {
            c.extend(Diamond, Tile);

            return c.promote(Diamond, "Tile");
        }
    };
};

},{}],4:[function(require,module,exports){
/*
 * This file is part of pkmn
 *
 * (c) Elliot Wright <elliot@elliotwright.co>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

"use strict";

module.exports = function(c, Tile, TILE_SIZE) {
    var that = this;

    var Hero = function(x, y) {
        this.Tile_constructor.apply(this, arguments);

        that.initializeDisplay.call(this);
    };

    that.initializeDisplay = function() {
        var entity = new c.Shape();
        entity.graphics.beginFill("green").drawRoundRect(0, 0, TILE_SIZE, TILE_SIZE, (TILE_SIZE / 4));

        this.addChild(entity);
    };

    return {
        build: function() {
            c.extend(Hero, Tile);

            return c.promote(Hero, "Tile");
        }
    };
};

},{}],5:[function(require,module,exports){
/*
 * This file is part of pkmn
 *
 * (c) Elliot Wright <elliot@elliotwright.co>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

"use strict";

module.exports = function(c, TILE_SIZE) {
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
    };

    return {
        build: function() {
            c.extend(Tile, c.Container);

            return c.promote(Tile, "Container");
        }
    };
};

},{}],6:[function(require,module,exports){
/*
 * This file is part of pkmn
 *
 * (c) Elliot Wright <elliot@elliotwright.co>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

"use strict";

module.exports = function(c) {
    var canvas;
    var stage;

    return {
        /**
         * Get canvas
         *
         * @return {object}
         */
        getCanvas: function() {
            return canvas;
        },

        /**
         * Get stage
         *
         * @return {object}
         */
        getStage: function() {
            return stage;
        },

        /**
         * Initialize the game engine
         *
         * @return {void}
         */
        initialize: function(container) {
            canvas = document.getElementById(container);
            stage = new c.Stage(container);

            if (window.devicePixelRatio) {
                var height = canvas.getAttribute("height");
                var width = canvas.getAttribute("width");

                canvas.setAttribute("height", Math.round(height * window.devicePixelRatio));
                canvas.setAttribute("width", Math.round(width * window.devicePixelRatio));

                canvas.style.height = height + "px";
                canvas.style.width = width + "px";

                stage.scaleX = stage.scaleY = window.devicePixelRatio;
            }

            c.Ticker.timingMode = c.Ticker.RAF;
            c.Ticker.setFPS(60);
            c.Ticker.addEventListener("tick", function() {
                stage.update();
            });
        }
    };
};

},{}],7:[function(require,module,exports){
/*
 * This file is part of pkmn
 *
 * (c) Elliot Wright <elliot@elliotwright.co>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

"use strict";

module.exports = [
    {
        name: "Level 1",
        map: [
            [ 1, 1, 1, 1, 0, 0, 0, 0 ],
            [ 1, 0, 0, 1, 1, 1, 1, 1 ],
            [ 1, 0, 2, 0, 0, 3, 0, 1 ],
            [ 1, 0, 3, 0, 0, 2, 4, 1 ],
            [ 1, 1, 1, 0, 0, 1, 1, 1 ],
            [ 0, 0, 1, 1, 1, 1, 0, 0 ]
        ]
    }
];

},{}],8:[function(require,module,exports){
/*
 * This file is part of pkmn
 *
 * (c) Elliot Wright <elliot@elliotwright.co>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

"use strict";

module.exports = function(Promise) {
    var that = this;
    var resolver = Promise.pending();

    /**
     * Check for changes in the document ready state, once it's complete,
     * resolve the promise.
     *
     * @return {void}
     */
    that.createEventListener = function() {
        document.onreadystatechange = function () {
            if (document.readyState === "complete") {
                resolver.resolve();
            }
        };
    };

    return {
        /**
         * Async, is document ready?
         *
         * @return {Promise} Resolved when document is ready
         */
        isReady: function() {
            that.createEventListener();

            return resolver.promise;
        }
    };
};

},{}],9:[function(require,module,exports){
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

},{"./Entities/Factory/BlockFactory":1,"./Entities/Factory/BoxFactory":2,"./Entities/Factory/DiamondFactory":3,"./Entities/Factory/HeroFactory":4,"./Entities/Factory/TileFactory":5,"./Game":6,"./Resources/config/levels":7,"./Utilities/Listener/DomReadyListener":8}]},{},[9])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZWVyL2dpdC9wcm9qZWN0cy9TZWVyVUtAZ2l0aHViLmNvbS9wa21uL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9zZWVyL2dpdC9wcm9qZWN0cy9TZWVyVUtAZ2l0aHViLmNvbS9wa21uL3NyYy9qcy9zcmMvRW50aXRpZXMvRmFjdG9yeS9CbG9ja0ZhY3RvcnkuanMiLCIvVXNlcnMvc2Vlci9naXQvcHJvamVjdHMvU2VlclVLQGdpdGh1Yi5jb20vcGttbi9zcmMvanMvc3JjL0VudGl0aWVzL0ZhY3RvcnkvQm94RmFjdG9yeS5qcyIsIi9Vc2Vycy9zZWVyL2dpdC9wcm9qZWN0cy9TZWVyVUtAZ2l0aHViLmNvbS9wa21uL3NyYy9qcy9zcmMvRW50aXRpZXMvRmFjdG9yeS9EaWFtb25kRmFjdG9yeS5qcyIsIi9Vc2Vycy9zZWVyL2dpdC9wcm9qZWN0cy9TZWVyVUtAZ2l0aHViLmNvbS9wa21uL3NyYy9qcy9zcmMvRW50aXRpZXMvRmFjdG9yeS9IZXJvRmFjdG9yeS5qcyIsIi9Vc2Vycy9zZWVyL2dpdC9wcm9qZWN0cy9TZWVyVUtAZ2l0aHViLmNvbS9wa21uL3NyYy9qcy9zcmMvRW50aXRpZXMvRmFjdG9yeS9UaWxlRmFjdG9yeS5qcyIsIi9Vc2Vycy9zZWVyL2dpdC9wcm9qZWN0cy9TZWVyVUtAZ2l0aHViLmNvbS9wa21uL3NyYy9qcy9zcmMvR2FtZS5qcyIsIi9Vc2Vycy9zZWVyL2dpdC9wcm9qZWN0cy9TZWVyVUtAZ2l0aHViLmNvbS9wa21uL3NyYy9qcy9zcmMvUmVzb3VyY2VzL2NvbmZpZy9sZXZlbHMuanMiLCIvVXNlcnMvc2Vlci9naXQvcHJvamVjdHMvU2VlclVLQGdpdGh1Yi5jb20vcGttbi9zcmMvanMvc3JjL1V0aWxpdGllcy9MaXN0ZW5lci9Eb21SZWFkeUxpc3RlbmVyLmpzIiwiL1VzZXJzL3NlZXIvZ2l0L3Byb2plY3RzL1NlZXJVS0BnaXRodWIuY29tL3BrbW4vc3JjL2pzL3NyYy9mYWtlXzNhYjQ0NTlmLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHBrbW5cbiAqXG4gKiAoYykgRWxsaW90IFdyaWdodCA8ZWxsaW90QGVsbGlvdHdyaWdodC5jbz5cbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYywgVGlsZSwgVElMRV9TSVpFKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gICAgdmFyIEJsb2NrID0gZnVuY3Rpb24oeCwgeSkge1xuICAgICAgICB0aGlzLlRpbGVfY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgICAgICB0aGF0LmluaXRpYWxpemVEaXNwbGF5LmNhbGwodGhpcyk7XG4gICAgfTtcblxuICAgIHRoYXQuaW5pdGlhbGl6ZURpc3BsYXkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGVudGl0eSA9IG5ldyBjLlNoYXBlKCk7XG4gICAgICAgIGVudGl0eS5ncmFwaGljcy5iZWdpbkZpbGwoXCJibGFja1wiKS5kcmF3UmVjdCgwLCAwLCBUSUxFX1NJWkUsIFRJTEVfU0laRSk7XG5cbiAgICAgICAgdGhpcy5hZGRDaGlsZChlbnRpdHkpO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBidWlsZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjLmV4dGVuZChCbG9jaywgVGlsZSk7XG5cbiAgICAgICAgICAgIHJldHVybiBjLnByb21vdGUoQmxvY2ssIFwiVGlsZVwiKTtcbiAgICAgICAgfVxuICAgIH07XG59O1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHBrbW5cbiAqXG4gKiAoYykgRWxsaW90IFdyaWdodCA8ZWxsaW90QGVsbGlvdHdyaWdodC5jbz5cbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYywgVGlsZSwgVElMRV9TSVpFKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gICAgdmFyIEJveCA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICAgICAgdGhpcy5UaWxlX2NvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgdGhhdC5pbml0aWFsaXplRGlzcGxheS5jYWxsKHRoaXMpO1xuICAgIH07XG5cbiAgICB0aGF0LmluaXRpYWxpemVEaXNwbGF5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBlbnRpdHkgPSBuZXcgYy5TaGFwZSgpO1xuICAgICAgICBlbnRpdHkuZ3JhcGhpY3MuYmVnaW5GaWxsKFwicmVkXCIpLmRyYXdSZWN0KDAsIDAsIFRJTEVfU0laRSwgVElMRV9TSVpFKTtcblxuICAgICAgICB0aGlzLmFkZENoaWxkKGVudGl0eSk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGJ1aWxkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGMuZXh0ZW5kKEJveCwgVGlsZSk7XG5cbiAgICAgICAgICAgIHJldHVybiBjLnByb21vdGUoQm94LCBcIlRpbGVcIik7XG4gICAgICAgIH1cbiAgICB9O1xufTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBwa21uXG4gKlxuICogKGMpIEVsbGlvdCBXcmlnaHQgPGVsbGlvdEBlbGxpb3R3cmlnaHQuY28+XG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGMsIFRpbGUsIFRJTEVfU0laRSkge1xuICAgIHZhciB0aGF0ID0gdGhpcztcblxuICAgIHZhciBEaWFtb25kID0gZnVuY3Rpb24oeCwgeSkge1xuICAgICAgICB0aGlzLlRpbGVfY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgICAgICB0aGF0LmluaXRpYWxpemVEaXNwbGF5LmNhbGwodGhpcyk7XG4gICAgfTtcblxuICAgIHRoYXQuaW5pdGlhbGl6ZURpc3BsYXkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGVudGl0eSA9IG5ldyBjLlNoYXBlKCk7XG4gICAgICAgIGVudGl0eS5ncmFwaGljcy5iZWdpbkZpbGwoXCJibHVlXCIpLmRyYXdDaXJjbGUoMCwgMCwgVElMRV9TSVpFIC8gMik7XG4gICAgICAgIGVudGl0eS5yZWdYID0gLSAoVElMRV9TSVpFIC8gMik7XG4gICAgICAgIGVudGl0eS5yZWdZID0gLSAoVElMRV9TSVpFIC8gMik7XG5cbiAgICAgICAgdGhpcy5hZGRDaGlsZChlbnRpdHkpO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBidWlsZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjLmV4dGVuZChEaWFtb25kLCBUaWxlKTtcblxuICAgICAgICAgICAgcmV0dXJuIGMucHJvbW90ZShEaWFtb25kLCBcIlRpbGVcIik7XG4gICAgICAgIH1cbiAgICB9O1xufTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBwa21uXG4gKlxuICogKGMpIEVsbGlvdCBXcmlnaHQgPGVsbGlvdEBlbGxpb3R3cmlnaHQuY28+XG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGMsIFRpbGUsIFRJTEVfU0laRSkge1xuICAgIHZhciB0aGF0ID0gdGhpcztcblxuICAgIHZhciBIZXJvID0gZnVuY3Rpb24oeCwgeSkge1xuICAgICAgICB0aGlzLlRpbGVfY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgICAgICB0aGF0LmluaXRpYWxpemVEaXNwbGF5LmNhbGwodGhpcyk7XG4gICAgfTtcblxuICAgIHRoYXQuaW5pdGlhbGl6ZURpc3BsYXkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGVudGl0eSA9IG5ldyBjLlNoYXBlKCk7XG4gICAgICAgIGVudGl0eS5ncmFwaGljcy5iZWdpbkZpbGwoXCJncmVlblwiKS5kcmF3Um91bmRSZWN0KDAsIDAsIFRJTEVfU0laRSwgVElMRV9TSVpFLCAoVElMRV9TSVpFIC8gNCkpO1xuXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQoZW50aXR5KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYnVpbGQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgYy5leHRlbmQoSGVybywgVGlsZSk7XG5cbiAgICAgICAgICAgIHJldHVybiBjLnByb21vdGUoSGVybywgXCJUaWxlXCIpO1xuICAgICAgICB9XG4gICAgfTtcbn07XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgcGttblxuICpcbiAqIChjKSBFbGxpb3QgV3JpZ2h0IDxlbGxpb3RAZWxsaW90d3JpZ2h0LmNvPlxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjLCBUSUxFX1NJWkUpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgICB2YXIgVGlsZSA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICAgICAgdGhpcy5Db250YWluZXJfY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgICAgICB0aGF0LnNldFBvc2l0aW9uLmNhbGwodGhpcywgeCwgeSk7XG4gICAgfTtcblxuICAgIHRoYXQuc2V0UG9zaXRpb24gPSBmdW5jdGlvbih4LCB5KSB7XG4gICAgICAgIHRoaXMuY1ggPSB4O1xuICAgICAgICB0aGlzLmNZID0geTtcblxuICAgICAgICB0aGlzLnggPSB4ICogVElMRV9TSVpFO1xuICAgICAgICB0aGlzLnkgPSB5ICogVElMRV9TSVpFO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBidWlsZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjLmV4dGVuZChUaWxlLCBjLkNvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIHJldHVybiBjLnByb21vdGUoVGlsZSwgXCJDb250YWluZXJcIik7XG4gICAgICAgIH1cbiAgICB9O1xufTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBwa21uXG4gKlxuICogKGMpIEVsbGlvdCBXcmlnaHQgPGVsbGlvdEBlbGxpb3R3cmlnaHQuY28+XG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGMpIHtcbiAgICB2YXIgY2FudmFzO1xuICAgIHZhciBzdGFnZTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgY2FudmFzXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4ge29iamVjdH1cbiAgICAgICAgICovXG4gICAgICAgIGdldENhbnZhczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FudmFzO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgc3RhZ2VcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB7b2JqZWN0fVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0U3RhZ2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0YWdlO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbml0aWFsaXplIHRoZSBnYW1lIGVuZ2luZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAgICAgKi9cbiAgICAgICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24oY29udGFpbmVyKSB7XG4gICAgICAgICAgICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWluZXIpO1xuICAgICAgICAgICAgc3RhZ2UgPSBuZXcgYy5TdGFnZShjb250YWluZXIpO1xuXG4gICAgICAgICAgICBpZiAod2luZG93LmRldmljZVBpeGVsUmF0aW8pIHtcbiAgICAgICAgICAgICAgICB2YXIgaGVpZ2h0ID0gY2FudmFzLmdldEF0dHJpYnV0ZShcImhlaWdodFwiKTtcbiAgICAgICAgICAgICAgICB2YXIgd2lkdGggPSBjYW52YXMuZ2V0QXR0cmlidXRlKFwid2lkdGhcIik7XG5cbiAgICAgICAgICAgICAgICBjYW52YXMuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIE1hdGgucm91bmQoaGVpZ2h0ICogd2luZG93LmRldmljZVBpeGVsUmF0aW8pKTtcbiAgICAgICAgICAgICAgICBjYW52YXMuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgTWF0aC5yb3VuZCh3aWR0aCAqIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKSk7XG5cbiAgICAgICAgICAgICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICAgICAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiO1xuXG4gICAgICAgICAgICAgICAgc3RhZ2Uuc2NhbGVYID0gc3RhZ2Uuc2NhbGVZID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGMuVGlja2VyLnRpbWluZ01vZGUgPSBjLlRpY2tlci5SQUY7XG4gICAgICAgICAgICBjLlRpY2tlci5zZXRGUFMoNjApO1xuICAgICAgICAgICAgYy5UaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcihcInRpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgc3RhZ2UudXBkYXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59O1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHBrbW5cbiAqXG4gKiAoYykgRWxsaW90IFdyaWdodCA8ZWxsaW90QGVsbGlvdHdyaWdodC5jbz5cbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogXCJMZXZlbCAxXCIsXG4gICAgICAgIG1hcDogW1xuICAgICAgICAgICAgWyAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwIF0sXG4gICAgICAgICAgICBbIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDEgXSxcbiAgICAgICAgICAgIFsgMSwgMCwgMiwgMCwgMCwgMywgMCwgMSBdLFxuICAgICAgICAgICAgWyAxLCAwLCAzLCAwLCAwLCAyLCA0LCAxIF0sXG4gICAgICAgICAgICBbIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDEgXSxcbiAgICAgICAgICAgIFsgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMCBdXG4gICAgICAgIF1cbiAgICB9XG5dO1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHBrbW5cbiAqXG4gKiAoYykgRWxsaW90IFdyaWdodCA8ZWxsaW90QGVsbGlvdHdyaWdodC5jbz5cbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oUHJvbWlzZSkge1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICB2YXIgcmVzb2x2ZXIgPSBQcm9taXNlLnBlbmRpbmcoKTtcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGZvciBjaGFuZ2VzIGluIHRoZSBkb2N1bWVudCByZWFkeSBzdGF0ZSwgb25jZSBpdCdzIGNvbXBsZXRlLFxuICAgICAqIHJlc29sdmUgdGhlIHByb21pc2UuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHRoYXQuY3JlYXRlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBkb2N1bWVudC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZXIucmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQXN5bmMsIGlzIGRvY3VtZW50IHJlYWR5P1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHtQcm9taXNlfSBSZXNvbHZlZCB3aGVuIGRvY3VtZW50IGlzIHJlYWR5XG4gICAgICAgICAqL1xuICAgICAgICBpc1JlYWR5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoYXQuY3JlYXRlRXZlbnRMaXN0ZW5lcigpO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZXIucHJvbWlzZTtcbiAgICAgICAgfVxuICAgIH07XG59O1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHBrbW5cbiAqXG4gKiAoYykgRWxsaW90IFdyaWdodCA8ZWxsaW90QGVsbGlvdHdyaWdodC5jbz5cbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBCbG9ja0ZhY3RvcnkgICAgID0gcmVxdWlyZShcIi4vRW50aXRpZXMvRmFjdG9yeS9CbG9ja0ZhY3RvcnlcIik7XG52YXIgQm94RmFjdG9yeSAgICAgICA9IHJlcXVpcmUoXCIuL0VudGl0aWVzL0ZhY3RvcnkvQm94RmFjdG9yeVwiKTtcbnZhciBEaWFtb25kRmFjdG9yeSAgID0gcmVxdWlyZShcIi4vRW50aXRpZXMvRmFjdG9yeS9EaWFtb25kRmFjdG9yeVwiKTtcbnZhciBIZXJvRmFjdG9yeSAgICAgID0gcmVxdWlyZShcIi4vRW50aXRpZXMvRmFjdG9yeS9IZXJvRmFjdG9yeVwiKTtcbnZhciBUaWxlRmFjdG9yeSAgICAgID0gcmVxdWlyZShcIi4vRW50aXRpZXMvRmFjdG9yeS9UaWxlRmFjdG9yeVwiKTtcbnZhciBEb21SZWFkeUxpc3RlbmVyID0gcmVxdWlyZShcIi4vVXRpbGl0aWVzL0xpc3RlbmVyL0RvbVJlYWR5TGlzdGVuZXJcIik7XG52YXIgR2FtZSAgICAgICAgICAgICA9IHJlcXVpcmUoXCIuL0dhbWVcIik7XG5cbnZhciBjID0gY3JlYXRlanM7XG52YXIgZG9tUmVhZHlMaXN0ZW5lciA9IG5ldyBEb21SZWFkeUxpc3RlbmVyKFByb21pc2UpO1xudmFyIGdhbWUgICAgICAgICAgICAgPSBuZXcgR2FtZShjKTtcblxudmFyIFRJTEVfU0laRSA9IDY0O1xuXG52YXIgdGlsZUZhY3RvcnkgPSBuZXcgVGlsZUZhY3RvcnkoYywgVElMRV9TSVpFKTtcbnZhciBUaWxlID0gdGlsZUZhY3RvcnkuYnVpbGQoKTtcblxudmFyIGJsb2NrRmFjdG9yeSAgID0gbmV3IEJsb2NrRmFjdG9yeShjLCBUaWxlLCBUSUxFX1NJWkUpO1xudmFyIGJveEZhY3RvcnkgICAgID0gbmV3IEJveEZhY3RvcnkoYywgVGlsZSwgVElMRV9TSVpFKTtcbnZhciBkaWFtb25kRmFjdG9yeSA9IG5ldyBEaWFtb25kRmFjdG9yeShjLCBUaWxlLCBUSUxFX1NJWkUpO1xudmFyIGhlcm9GYWN0b3J5ICAgID0gbmV3IEhlcm9GYWN0b3J5KGMsIFRpbGUsIFRJTEVfU0laRSk7XG5cbnZhciBCbG9jayAgID0gYmxvY2tGYWN0b3J5LmJ1aWxkKCk7XG52YXIgQm94ICAgICA9IGJveEZhY3RvcnkuYnVpbGQoKTtcbnZhciBEaWFtb25kID0gZGlhbW9uZEZhY3RvcnkuYnVpbGQoKTtcbnZhciBIZXJvICAgID0gaGVyb0ZhY3RvcnkuYnVpbGQoKTtcblxudmFyIGxldmVscyA9IHJlcXVpcmUoXCIuL1Jlc291cmNlcy9jb25maWcvbGV2ZWxzXCIpO1xuXG52YXIgY2xhc3NNYXAgPSB7XG4gICAgXCIxXCI6IEJsb2NrLFxuICAgIFwiMlwiOiBEaWFtb25kLFxuICAgIFwiM1wiOiBCb3gsXG4gICAgXCI0XCI6IEhlcm9cbn07XG5cbmRvbVJlYWR5TGlzdGVuZXJcbiAgICAuaXNSZWFkeSgpXG4gICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRG9jdW1lbnQgaXMgcmVhZHksIGluaXRpYWxpc2luZyBlbmdpbmUuXCIpO1xuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgIGdhbWUuaW5pdGlhbGl6ZShcInBrbW5cIik7XG5cbiAgICAgICAgdmFyIG1hcCA9IGxldmVsc1swXS5tYXA7XG4gICAgICAgIHZhciB0aWxlcyA9IFtdO1xuXG4gICAgICAgIG1hcC5mb3JFYWNoKGZ1bmN0aW9uKHJvdywgeSkge1xuICAgICAgICAgICAgdGlsZXMucHVzaChbXSk7XG5cbiAgICAgICAgICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uKHRpbGVUeXBlLCB4KSB7XG4gICAgICAgICAgICAgICAgdmFyIFRpbGVDbGFzcyA9IGNsYXNzTWFwW3RpbGVUeXBlXTtcblxuICAgICAgICAgICAgICAgIGlmIChUaWxlQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRpbGUgPSBuZXcgVGlsZUNsYXNzKHgsIHkpO1xuXG4gICAgICAgICAgICAgICAgICAgIGdhbWUuZ2V0U3RhZ2UoKS5hZGRDaGlsZCh0aWxlKTtcblxuICAgICAgICAgICAgICAgICAgICB0aWxlc1t5XVt4XSA9IHRpbGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pXG47XG4iXX0=
