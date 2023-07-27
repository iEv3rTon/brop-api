import { Request, Response } from 'express'
import { prisma } from './database/prismaClient'

export class FindNamePlayerController {
    async handle(request: Request, response: Response) {
        const { name }: { name?: string } = request.params;
        
        const find = await prisma.player.findMany({
            where: {
                name: name
            },
        })

        console.log(find)

        return response.json(find);
    }

}