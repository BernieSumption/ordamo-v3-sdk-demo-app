/// <reference path="../../typings/main.d.ts" />

"use strict";

import {expect} from "chai";
import {myFunction} from "../lib";

describe("myFunction", () => {
  it("should be a function", () => {
    expect(myFunction).to.be.a("function");
  });
  it("should return a string", () => {
    expect(myFunction()).to.be.a("string");
  });
  it("should describe its return value in English", () => {
    expect(myFunction()).to.contain("This content");
  });
});
