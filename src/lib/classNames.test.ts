import {
  getButtonClassName,
  getDebuffClassName,
  getIconClassName,
  getMarkerClassName,
} from "./classNames";

test("getMarkerClassName", () => {
  expect(getMarkerClassName(0)).toBe("marker cross");
  expect(getMarkerClassName(1)).toBe("marker square");
  expect(getMarkerClassName(2)).toBe("marker circle");
  expect(getMarkerClassName(3)).toBe("marker triangle");
});

test("getDebuffClassName", () => {
  expect(getDebuffClassName(0)).toBe("debuff alpha");
  expect(getDebuffClassName(1)).toBe("debuff beta");
});

test("getIconClassName", () => {
  expect(getIconClassName(0)).toBeUndefined();
  expect(getIconClassName(1)).toBe("icon blue");
  expect(getIconClassName(2)).toBe("icon red");
  expect(getIconClassName(3)).toBe("icon yellow");
});

test("getButtonClassName", () => {
  expect(getButtonClassName(false, false)).toBe("");
  expect(getButtonClassName(true, false)).toBe("");
  expect(getButtonClassName(false, true)).toBe("reveal");
  expect(getButtonClassName(true, true)).toBe("reveal clicked");
});
