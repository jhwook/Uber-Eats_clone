import { CoreOutput } from 'src/common/dtos/output.dto';
import { Restaurant } from '../entities/restaurant.entity';
declare const CreateRestaurantInput_base: import("@nestjs/common").Type<Omit<Restaurant, "id" | "category" | "owner">>;
export declare class CreateRestaurantInput extends CreateRestaurantInput_base {
}
export declare class CreateRestaurantOutput extends CoreOutput {
}
export {};
