import {
  Controller,
  Post,
  Delete,
  Get,
  Patch,
  Body,
  Param,
  ParseIntPipe,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserModel } from 'src/models/user.model';
import { UserSchema } from 'src/schemas/user.schema';

@Controller('/user')
export class UserController {
  constructor(
    @InjectRepository(UserModel) private model: Repository<UserModel>,
  ) {}

  @Post()
  public async create(@Body() body: UserSchema): Promise<UserModel> {
    const createdUser = await this.model.save(body);
    return createdUser;
  }

  @Get(':id')
  public async getOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<UserModel> {
    const user = await this.model.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundException('Pessoa não encontrada...');
    }
    return user;
  }

  @Get()
  public async getAll(): Promise<UserModel[]> {
    const list = await this.model.find();
    return list;
  }

  @Patch(':id')
  public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UserSchema,
  ): Promise<UserModel> {
    const user = await this.model.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundException('Pessoa não encontrada...');
    }

    await this.model.update({ id }, body);
    return await this.model.findOne({ id });
  }

  @Delete(':id')
  public async delete(@Param('id', ParseIntPipe) id: number): Promise<string> {
    const user = await this.model.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('Pessoa não encontrada...');
    }
    await this.model.delete({ id });

    return 'Usuário deletado com sucesso.';
  }
}
