"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const apollo_1 = require("@nestjs/apollo");
const Joi = require("joi");
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const restaurants_module_1 = require("./restaurants/restaurants.module");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const restaurant_entity_1 = require("./restaurants/entities/restaurant.entity");
const users_module_1 = require("./users/users.module");
const common_module_1 = require("./common/common.module");
const user_entity_1 = require("./users/entities/user.entity");
const jwt_module_1 = require("./jwt/jwt.module");
const auth_module_1 = require("./auth/auth.module");
const verification_entity_1 = require("./users/entities/verification.entity");
const category_entity_1 = require("./restaurants/entities/category.entity");
const dish_entity_1 = require("./restaurants/entities/dish.entity");
const orders_module_1 = require("./orders/orders.module");
const order_entity_1 = require("./orders/entities/order.entity");
const order_item_entity_1 = require("./orders/entities/order-item.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env.test',
                ignoreEnvFile: process.env.NODE_ENV === 'prod',
                validationSchema: Joi.object({
                    NODE_ENV: Joi.string().valid('dev', 'prod').required(),
                    DB_HOST: Joi.string().required(),
                    DB_PORT: Joi.string().required(),
                    DB_USERNAME: Joi.string().required(),
                    DB_NAME: Joi.string().required(),
                    PRIVATE_KEY: Joi.string().required(),
                }),
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.DB_HOST,
                port: +process.env.DB_PORT,
                username: process.env.DB_USERNAME,
                database: process.env.DB_NAME,
                synchronize: process.env.NODE_ENV !== 'prod',
                logging: false,
                entities: [
                    restaurant_entity_1.Restaurant,
                    user_entity_1.User,
                    verification_entity_1.Verification,
                    category_entity_1.Category,
                    dish_entity_1.Dish,
                    order_entity_1.Order,
                    order_item_entity_1.OrderItem,
                ],
            }),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                installSubscriptionHandlers: true,
                autoSchemaFile: true,
                subscriptions: {
                    'subscriptions-transport-ws': {
                        onConnect: (context) => {
                            const token = context['x-jwt'];
                            return { token };
                        },
                    },
                },
                context: ({ req }) => {
                    return { token: req.headers['x-jwt'] };
                },
            }),
            jwt_module_1.JwtModule.forRoot({
                privateKey: process.env.PRIVATE_KEY,
            }),
            restaurants_module_1.RestaurantsModule,
            users_module_1.UsersModule,
            common_module_1.CommonModule,
            auth_module_1.AuthModule,
            orders_module_1.OrdersModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map