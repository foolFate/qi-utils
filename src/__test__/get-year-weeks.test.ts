import { describe, expect, test } from "@jest/globals";
import { getYearWeeks } from "../time/get-year-weeks";

describe("getYearWeeks", () => {
  test("2024", () => expect(getYearWeeks(2024)).toBe(52));
  test("2025", () => expect(getYearWeeks(2025)).toBe(52));
  test("2026", () => expect(getYearWeeks(2026)).toBe(52));
  test("2027", () => expect(getYearWeeks(2027)).toBe(52));
  test("2028", () => expect(getYearWeeks(2028)).toBe(53));
});
