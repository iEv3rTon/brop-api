import { Request, Response } from 'express'
import { prisma } from './database/prismaClient'

export class addPlayerController {
    async handle(request: Request, response: Response) {
        const { playerid, name, rank, totalpixels, dailyrank, dailypixels, br, data } = request.body;
        
        try {
            const player = await prisma.player.create({
                data: {
                    playerid,
                    name,
                    rank,
                    totalpixels,
                    dailypixels,
                    dailyrank,
                    br,
                    data,
                },
            })

            console.log(player)
            return response.json(player);

        } catch (error) {  
            return response.json({ error: `Player with ID ${playerid} already exist in the database`});
        }
    }
}