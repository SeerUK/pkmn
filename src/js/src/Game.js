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
    var stage;

    return {
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
            stage = new c.Stage(container);

            c.Ticker.timingMode = c.Ticker.RAF;
            c.Ticker.addEventListener("tick", function() {
                stage.update();
            });
        }
    };
};
