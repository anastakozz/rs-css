import { describe, expect, test } from "@jest/globals";
import "jest-localstorage-mock";
import {
  getStoredLevel,
  getStoredDone,
  getStoredHelp,
  setStorage,
  clearStorage,
} from "../utils/utils";

describe("setLocalStorage", () => {
  const level = 1;
  const doneArr = new Set([2, 3, 4]);
  const helpArr = new Set([3, 4]);

  setStorage(level, doneArr, helpArr);

  test("sets active level", () => {
    expect(localStorage.getItem("activeLevel")).toEqual("1");
  });

  test("sets done levels", () => {
    expect(localStorage.getItem("doneLevels")).toEqual("2,3,4");
  });

  test("sets helped levels", () => {
    expect(localStorage.getItem("doneWithHelp")).toEqual("3,4");
  });
});

