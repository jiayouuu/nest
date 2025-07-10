import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { RDTO } from './r.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('list')
  list() {
    return this.userService.get();
  }
  @Get('add')
  add(@Query() query: { name: string }) {
    const { name } = query;
    return this.userService.add(name);
  }

  @Post('range')
  range(@Body() body: RDTO) {
    return this.userService.range(body.range);
  }
}
