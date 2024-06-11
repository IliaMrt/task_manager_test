import { StatusDto } from './status.dto';

export class TaskDto {
  head: string;
  description: string;
  status: StatusDto;
}
