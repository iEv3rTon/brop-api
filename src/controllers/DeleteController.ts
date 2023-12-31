import { Request, Response } from 'express'
import { prisma } from './database/prismaClient'

export class DeleteController {
    async handle(request: Request, response: Response) {
      const { id }: { id?: string } = request.params;
      try {
        const user = await prisma.player.delete({
          where: {
            playerid: Number(id),
          },
        })
        console.log(`User is Deleted ID: ${id}`)
        return response.status(200).json(`User is Deleted ID: ${id}`);
      }catch (error) {  
        return response.status(404).json({ error: `Player with ID ${id} already exist in the database`});
    }

    }
}
