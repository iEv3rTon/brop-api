import { Request, Response } from 'express'
import { prisma } from '../database/prismaClient'

export class DiscordDeleteController {
    async handle(request: Request, response: Response) {
      const { id }: { id?: string } = request.params;
      try {
        const user = await prisma.discord.delete({
          where: {
            playerid: id,
          },
        })
        return response.status(200).json(`User is Deleted: ${user}`);
      }catch (error) {  
        return response.status(404).json({ error: `Player with ID ${id} already exist in the database`});
    }

    }
}
