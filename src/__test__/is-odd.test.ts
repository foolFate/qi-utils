import { describe, expect, test } from "@jest/globals";
import { isOdd } from "../time/is-odd";

describe("getWeekOfYear", () => {
  test("3", () => expect(isOdd(3)).toBe(true));
  test("4", () => expect(isOdd(4)).toBe(false));
});
