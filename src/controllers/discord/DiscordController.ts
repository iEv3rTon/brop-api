import { Request, Response } from 'express'
import { prisma } from '../database/prismaClient'

export class DiscordController {
    async handle(request: Request, response: Response) {
        const { id }: { id?: string } = request.params;
        try {
            const find = await prisma.discord.findUnique({
                where: {
                    discordid: id
                },
            })

            console.log(find)

            return response.status(200).json(find);
            
        } catch(error) {
            return response.status(404).json({ error: `Discord with ID **${id}** not exist in the database`});
        }

    }

}