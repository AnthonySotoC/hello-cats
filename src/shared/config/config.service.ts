import * as dotenv from 'dotenv';
import * as Joi from '@hapi/joi';
import * as fs from 'fs';

interface EnvConfig {
  NODE_ENV: string;
  PORT: number;
  API_AUTH_ENABLED: boolean;
}

export class ConfigService {
  private readonly envConfig: EnvConfig;

  constructor(filePath: string) {
    const config: EnvConfig = dotenv.parse(fs.readFileSync(filePath)) as any;
    this.envConfig = this.validateInput(config);
  }

  public get(key: string): string {
    return this.envConfig[key];
  }

  get isApiAuthEnabled(): boolean {
    return Boolean(this.envConfig.API_AUTH_ENABLED);
  }

  private validateInput(envConfig: EnvConfig): EnvConfig {
    const envVarsSchema: Joi.ObjectSchema = Joi.object({
      NODE_ENV: Joi.string()
        .valid('development', 'production')
        .default('development'),
      PORT: Joi.number().default(5000),
      API_AUTH_ENABLED: Joi.boolean().required(),
    });

    const { error, value: validatedEnvConfig } = envVarsSchema.validate(
      envConfig,
    );

    if (error) {
      throw new Error(`Config validation error: ${error.message}`);
    }

    return validatedEnvConfig;
  }
}
