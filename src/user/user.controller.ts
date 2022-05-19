import { Controller, Get, Post, Param } from '@nestjs/common';

@Controller()
export class UserController {
  @Get('users/')
  getUsers() {
    return 'all users';
  }

  @Get('users/:id')
  getUser(@Param('id') id) {
    return `user ${id}`;
  }

  @Post()
  create(): string {
    return 'This action adds a new user';
  }
}
