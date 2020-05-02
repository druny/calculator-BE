export interface OperationsInterface {
  addition: object;
  subtraction: object;
  division: object;
  multiplication: object;
}

export class Operations implements OperationsInterface {
  static getFractionalLength(number: number) {
    const stringifiedNumber = String(number);

    return stringifiedNumber.includes('.') ? stringifiedNumber.split('.')[1].length : 0;
  }

  static getPrecisionNumber(leftNumber: number, rightNumber: number): number {
    let precisionNumber: string = '1';

    const fractionalLeftNumber = Operations.getFractionalLength(leftNumber);
    const fractionalRightNumber = Operations.getFractionalLength(rightNumber);

    const fractionalLength =
      fractionalLeftNumber >= fractionalRightNumber ? fractionalLeftNumber : fractionalRightNumber;

    for (let i = 0; i < fractionalLength; i += 1) {
      precisionNumber += 0;
    }

    return Number(precisionNumber);
  }

  addition(leftNumber: number, rightNumber: number): number {
    const precisionNumber = Operations.getPrecisionNumber(leftNumber, rightNumber);

    return (
      (Number(leftNumber) * precisionNumber + Number(rightNumber) * precisionNumber) /
      precisionNumber
    );
  }

  subtraction(leftNumber: number, rightNumber: number): number {
    const precisionNumber = Operations.getPrecisionNumber(leftNumber, rightNumber);

    return (
      (Number(leftNumber) * precisionNumber - Number(rightNumber) * precisionNumber) /
      precisionNumber
    );
  }

  multiplication(leftNumber: number, rightNumber: number): number {
    const precisionNumber = Operations.getPrecisionNumber(leftNumber, rightNumber);

    return (
      (Number(leftNumber) * precisionNumber * Number(rightNumber) * precisionNumber) /
      precisionNumber
    );
  }

  division(leftNumber: number, rightNumber: number): number {
    const precisionNumber = Operations.getPrecisionNumber(leftNumber, rightNumber);

    return (
      (((Number(leftNumber) * precisionNumber) / Number(rightNumber)) * precisionNumber) /
      precisionNumber
    );
  }
}
