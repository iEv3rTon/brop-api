import { Request, Response } from 'express'
import { prisma } from './database/prismaClient'

export class FindIdPlayerController {
    async handle(request: Request, response: Response) {
        const { id }: { id?: string } = request.params;
        
        const find = await prisma.player.findUnique({
            where: {
                playerid: Number(id)
            },
        })

        console.log(find)

        return response.json(find);
    }

}