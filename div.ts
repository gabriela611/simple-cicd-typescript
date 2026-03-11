/**
 * Returns the division of two numbers.
 */
function div(a: number, b: number): number {
  if (b === 0) {
    throw new Error("No es posible dividir por cero");
  }
  return a / b;
}

// Expose to window so the HTML script can call it
(window as unknown as { div: typeof div }).div = div;
