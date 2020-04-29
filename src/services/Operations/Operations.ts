export interface OperationsInterface {
  addition: object;
  subtraction: object;
  division: object;
  multiplication: object;
}

export class Operations implements OperationsInterface {
  addition(leftNumber: number, rightNumber: number): number {
    return Number(leftNumber) + Number(rightNumber);
  }

  subtraction(leftNumber: number, rightNumber: number): number {
    return Number(leftNumber) - Number(rightNumber);
  }

  multiplication(leftNumber: number, rightNumber: number): number {
    return Number(leftNumber) * Number(rightNumber);
  }

  division(leftNumber: number, rightNumber: number): number {
    return Number((Number(leftNumber) / Number(rightNumber)).toFixed(5));
  }
}
