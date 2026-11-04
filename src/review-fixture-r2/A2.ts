import { helperC } from '../review-fixture/C.js';

export function renderA2(input: string): string {
  try {
    return helperC(input);
  } catch {
    return '';
  }
}
