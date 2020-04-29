import { Operations } from './Operations';

const operations = new Operations();

describe('Operations', () => {
  describe('sum', () => {
    it('Success', () => {
      expect.hasAssertions();

      const leftNumber = 1;
      const rightNumber = 2;

      const result = operations.addition(leftNumber, rightNumber);

      expect(result).toEqual(3);
    });
  });

  describe('subtraction', () => {
    it('Success', () => {
      expect.hasAssertions();

      const leftNumber = 1;
      const rightNumber = 2;

      const result = operations.subtraction(leftNumber, rightNumber);

      expect(result).toEqual(-1);
    });
  });

  describe('multiplication', () => {
    it('Success', () => {
      expect.hasAssertions();

      const leftNumber = 2;
      const rightNumber = 3;

      const result = operations.multiplication(leftNumber, rightNumber);

      expect(result).toEqual(6);
    });
  });

  describe('division', () => {
    it('Success', () => {
      expect.hasAssertions();

      const leftNumber = 2;
      const rightNumber = 4;

      const result = operations.division(leftNumber, rightNumber);

      expect(result).toEqual(0.5);
    });
  });
});
