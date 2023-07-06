import { describe, expect, test } from "@jest/globals";
import Help from "../components/help";

describe("Help", () => {
  const popup = new Help();

  test("defines getHelpFlag()", () => {
    expect(typeof popup.getHelpFlag).toBe("function");
  });

  test("defines clearHelpFlag()", () => {
    expect(typeof popup.clearHelpFlag).toBe("function");
  });

  test("defines showHint()", () => {
    expect(typeof popup.showHint).toBe("function");
  });

  test("defines helpFlag", () => {
    expect(typeof popup.helpFlag).toBe("boolean");
  });

  test("helpFlag is Falsy", () => {
    expect(popup.helpFlag).toBeFalsy;
  });
});
