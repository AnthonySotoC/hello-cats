import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';

import { DataloaderService } from './dataloader.service';
import { DataloaderInterceptor } from './dataloader.interceptor';

import { CatModule } from './../../../api/cat/cat.module';
import { HumanModule } from './../../../api/human/human.module';

@Module({
  imports: [CatModule, HumanModule],
  providers: [
    DataloaderService,
    {
      provide: APP_INTERCEPTOR,
      useClass: DataloaderInterceptor,
    },
  ],
  exports: [DataloaderService],
})
export class DataloaderModule {}
