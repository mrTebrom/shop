import {
  IsString,
  IsNotEmpty,
  MaxLength,
  MinLength,
  IsOptional,
} from 'class-validator';

export class CreateRoleDto {
  @IsString({ message: 'Значение роли должно быть строкой' })
  @IsNotEmpty({ message: 'Значение роли обязательно' })
  @MaxLength(50, { message: 'Значение роли не должно превышать 50 символов' })
  @MinLength(2, { message: 'Значение роли не должно быть меньше 2 символов' })
  value: string;

  @IsString({ message: 'Описание должно быть строкой' })
  @IsOptional()
  @MaxLength(255, { message: 'Описание не должно превышать 255 символов' })
  description: string;
}
