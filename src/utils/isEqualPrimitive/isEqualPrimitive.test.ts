import { describe, expect, it } from "vitest";

import isEqualPrimitive from "./isEqualPrimitive";

describe("isEqualPrimitive function", () => {
  it("compare with strings ", () => {
    expect(isEqualPrimitive("ngockhoi96", "ngockhoi96")).toBe(true);
    expect(isEqualPrimitive("ngockhoi96", "ngocKhoi96")).toBe(false);
    expect(isEqualPrimitive("ngockhoi96", "ngockhoi")).toBe(false);
  });

  it("compare with numbers", () => {
    expect(isEqualPrimitive(69, 69)).toBe(true);
    expect(isEqualPrimitive(69, 96)).toBe(false);
    expect(isEqualPrimitive(-26, 26)).toBe(false);
    expect(isEqualPrimitive(-4, -4)).toBe(true);
  });

  it("compare with booleans", () => {
    expect(isEqualPrimitive(true, false)).toBe(false);
    expect(isEqualPrimitive(true, true)).toBe(true);
  });

  it("compare with undefined", () => {
    expect(isEqualPrimitive(undefined, undefined)).toBe(true);
  });

  it("compare with null", () => {
    expect(isEqualPrimitive(null, null)).toBe(true);
  });

  it("compare with NaN", () => {
    expect(isEqualPrimitive(NaN, NaN)).toBe(false);
  });
});
