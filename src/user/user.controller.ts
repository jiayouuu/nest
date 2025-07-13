import { Body, Controller, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('list')
  list(@Query() user: Partial<User>) {
    return this.userService.getAll(user);
  }
  @Get('add')
  add(@Query() user: Partial<User>) {
    return this.userService.add(user);
  }

  @Get('delete')
  delete(@Query('id') id: string) {
    return this.userService.delete(id);
  }

  @Get('update')
  update(@Query('id') id: string, @Query() user: Partial<User>) {
    return this.userService.update(id, user);
  }
}
