export interface TaxBracket {
    min: number;
    max: number;
    rate: number;
    base: number;
}

export interface TaxYearData {
  year: string;
  brackets: TaxBracket[];
  medicareLevy: number;
}