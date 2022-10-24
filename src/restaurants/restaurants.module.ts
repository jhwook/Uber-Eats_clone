import { Module } from '@nestjs/common';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantResolver } from './restaurants.resolver';
import { CategoryRepository } from './repositories/category.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantService } from './restaurant.service';
import { TypeOrmExModule } from 'src/typeorm/typeorm-ex.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Restaurant]),
    TypeOrmExModule.forCustomRepository([CategoryRepository]),
  ],
  providers: [RestaurantResolver, RestaurantService],
})
export class RestaurantsModule {}
