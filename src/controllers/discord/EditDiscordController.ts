import { Request, Response } from 'express'
import { prisma } from '../database/prismaClient'

export class EditDiscordController {
    async handle(request: Request, response: Response) {
        const { playerid, discordid} = request.body;

        try {
            const Updateplayer = await prisma.discord.update({
                where: {
                    discordid: discordid
                },
                data: {
                    playerid,
                }
            })
            console.log("Update discordID" + playerid)                
            return response.status(200).json(Updateplayer);
            
        } catch(error) {
            return response.status(404).json({ error: `${error}`});
        }

    }

}