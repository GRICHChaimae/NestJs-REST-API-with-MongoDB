import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    BookModule,
    MongooseModule.forRoot('mongodb://127.0.0.1/library-nest-api'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
