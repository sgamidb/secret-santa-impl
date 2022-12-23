import {secretSanta} from "./index";

describe("secret santa", () => {
  describe('error cases', () => {
    it("should throw if the list has not enough participants", () => {
      const listOfPersons: string[] = [];

      expect(() => secretSanta(listOfPersons)).toThrowError("Not enough participants");
    })

    /*it("should throw if a person is own giver", () => {
      const listOfPersons = ["Dr. Sheldon Cooper", "personA", "personB"];

      expect(() => secretSanta(listOfPersons)).toThrowError("Cannot be his own giver")
    })*/
  });

  it('should not have the same results when function executed 2 times', function () {
    const listOfPersons = ["Dr. Sheldon Cooper", "personA", "personB"];

    const firstResult = secretSanta(listOfPersons)
    const secondResult = secretSanta(listOfPersons)

    expect(firstResult).not.toEqual(secondResult);
  });

  it("should return a new list", () => {
    const listOfPersons = [
      "Dr. Sheldon Cooper",
      "Missy Cooper",
    ];

    const expectedResult = [
      "Missy Cooper",
      "Dr. Sheldon Cooper",
    ];

    const result = secretSanta(listOfPersons);

    expect(result).toEqual(expectedResult);
  })


});




