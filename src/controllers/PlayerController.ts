import { Request, Response } from 'express'
import { prisma } from './database/prismaClient'

export class PlayerController {
    async handle(request: Request, response: Response) {
        const players = await prisma.player.findMany()
        return response.status(200).json(players)
    }
}