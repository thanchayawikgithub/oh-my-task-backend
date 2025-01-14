import { plainToClass, Type } from 'class-transformer';
import {
  IsString,
  IsNumber,
  validateSync,
  ValidateNested,
  IsBoolean,
} from 'class-validator';

class AppConfig {
  @IsString({ message: 'Stage must be a string' })
  stage: string;

  @IsNumber({}, { message: 'Port must be a number' })
  port: number;
}

class DatabaseConfig {
  @IsString({ message: 'Database host must be a string' })
  host: string;

  @IsNumber({}, { message: 'Database port must be a number' })
  port: number;

  @IsString({ message: 'Database username must be a string' })
  username: string;

  @IsString({ message: 'Database password must be a string' })
  password: string;

  @IsString({ message: 'Database name must be a string' })
  name: string;

  @IsBoolean({ message: 'Synchronize must be a boolean' })
  synchronize: boolean;
}

export class Configuration {
  @ValidateNested()
  @Type(() => AppConfig)
  app: AppConfig;

  @ValidateNested()
  @Type(() => DatabaseConfig)
  database: DatabaseConfig;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToClass(Configuration, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
    forbidUnknownValues: true,
  });

  if (errors.length > 0) {
    const errorMessages = errors
      .map((error) => Object.values(error.constraints).join(', '))
      .join('\n');
    throw new Error(`Configuration validation failed: \n${errorMessages}`);
  }

  return validatedConfig;
}
