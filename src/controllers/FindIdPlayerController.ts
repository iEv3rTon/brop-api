import { Request, Response } from 'express'
import { prisma } from './database/prismaClient'

export class FindIdPlayerController {
    async handle(request: Request, response: Response) {
        const { id }: { id?: string } = request.params;
        try {
        const find = await prisma.player.findUnique({
            where: {
                playerid: Number(id)
            },
        })

        console.log(find)

        return response.status(200).json(find);
    } catch(error) {
        return response.status(200).json({ error: `Player with ID **${id}** not exist in the database`});
    }
    }

}