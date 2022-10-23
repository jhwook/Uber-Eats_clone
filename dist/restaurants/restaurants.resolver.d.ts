import { User } from 'src/users/entities/user.entity';
import { CreateRestaurantInput, CreateRestaurantOutput } from './dtos/create-restaurant.dto';
import { RestaurantService } from './restaurant.service';
export declare class RestaurantResolver {
    private readonly restaurantService;
    constructor(restaurantService: RestaurantService);
    createRestaurant(authUser: User, createRestaurantInput: CreateRestaurantInput): Promise<CreateRestaurantOutput>;
}
