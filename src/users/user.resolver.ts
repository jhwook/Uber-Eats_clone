import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import {
  CreateAccountInput,
  CreateAccountOutput,
} from './dtos/create-account.dto';
import { LoginInput, LoginOutput } from './dtos/login.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private readonly userService: UserService) {}

  @Query((returns) => Boolean)
  hi() {
    return true;
  }

  @Mutation((returns) => CreateAccountOutput)
  async createAccount(@Args('input') createAccountInput: CreateAccountInput) {
    try {
      const { ok, error } = await this.userService.createAccount(
        createAccountInput,
      );

      return {
        ok,
        error,
      };
    } catch (err) {
      return {
        ok: false,
        error: err,
      };
    }
  }

  // loginß
  @Mutation((returns) => LoginOutput)
  async login(@Args('input') loginInput: LoginInput) {
    try {
      return this.userService.login(loginInput);
    } catch (error) {
      return {
        ok: false,
        error,
      };
    }
  }
}
