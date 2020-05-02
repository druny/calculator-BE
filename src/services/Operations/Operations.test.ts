import { Operations } from './Operations';

const operations = new Operations();

describe('Operations', () => {
  describe('getFractionalLength', () => {
    describe('Success', () => {
      it('integer', () => {
        expect.hasAssertions();

        const result = Operations.getFractionalLength(1);

        expect(result).toEqual(0);
      });

      it('decimal', () => {
        expect.hasAssertions();

        const result = Operations.getFractionalLength(1.5);

        expect(result).toEqual(1);
      });
    });
  });

  describe('getPrecisionNumber', () => {
    describe('Success', () => {
      it('integer', () => {
        expect.hasAssertions();

        const leftNumber = 1;
        const rightNumber = 2;

        const result = Operations.getPrecisionNumber(leftNumber, rightNumber);

        expect(result).toEqual(1);
      });

      it('decimal', () => {
        expect.hasAssertions();

        const leftNumber = 1.5;
        const rightNumber = 2.12;

        const result = Operations.getPrecisionNumber(leftNumber, rightNumber);

        expect(result).toEqual(100);
      });
    });
  });

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
