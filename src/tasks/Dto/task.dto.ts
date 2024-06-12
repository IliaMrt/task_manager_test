import { StatusDto } from './status.dto';
import { IsEnum, IsNotEmpty, Length } from 'class-validator';

export class TaskDto {
  @IsNotEmpty()
  @Length(3)
  head: string;
  description: string;
  @IsNotEmpty()
  @IsEnum(['atWork', 'complete'], {
    message: "Status must be 'atWork' or 'complete",
  })
  status: StatusDto;
}
