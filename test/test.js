import { Bowerman, bowerman } from "../src/index.js";

describe("Character", () => {
  // Test "min - 2 символа, max - 10"///
  test("min_name_length", () => {
    expect(() => {
      new Bowerman("0");
    }).toThrow();
  });

  test("max_name_lengtht", () => {
    expect(() => {
      new Bowerman("012345678910");
    }).toThrow();
  });

  /// Type toThrow
  test("Type toThrow", () => {
    expect(() => {
      new Bowerman("Bowerman", "Unknow");
    }).toThrow();
  });
  ///
  /// Method levelUp()
  test("levelUp / health/ defence/ attack", () => {
    bowerman.levelUp();
    expect(bowerman.attack).toBe(30);
    expect(bowerman.defence).toBe(30);
    expect(bowerman.health).toBe(100);
  });
  ///Method levelUp() Throw
  test("levelUp Throw / if  health == 0", () => {
    expect(() => {
      bowerman.health = 0;
      bowerman.levelUp();
    }).toThrow();
  });
  //
  ///Method damage()
  test("Method damage() ", () => {
    bowerman.health = 100;
    bowerman.attack = 25;
    bowerman.defence = 25;
    bowerman.damage();
    expect(bowerman.health).toBe(81.25);
  });
});
