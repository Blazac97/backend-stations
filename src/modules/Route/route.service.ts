import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { UpdateRouteDto } from './route.dto';

@Injectable()
export class RouteService {
  constructor(private prismaService: PrismaService) {}

  getAllRoutes = () => {
    return this.prismaService.route.findMany({
      include: {
        points: true,
      },
    });
  };

  getRouteById = (id: number) => {
    return this.prismaService.route.findUnique({
      where: {
        id,
      },
      include: {
        points: true,
      },
    });
  };

  createRoute = (
    name: string,
    points: Prisma.RoutePointCreateWithoutRouteInput[],
  ) => {
    return this.prismaService.route.create({
      data: {
        name,
        points: {
          create: points.map((it, index) => ({
            name: it.name,
            timeArrival: index === 0 ? null : it.timeArrival,
            timeDeparture:
              index === points.length - 1 ? null : it.timeDeparture,
          })),
        },
      },
      include: {
        points: true,
      },
    });
  };

  updateRoute = async (params: { id: number; data: UpdateRouteDto }) => {
    const { id, data } = params;

    // Пояснение:
    // Способ выбранный для решения задачи обновления Route и его RoutePoint'ов
    // не является наиболее оптимальным. Он был выбран лишь для демонстрации функционала
    // описанного в тех задании и для значительной экономии времени.
    // Наиболее предпочтительным вариантом было бы не полное удаление всех связанных
    // точек маршрута, а сбор списка идентификаторов на удаление и на обновление точек маршрута.

    await this.prismaService.routePoint.deleteMany({
      where: {
        routeId: id,
      },
    });

    return this.prismaService.route.update({
      where: {
        id,
      },
      data: {
        name: data.name,
        points: {
          create: data.points.map((it, index) => ({
            name: it.name,
            timeArrival: index === 0 ? null : it.timeArrival,
            timeDeparture:
              index === data.points.length - 1 ? null : it.timeDeparture,
          })),
        },
      },
    });
  };

  deleteRouteById = (id: number) => {
    return this.prismaService.route.delete({
      where: {
        id,
      },
      include: {
        points: true,
      },
    });
  };
}
