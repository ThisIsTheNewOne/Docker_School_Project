import { ApiProperty } from '@nestjs/swagger';
import { Room } from 'src/room/entities/room.entity';

export class CreateUserDto {
  // this is a test dto

  @ApiProperty({ default: 'email', required: true })
  userId: string;

  @ApiProperty({ default: 'username', required: true })
  username: string;

  @ApiProperty({ default: 'Password123', required: true })
  password: string;
}
