import { TaxYearData } from "../interfaces/tax-bracket.interfaces";

export const TAX_RATES: Record<string, TaxYearData> = {
  '2025-26': {
    year: '2025-26',
    medicareLevy: 0.02,
    brackets: [
      { min: 0, max: 18200, rate: 0, base: 0 },
      { min: 18201, max: 45000, rate: 0.16, base: 0 },
      { min: 45001, max: 135000, rate: 0.30, base: 4288 },
      { min: 135001, max: 190000, rate: 0.37, base: 31288 },
      { min: 190001, max: Infinity, rate: 0.45, base: 51638 },
    ],
  },
  '2024-25': {
    year: '2024-25',
    medicareLevy: 0.02,
    brackets: [
      { min: 0, max: 18200, rate: 0, base: 0 },
      { min: 18201, max: 45000, rate: 0.16, base: 0 },
      { min: 45001, max: 135000, rate: 0.30, base: 4288 },
      { min: 135001, max: 190000, rate: 0.37, base: 31288 },
      { min: 190001, max: Infinity, rate: 0.45, base: 51638 },
    ],
  },
  '2023-24': {
    year: '2023-24',
    medicareLevy: 0.02,
    brackets: [
      { min: 0, max: 18200, rate: 0, base: 0 },
      { min: 18201, max: 45000, rate: 0.19, base: 0 },
      { min: 45001, max: 120000, rate: 0.325, base: 5092 },
      { min: 120001, max: 180000, rate: 0.37, base: 29467 },
      { min: 180001, max: Infinity, rate: 0.45, base: 51667 },
    ],
  },
  '2022-23': {
    year: '2022-23',
    medicareLevy: 0.02,
    brackets: [
      { min: 0, max: 18200, rate: 0, base: 0 },
      { min: 18201, max: 45000, rate: 0.19, base: 0 },
      { min: 45001, max: 120000, rate: 0.325, base: 5092 },
      { min: 120001, max: 180000, rate: 0.37, base: 29467 },
      { min: 180001, max: Infinity, rate: 0.45, base: 51667 },
    ],
  },
  '2021-22': {
    year: '2021-22',
    medicareLevy: 0.02,
    brackets: [
      { min: 0, max: 18200, rate: 0, base: 0 },
      { min: 18201, max: 45000, rate: 0.19, base: 0 },
      { min: 45001, max: 120000, rate: 0.325, base: 5092 },
      { min: 120001, max: 180000, rate: 0.37, base: 29467 },
      { min: 180001, max: Infinity, rate: 0.45, base: 51667 },
    ],
  },
  '2020-21': {
    year: '2020-21',
    medicareLevy: 0.02,
    brackets: [
      { min: 0, max: 18200, rate: 0, base: 0 },
      { min: 18201, max: 45000, rate: 0.19, base: 0 },
      { min: 45001, max: 120000, rate: 0.325, base: 5092 },
      { min: 120001, max: 180000, rate: 0.37, base: 29467 },
      { min: 180001, max: Infinity, rate: 0.45, base: 51667 },
    ],
  },
};

export const getAvailableTaxYears = (): string[] => {
  return Object.keys(TAX_RATES);
};