import { describe, expect, test } from "@jest/globals";
import WallView from "../view/wallView";

describe("WallView", () => {
  const wallView = new WallView(1);

  test("calls updateWallView()", () => {
    expect(wallView.updateWallView).toHaveBeenCalled;
  });
});
