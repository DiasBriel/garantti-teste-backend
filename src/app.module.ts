import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user.module';

@Module({
  imports: [UserModule, TypeOrmModule.forRoot()],
})
export class AppModule {}
