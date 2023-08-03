import { Request, Response } from 'express'
import { prisma } from './database/prismaClient'

export class CreatePlayerController {
    async handle(request: Request, response: Response) {
        const { id }: { id?: string } = request.params;
        const { playerid, name, rank, totalpixels, dailyrank, dailypixels, br, data } = request.body;

        try{
            const find = await prisma.player.findUnique({
                where: {
                    playerid: Number(id)
                },
            })
            if (find === null) {
                const NewPlayer = await prisma.player.create({
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
    
                console.log("New playerID: " + playerid)                
                return response.status(200).json(NewPlayer);
            } else {
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
            console.log("Update PlayerID: " + playerid)
            return response.status(200).json(Updateplayer);
        }

        } catch (error) {
            //return response.status(404).json();
            console.log(error)
            return response.status(404).json(error);
        }

    }
}