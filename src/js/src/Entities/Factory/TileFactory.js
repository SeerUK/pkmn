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
