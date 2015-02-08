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
