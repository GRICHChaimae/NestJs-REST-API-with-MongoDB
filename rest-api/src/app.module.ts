import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './book/book.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    BookModule,
    MongooseModule.forRoot('mongodb://127.0.0.1/library-nest-api'),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
