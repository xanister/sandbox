import { helperC } from '../review-fixture/C.js';

export function renderAll2(inputs: string[]): string[] {
  return inputs.map((input) => helperC(input));
}
