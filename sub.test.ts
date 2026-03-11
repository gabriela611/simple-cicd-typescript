/**
 * Unit tests for sub()
 * Loads the compiled sum.js so window.sub is available (same as in the browser).
 */
declare global {
  interface Window {
    sub: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./sum.js");
});

describe("sub", () => {
  it("subtracts two positive numbers", () => {
    expect(window.sub(5, 3)).toBe(2);
  });

  it("subtracts with zero", () => {
    expect(window.sub(5, 0)).toBe(5);
  });

  it("subtracts negative numbers", () => {
    expect(window.sub(-5, -3)).toBe(-2);
  });

  it("subtracts positive and negative numbers", () => {
    expect(window.sub(5, -3)).toBe(8);
  });
});

export {};