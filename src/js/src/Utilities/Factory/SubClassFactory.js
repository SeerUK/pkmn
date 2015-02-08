/*
 * This file is part of pkmn
 *
 * (c) Elliot Wright <elliot@elliotwright.co>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

"use strict";

module.exports = function() {
    return {
        build: function(SuperClass, name, methods) {
            var SubClass;

            SubClass = new Function(
                "return function " + name + " () {" +
                    "this.initialize.apply(this, arguments);" +
                "};"
            )();

            SubClass.prototype = new SuperClass();

            for (var key in methods) {
                if (methods.hasOwnProperty(key)) {
                    SubClass.prototype[key] = methods[key];
                }
            }

            return SubClass;
        }
    };
};
