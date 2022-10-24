import { User } from 'src/users/entities/user.entity';
import { CreateRestaurantInput, CreateRestaurantOutput } from './dtos/create-restaurant.dto';
import { DeleteRestaurantInput, DeleteRestaurantOutput } from './dtos/delete-restaurant.dto';
import { EditRestaurantInput, EditRestaurantOutput } from './dtos/edit-restaurant.dto';
import { RestaurantService } from './restaurant.service';
export declare class RestaurantResolver {
    private readonly restaurantService;
    constructor(restaurantService: RestaurantService);
    createRestaurant(authUser: User, createRestaurantInput: CreateRestaurantInput): Promise<CreateRestaurantOutput>;
    editRestaurant(owner: User, editRestaurantInput: EditRestaurantInput): Promise<EditRestaurantOutput>;
    deleteRestaurant(owner: User, deleteRestaurantInput: DeleteRestaurantInput): Promise<DeleteRestaurantOutput>;
}
