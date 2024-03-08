import { Module } from '@nestjs/common';
import { RouteService } from './route.service';
import { PrismaModule } from '../prisma/prisma.module';
import { RouteController } from './route.controller';

@Module({
  imports: [PrismaModule],
  controllers: [RouteController],
  providers: [RouteService],
  exports: [RouteService],
})
export class RouteModule {}
