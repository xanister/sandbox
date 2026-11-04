import { helperC } from './C.js';

export function renderAll(inputs: string[]): string[] {
  return inputs.map((input) => helperC(input));
}
