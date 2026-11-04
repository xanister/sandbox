import { helperC } from './C.js';

export function renderA(input: string): string {
  try {
    return helperC(input);
  } catch {
    return '';
  }
}
