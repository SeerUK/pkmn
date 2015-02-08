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
