import { describe, expect, test } from "@jest/globals";
import "jest-localstorage-mock";
import { getStoredDone, setStorage, getStoredHelp } from "../utils/utils";

const level = 1;
const doneArr = new Set([2, 3, 4]);
const helpArr = new Set([3, 4]);

describe("setLocalStorage", () => {
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

describe("getStoredDone", () => {
  test("returns Set", () => {
    expect(getStoredDone()).toBeInstanceOf(Set);
  });

  test("returns Set with proper content", () => {
    expect(Array.from(getStoredDone()).join(",")).toEqual("2,3,4");
  });
});

describe("getStoredHelp", () => {
  test("returns Set", () => {
    expect(getStoredHelp()).toBeInstanceOf(Set);
  });

  test("returns Set with proper content", () => {
    expect(Array.from(getStoredHelp()).join(",")).toEqual("3,4");
  });
});
