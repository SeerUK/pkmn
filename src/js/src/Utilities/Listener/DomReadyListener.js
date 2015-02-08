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
