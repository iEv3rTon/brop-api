import { Request, Response } from 'express'
import { prisma } from '../database/prismaClient'

export class CreateDiscordController {
    async handle(request: Request, response: Response) {
        const { playerid, discordid} = request.body;
        

        try {
            const NewPlayer = await prisma.discord.create({
                data: {
                    playerid,
                    discordid,
                },
            })
            console.log("New discordID: " + playerid)                
            return response.status(200).json(NewPlayer);
            
        } catch(error) {
            return response.status(404).json({ error: `Player with ID ${playerid} already exist in the database`});
        }

    }

}