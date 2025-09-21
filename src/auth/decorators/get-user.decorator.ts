import {
  createParamDecorator,
  ExecutionContext,
  InternalServerErrorException,
} from '@nestjs/common';
import { User } from '../entities/user.entity';

export const GetUser = createParamDecorator(
  (data: keyof User, ctx: ExecutionContext): User | User[keyof User] => {
    const req = ctx.switchToHttp().getRequest();
    const user = req.user as User;

    if (!user) {
      throw new InternalServerErrorException('User not found');
    }

    return data ? user[data] : user;
  },
);
