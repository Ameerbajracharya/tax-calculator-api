import { BadRequestException, Injectable } from '@nestjs/common';
import { CalculateTaxDto } from './dto/calculate-tax.dto';
import { getAvailableTaxYears, TAX_RATES } from './constants/tax-rates.constant';

@Injectable()
export class TaxService {
    calculateTax(dto: CalculateTaxDto): any {
        const { income, taxYear } = dto;

        // Get tax data for the selected year
        const taxYearData = TAX_RATES[taxYear];

        if(!taxYearData) {
            throw new BadRequestException(`Invalid tax year: ${taxYear}. Available years are: ${getAvailableTaxYears().join(', ')}`);
        }

        // Calculate tax based on income and tax brackets
        let incomeTax = 0;

        for (const bracket of taxYearData.brackets) {
            if (income >= bracket.min && income <= bracket.max) {
                const taxableIncome = income - bracket.min;
                incomeTax = bracket.base + (taxableIncome * bracket.rate);
                break;
            }
        }

        // Calculate Medicare Levy
        const medicareLevy = income * taxYearData.medicareLevy;

        // Total tax
        const totalTax = incomeTax + medicareLevy;
        const netIncome = income - totalTax;

        return {
            grossIncome: income,
            incomeTax: parseFloat(incomeTax.toFixed(2)),
            medicareLevy: parseFloat(medicareLevy.toFixed(2)),
            totalTax: parseFloat(totalTax.toFixed(2)),
            netIncome: parseFloat(netIncome.toFixed(2)),
            effectiveTaxRate: parseFloat(((totalTax / income) * 100).toFixed(2)),
            taxYear: taxYearData.year
        }
    }

    getAvailableTaxYears(): string[] {
        return getAvailableTaxYears();
    }

    getAllTaxRates(): Record<string, any> {
        return TAX_RATES;
    }

    getTaxRates(taxYear: string): any {
        const taxYearData = TAX_RATES[taxYear];

        if(!taxYearData) {
            throw new BadRequestException(`Invalid tax year: ${taxYear}. Available years are: ${getAvailableTaxYears().join(', ')}`);
        }

        return taxYearData;
    }
}
