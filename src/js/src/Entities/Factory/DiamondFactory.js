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
