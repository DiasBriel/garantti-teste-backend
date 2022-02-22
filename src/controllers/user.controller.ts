import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';

@Controller('/user')
export class UserController {
  @Post()
  public create(): any {
    return { data: 'Create' };
  }
  @Get(':id')
  public getOne(): any {
    return { data: 'Find one' };
  }
  @Get()
  public getAll(): any {
    return { data: 'Find all' };
  }
  @Patch(':id')
  public update(): any {
    return { data: 'update one' };
  }
  @Delete(':id')
  public delete(): any {
    return { data: 'delete one' };
  }
}
