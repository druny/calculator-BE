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

  static getPrecisionNumber(number: number): number {
    let precisionNumber: string = '1';

    const fractionalLength = Operations.getFractionalLength(number);

    for (let i = 0; i < fractionalLength; i += 1) {
      precisionNumber += 0;
    }

    return Number(precisionNumber);
  }

  addition(leftNumber: number, rightNumber: number): number {
    const leftPrecisionNumber = Operations.getPrecisionNumber(leftNumber);
    const rightPrecisionNumber = Operations.getPrecisionNumber(rightNumber);

    const commonFactor =
      leftPrecisionNumber > rightPrecisionNumber ? leftPrecisionNumber : rightPrecisionNumber;

    return (
      (Number(leftNumber) * leftPrecisionNumber + Number(rightNumber) * rightPrecisionNumber) /
      commonFactor
    );
  }

  subtraction(leftNumber: number, rightNumber: number): number {
    const leftPrecisionNumber = Operations.getPrecisionNumber(leftNumber);
    const rightPrecisionNumber = Operations.getPrecisionNumber(rightNumber);

    const commonFactor =
      leftPrecisionNumber > rightPrecisionNumber ? leftPrecisionNumber : rightPrecisionNumber;

    return (
      (Number(leftNumber) * leftPrecisionNumber - Number(rightNumber) * rightPrecisionNumber) /
      commonFactor
    );
  }

  multiplication(leftNumber: number, rightNumber: number): number {
    const leftPrecisionNumber = Operations.getPrecisionNumber(leftNumber);
    const rightPrecisionNumber = Operations.getPrecisionNumber(rightNumber);

    const commonFactor =
      leftPrecisionNumber > rightPrecisionNumber ? leftPrecisionNumber : rightPrecisionNumber;

    return (
      (Number(leftNumber) * leftPrecisionNumber * Number(rightNumber) * rightPrecisionNumber) /
      commonFactor
    );
  }

  division(leftNumber: number, rightNumber: number): number {
    const leftPrecisionNumber = Operations.getPrecisionNumber(leftNumber);
    const rightPrecisionNumber = Operations.getPrecisionNumber(rightNumber);

    const commonFactor =
      leftPrecisionNumber > rightPrecisionNumber ? leftPrecisionNumber : rightPrecisionNumber;

    return (
      (((Number(leftNumber) * leftPrecisionNumber) / Number(rightNumber)) * rightPrecisionNumber) /
      commonFactor
    );
  }
}
