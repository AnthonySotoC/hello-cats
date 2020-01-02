import { NestFactory } from '@nestjs/core';

import { AppModule } from '@api/app.module';
import { AuthGuard } from '@shared/modules/auth/auth.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalGuards(new AuthGuard());
  await app.listen(5000);
}
bootstrap();
