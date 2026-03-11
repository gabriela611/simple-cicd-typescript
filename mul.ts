/**
 * Returns the multiplication of two numbers.
 */
function mul(a: number, b: number): number {
  return a * b;
}

// Expose to window so the HTML script can call it
(window as unknown as { mul: typeof mul }).mul = mul;
