import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvestmentEntity } from './entities/invest.entity';
import { InvestmentTypeEntity } from './entities/investment-type.entity';
import { InvestmentPackageEntity } from './entities/investment-package.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      InvestmentEntity,
      InvestmentTypeEntity,
      InvestmentPackageEntity,
    ]),
  ],
  controllers: [],
  providers: [],
})
export class InvestmentModule {}
