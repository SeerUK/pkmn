/*
 * This file is part of pkmn
 *
 * (c) Elliot Wright <elliot@elliotwright.co>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

"use strict";

module.exports = function(Tile, subClassFactory) {
    var that = this;

    that.BoxClass = {
        /**
         * Initialize hero entity
         *
         * @param  {int} x
         * @param  {int} y
         *
         * @return {void}
         */
        initialize: function(x, y, name) {
            Tile.prototype.initialize.call(this, null);

            this.name = name;

            that.initalizeDisplay.call(this);
        }
    };

    /**
     * Initialize the appearance of the hero entity
     *
     * @return {void}
     */
    that.initalizeDisplay = function() {
        this.graphics.beginFill("red").drawRect(0, 0, 32, 32);
    };

    return {
        build: function() {
            return subClassFactory.build(Tile, "Box", that.BoxClass);
        }
    };
};
