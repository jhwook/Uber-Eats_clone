"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const auth_user_decorator_1 = require("../auth/auth-user.decorator");
const user_entity_1 = require("../users/entities/user.entity");
const create_restaurant_dto_1 = require("./dtos/create-restaurant.dto");
const restaurant_entity_1 = require("./entities/restaurant.entity");
const restaurant_service_1 = require("./restaurant.service");
let RestaurantResolver = class RestaurantResolver {
    constructor(restaurantService) {
        this.restaurantService = restaurantService;
    }
    async createRestaurant(authUser, createRestaurantInput) {
        return this.restaurantService.createRestaurant(authUser, createRestaurantInput);
    }
};
__decorate([
    (0, graphql_1.Mutation)((returns) => create_restaurant_dto_1.CreateRestaurantOutput),
    __param(0, (0, auth_user_decorator_1.AuthUser)()),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User,
        create_restaurant_dto_1.CreateRestaurantInput]),
    __metadata("design:returntype", Promise)
], RestaurantResolver.prototype, "createRestaurant", null);
RestaurantResolver = __decorate([
    (0, graphql_1.Resolver)((of) => restaurant_entity_1.Restaurant),
    __metadata("design:paramtypes", [restaurant_service_1.RestaurantService])
], RestaurantResolver);
exports.RestaurantResolver = RestaurantResolver;
//# sourceMappingURL=restaurants.resolver.js.map