/**
 * Unit tests for div()
 * Loads the compiled sum.js so window.div is available (same as in the browser).
 */
declare global {
  interface Window {
    div: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./sum.js");
});

describe("div", () => {
  it("divides two positive numbers", () => {
    expect(window.div(10, 2)).toBe(5);
  });

  it("divides by zero", () => {
    expect(() => window.div(5, 0)).toThrow();
  });

  it("divides negative numbers", () => {
    expect(window.div(-10, -2)).toBe(5);
  });

  it("divides positive and negative numbers", () => {
    expect(window.div(10, -2)).toBe(-5);
  });
});

export {};