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
