import { describe, expect, test } from "@jest/globals";
import PopUp from "../components/popup";

describe("PopUp", () => {
  const popup = new PopUp();

  test("defines togglePopup()", () => {
    expect(typeof popup.togglePopup).toBe("function");
  });
});
