"use strict";
/**
 * Returns the division of two numbers.
 */
function div(a, b) {
    if (b === 0) {
        throw new Error("No es posible dividir por cero");
    }
    return a / b;
}
// Expose to window so the HTML script can call it
window.div = div;
