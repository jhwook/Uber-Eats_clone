import { User } from 'src/users/entities/user.entity';
import { AllCategoriesOutput } from './dtos/all-categories.dto';
import { CategoryInput, CategoryOutput } from './dtos/category.dto';
import { CreateDishInput, CreateDishOutput } from './dtos/create-dish.dto';
import { CreateRestaurantInput, CreateRestaurantOutput } from './dtos/create-restaurant.dto';
import { DeleteDishInput, DeleteDishOutput } from './dtos/delete-dish.dto';
import { DeleteRestaurantInput, DeleteRestaurantOutput } from './dtos/delete-restaurant.dto';
import { EditDishInput, EditDishOutput } from './dtos/edit-dish.dto';
import { EditRestaurantInput, EditRestaurantOutput } from './dtos/edit-restaurant.dto';
import { RestaurantInput, RestaurantOutput } from './dtos/restaurant.dto';
import { RestaurantsInput, RestuarantsOutput } from './dtos/restaurants.dto';
import { SearchRestaurantInput, SearchRestaurantOutput } from './dtos/search-restaurant.dto';
import { Category } from './entities/category.entity';
import { RestaurantService } from './restaurant.service';
export declare class RestaurantResolver {
    private readonly restaurantService;
    constructor(restaurantService: RestaurantService);
    createRestaurant(authUser: User, createRestaurantInput: CreateRestaurantInput): Promise<CreateRestaurantOutput>;
    editRestaurant(owner: User, editRestaurantInput: EditRestaurantInput): Promise<EditRestaurantOutput>;
    deleteRestaurant(owner: User, deleteRestaurantInput: DeleteRestaurantInput): Promise<DeleteRestaurantOutput>;
    restaurants(restaurantsInput: RestaurantsInput): Promise<RestuarantsOutput>;
    restaurant(restaurantInput: RestaurantInput): Promise<RestaurantOutput>;
    searchRestaurant(searchRestaurantInput: SearchRestaurantInput): Promise<SearchRestaurantOutput>;
}
export declare class CategoryResolver {
    private readonly restaurantService;
    constructor(restaurantService: RestaurantService);
    restaurantCount(category: Category): Promise<number>;
    allCategories(): Promise<AllCategoriesOutput>;
    category(categoryInput: CategoryInput): Promise<CategoryOutput>;
}
export declare class DishResolver {
    private readonly restaurantService;
    constructor(restaurantService: RestaurantService);
    createDish(owner: User, createDishInput: CreateDishInput): Promise<CreateDishOutput>;
    editDish(owner: User, editDishInput: EditDishInput): Promise<EditDishOutput>;
    deleteDish(owner: User, deleteDishInput: DeleteDishInput): Promise<DeleteDishOutput>;
}
