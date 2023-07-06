import { describe, expect, test } from "@jest/globals";
import ElementsGenerator from "../utils/ElementsGenerator";

describe("elemGenerator", () => {

  const params = {
    tag: 'div',
    class: ['blue'],
    id: 'sphere',
    children: [{tag: 'span', class: ['red'], id: 'cube'}]
  }

  const elemGenerator = new ElementsGenerator(params);

  test("defines element", () => {
    expect(elemGenerator.element).toBeDefined;
  });

  test("sets tag", () => {
    expect(elemGenerator.element.tagName).toBe('DIV');
  });

  test("sets class", () => {
    expect(elemGenerator.element.classList).toContain('blue');
  });

  test("sets id", () => {
    expect(elemGenerator.element.id).toEqual('sphere');
  });

});
