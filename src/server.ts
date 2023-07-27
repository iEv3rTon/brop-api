import express from "express";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(router);
app.get('/porra', (_req: Request, res: Response) => {
	return res.send('Express Typescript on Vercel')
})

const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`))
