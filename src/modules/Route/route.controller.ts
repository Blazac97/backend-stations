import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RouteService } from './route.service';
import { CreateRouteDto, UpdateRouteDto } from './route.dto';

@Controller('/routes')
export class RouteController {
  constructor(private routeService: RouteService) {}

  @Get('/')
  getAllRoutes() {
    return this.routeService.getAllRoutes();
  }

  @Get('/:id')
  getRouteById(@Param('id') routeId: number) {
    return this.routeService.getRouteById(routeId);
  }

  @Post('/')
  createRoute(@Body() data: CreateRouteDto) {
    return this.routeService.createRoute(data.name, data.points);
  }

  @Put('/:id')
  updateRoute(@Param('id') routeId: number, @Body() data: UpdateRouteDto) {
    return this.routeService.updateRoute({
      id: routeId,
      data: data,
    });
  }

  @Delete('/:id')
  deleteRouteById(@Param('id') routeId: number) {
    return this.routeService.deleteRouteById(routeId);
  }
}
