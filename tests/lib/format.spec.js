"use strict";

const format = require("../../lib/format");

describe("format:", () => {
  it("deve formatar um número de cpf", () => {
    expect(format("11144477735")).toBe("111.444.777-35");
  });
});
