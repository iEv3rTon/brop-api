import { Request, Response } from 'express'
import { prisma } from './database/prismaClient'

export class CreatePlayerController {
    async handle(request: Request, response: Response) {
        const { id }: { id?: string } = request.params;
        const { playerid, name, rank, totalpixels, dailyrank, dailypixels, br, data } = request.body;

        try{
            const CreatePlayer = await prisma.player.findUnique({
                where: {
                    playerid: Number(id),
                },
            })

            const Updateplayer = await prisma.player.update({
                where: {
                    playerid: Number(id),
                },
                data: {
                    name,
                    rank,
                    totalpixels,
                    dailypixels,
                    dailyrank,
                    br,
                    data,
                }

            })
            console.log(Updateplayer)

            return response.json(Updateplayer);

        } catch (error) {
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
            //return response.json({ error: `Post with ID ${playerid} does not exist in the database`});
        }

    }
}