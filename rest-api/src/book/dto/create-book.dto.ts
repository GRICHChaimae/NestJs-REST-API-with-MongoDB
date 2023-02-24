import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsEnum,
  IsEmpty,
} from 'class-validator';
import { User } from '../../auth/schemas/user.schema';
import { Category } from '../schemas/book.schema';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsString()
  readonly author: string;

  @IsNotEmpty()
  @IsNumber()
  readonly price: number;

  @IsNotEmpty()
  @IsEnum(Category)
  readonly category: Category;

  @IsEmpty({ message: 'You can not pass user id' })
  readonly user: User;
}
