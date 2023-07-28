import { Request, Response } from 'express'
import { prisma } from './database/prismaClient'
import { Prisma, PrismaClient } from '@prisma/client'

export class FeedController {
    async handle(request: Request, response: Response) {
        const { searchString, skip, take, orderBy } = request.query

        const or: Prisma.PlayerWhereInput = searchString
            ? {
                OR: [
                { name: { contains: searchString as string } },
                //{ playerid: { contains: searchString as string } },
                ],
            }
            : {}

        const User = await prisma.player.findMany({
            where: {
            ...or,
            },
            take: Number(take) || undefined,
            skip: Number(skip) || undefined,
            orderBy: {
            updatedAt: orderBy as Prisma.SortOrder,
            },
        })

        response.json(User)
        }
    }