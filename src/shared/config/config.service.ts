import * as dotenv from 'dotenv';
import * as Joi from '@hapi/joi';
import * as fs from 'fs';

import { GqlModuleOptions } from '@nestjs/graphql';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

interface EnvConfig {
  NODE_ENV: string;
  PORT: number;
  API_AUTH_ENABLED: boolean;
  DB_HOST: string;
  DB_PORT: number;
  DB_USER: string;
  DB_PASSWORD: string;
  DB_NAME: string;
}

export class ConfigService {
  private readonly envConfig: EnvConfig;

  constructor(filePath: string) {
    const config: EnvConfig = dotenv.parse(fs.readFileSync(filePath)) as any;
    this.envConfig = this.validateInput(config);
  }

  public get(key: keyof EnvConfig): string {
    return this.envConfig[`${key}`];
  }

  public get isApiAuthEnabled(): boolean {
    return Boolean(this.envConfig.API_AUTH_ENABLED);
  }

  public get graphql(): GqlModuleOptions {
    const get = this.get.bind(this);

    return {
      autoSchemaFile: 'schema.gql',
      playground: get('NODE_ENV') === 'development',
    };
  }

  public get typeORM(): MysqlConnectionOptions {
    const get = this.get.bind(this);

    return {
      type: 'mysql',
      port: 3306,
      host: get('DB_HOST'),
      username: get('DB_USER'),
      password: get('DB_PASSWORD'),
      database: get('DB_NAME'),
      synchronize: true,
    };
  }

  private validateInput(envConfig: EnvConfig): EnvConfig {
    const envVarsSchema: Joi.ObjectSchema = Joi.object({
      NODE_ENV: Joi.string()
        .valid('development', 'production')
        .default('development'),
      PORT: Joi.number().default(5000),
      API_AUTH_ENABLED: Joi.boolean().required(),
      DB_HOST: Joi.string().required(),
      DB_PORT: Joi.number().default(3306),
      DB_USER: Joi.string().required(),
      DB_PASSWORD: Joi.string().required(),
      DB_NAME: Joi.string().required(),
    });

    const { error, value: validatedEnvConfig } = envVarsSchema.validate(
      envConfig,
    );

    if (error) {
      // TODO Create a error folder
      throw new Error(`Config validation error: ${error.message}`);
    }

    return validatedEnvConfig;
  }
}
