import { Request, Response } from 'express'
import { prisma } from '../database/prismaClient'

export class FeedDiscordController {
    async handle(request: Request, response: Response) {
        const players = await prisma.discord.findMany()
        return response.status(200).json(players)
    }

}