import React from "react";
import { App } from "../src/App";
import { mount } from "enzyme";

describe("App.tsx", () => {
  test("Mounts", () => {
    mount(<App />);
  });
});
