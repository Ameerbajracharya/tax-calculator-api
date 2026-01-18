import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TaxService } from './tax.service';
import { CalculateTaxDto } from './dto/calculate-tax.dto';

@Controller('tax')
export class TaxController {
  constructor(private readonly taxService: TaxService) {}
  @Get()
  getAllRequests(): any {
    return {
      message: 'Tax API is running',
      endPoints: {
        calculateTax: { method: 'POST', path: '/tax/calculate', body: CalculateTaxDto },
        getAvailableTaxYears: { method: 'GET', path: '/tax/years'},
        getAllTaxRates: { method: 'GET', path: '/tax/rates'},
      }
    }
  }

  @Post('calculate')
  calculate(@Body() dto: CalculateTaxDto) {
    return this.taxService.calculateTax(dto);
  }

  @Get('years')
  getAvailableTaxYears() {
    return this.taxService.getAvailableTaxYears();
  }

  @Get('rates')
  getAllTaxRates() {
    return this.taxService.getAllTaxRates();
  }

  @Get('rates/:taxYear')
  getTaxRates(@Param('taxYear') taxYear: string) {
    return this.taxService.getTaxRates(taxYear);
  }
}
