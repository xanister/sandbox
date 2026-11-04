import { helperC } from './C.js';

export function renderAll(inputs: string[]): string[] {
  try {
    return inputs.map((input) => helperC(input));
  } catch {
    return [];
  }
}
