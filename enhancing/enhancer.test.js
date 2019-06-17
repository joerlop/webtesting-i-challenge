const enhancer = require("./enhancer.js");
// test away!

const { repair } = require("./enhancer.js");

describe("enhancer.js", () => {
  describe("repair()", () => {
    it("restores durability to 100", () => {
      expect(repair({ durability: 89 }).durability).toBe(100);
      expect(repair({ durability: -89 }).durability).toBe(100);
      expect(repair({ durability: 100 }).durability).toBe(100);
      expect(repair({ durability: 0 })).toEqual({ durability: 100 });
    });
  });

  const { success } = require("./enhancer.js");

  describe("success()", () => {
    it("increases enhancement by 1", () => {
      expect(success({ enhancement: 19 }).enhancement).toBe(20);
      expect(success({ enhancement: 0 }).enhancement).toBe(1);
      expect(success({ enhancement: 1 }).enhancement).toBe(2);
    });
    it("doesnt increase enhancement", () => {
      expect(success({ enhancement: 20 }).enhancement).toBe(20);
    });
  });

  const { fail } = require("./enhancer.js");

  describe("fail()", () => {
    it("decreases durability by 5", () => {
      expect(fail({ enhancement: 14, durability: 10 }).durability).toBe(5);
    });
    it("decreases durability to 0", () => {
      expect(fail({ enhancement: 14, durability: 3 }).durability).toBe(0);
    });
    it("decreases durability by 10", () => {
      expect(fail({ enhancement: 15, durability: 11 })).toEqual({ enhancement: 15, durability: 1 });
      expect(fail({ enhancement: 15, durability: 9 })).toEqual({ enhancement: 15, durability: 0 });
      expect(fail({ enhancement: 16, durability: 12 })).toEqual({ enhancement: 16, durability: 2 });
    });
    it("decreases durability by 10 and enhancement by 1", () => {
      expect(fail({ enhancement: 17, durability: 11 })).toEqual({enhancement: 16, durability: 1});
      expect(fail({ enhancement: 18, durability: 9 })).toEqual({enhancement: 17, durability: 0});
      expect(fail({ enhancement: 19, durability: 12 })).toEqual({enhancement: 18, durability: 2});
    });
  });

  it.todo("should have a max of 100 for durability");
});
