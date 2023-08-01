import { Request, Response } from 'express'
import { prisma } from './database/prismaClient'

export class FindNamePlayerController {
    async handle(request: Request, response: Response) {
        const { name }: { name?: string } = request.params;
        try {
            const find = await prisma.player.findMany({
                where: {
                    name: name
                },
            })

            console.log(find)

            return response.status(200).json(find);
        } catch(error) {
            return response.status(404).json({ error: `Player with Name: **${name}** not exist in the database`});
        }
    }

}