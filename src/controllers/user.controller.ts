import {
  Controller,
  Post,
  Delete,
  Get,
  Body,
  Param,
  ParseIntPipe,
  HttpStatus,
  Res,
  Put,
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
  public async create(
    @Res() res,
    @Body() body: UserSchema,
  ): Promise<UserModel> {
    const email = body.email;
    const existingUser = await this.model.findOne({ where: { email } });

    if (existingUser) {
      return res.status(HttpStatus.CONFLICT).json({
        message: 'User already exists.',
      });
    }

    const createdUser = await this.model.save(body);
    return res.status(HttpStatus.CREATED).json({
      message: 'User has been created successfully.',
      data: createdUser,
    });
  }

  @Get(':id')
  public async getOne(
    @Res() res,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<UserModel> {
    const user = await this.model.findOne({ where: { id } });

    if (!user) {
      return res.status(HttpStatus.NOT_FOUND).json({
        message: 'User not found... Check credentials.',
      });
    }

    return res.status(HttpStatus.OK).json({
      message: 'User found.',
      data: user,
    });
  }

  @Get()
  public async getAll(@Res() res): Promise<UserModel[]> {
    const list = await this.model.find();

    return res.status(HttpStatus.OK).json({
      message: 'Users found.',
      data: list,
    });
  }

  @Put(':id')
  public async update(
    @Res() res,
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UserSchema,
  ): Promise<UserModel> {
    const user = await this.model.findOne({ where: { id } });

    if (!user) {
      return res.status(HttpStatus.NOT_FOUND).json({
        message: 'User not found... Check credentials.',
        data: user,
      });
    }

    await this.model.update({ id }, body);
    return res.status(HttpStatus.OK).json({
      message: 'User has been updated successfully.',
    });
  }

  @Delete(':id')
  public async delete(
    @Res() res,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<string> {
    const user = await this.model.findOne({ where: { id } });

    if (!user) {
      return res.status(HttpStatus.NOT_FOUND).json({
        message: 'User not found... Check credentials.',
      });
    }

    await this.model.delete({ id });
    return res.status(HttpStatus.OK).json({
      message: 'User has been deleted successfully.',
    });
  }
}
