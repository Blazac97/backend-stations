import { Module } from '@nestjs/common';
import { RouteModule } from './modules/route/route.module';

@Module({
  imports: [RouteModule],
})
export class AppModule {}
