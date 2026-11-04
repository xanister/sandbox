import { helperC } from '../review-fixture/C.js';

export function renderAll2(inputs: string[]): string[] {
  try {
    return inputs.map((input) => helperC(input));
  } catch {
    return [];
  }
}
