import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from '../roles/roles.model';
import { UserRoles } from '../roles/user-roles.model';

import { UsersService } from './users.service';

import { AuthModule } from '../auth/auth.module';
import { RolesModule } from '../roles/roles.module';

import { UsersController } from './users.controller';
import { Post } from '../posts/post.model';
import { User } from './users.model';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoles, Post]),
    RolesModule,
    forwardRef(() => AuthModule),
  ],
  exports: [UsersService],
})
export class UsersModule {}
