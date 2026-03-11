/**
 * Unit tests for mul()
 * Loads the compiled sum.js so window.mul is available (same as in the browser).
 */
declare global {
  interface Window {
    mul: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./mul.js");
});

describe("mul", () => {
  it("multiplies two positive numbers", () => {
    expect(window.mul(4, 3)).toBe(12);
  });

  it("multiplies by zero", () => {
    expect(window.mul(5, 0)).toBe(0);
  });

  it("multiplies negative numbers", () => {
    expect(window.mul(-4, -2)).toBe(8);
  });

  it("multiplies positive and negative numbers", () => {
    expect(window.mul(4, -2)).toBe(-8);
  });
});

export {};