import { Request, Response } from 'express'

export class Home {
    async handle(request: Request, response: Response) {
        return response.status(200).json({
    title: "Express Testing",
    message: "The app is working properly!",
  });
    }
}
