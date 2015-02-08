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

module.exports = function(c, subClassFactory) {
    var that = this;

    that.TileClass = {
        /**
         * Initialize the entity
         *
         * @param  {int} x
         * @param  {int} y
         *
         * @return {void}
         */
        initialize: function(x, y) {
            // c.Shape.prototype.initialize.apply(this, arguments);
            console.log(c.Shape.prototype);

            this.setPosition(x, y);
        },

        /**
         * Set position of tile entity
         *
         * @param {int} x
         * @param {int} y
         *
         * @return {void}
         */
        setPosition: function(x, y) {
            this.cX = x;
            this.cY = y;

            this.x = x * TILE_SIZE;
            this.y = y * TILE_SIZE;
        }
    };

    return {
        build: function() {
            return subClassFactory.build(c.Shape, "Tile", that.TileClass);
        }
    };
};
