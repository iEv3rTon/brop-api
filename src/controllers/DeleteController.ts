import { Request, Response } from 'express'
import { prisma } from './database/prismaClient'

export class DeleteController {
    async handle(request: Request, response: Response) {
      const { id }: { id?: string } = request.params;

      const user = await prisma.player.delete({
        where: {
          playerid: Number(id),
        },
      })
      return response.status(200).json(user);
    }
}
