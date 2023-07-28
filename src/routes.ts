import { Router } from "express";
import { CreatePlayerController } from "./controllers/CreatePlayerController";
import { FindIdPlayerController } from "./controllers/FindIdPlayerController";
import { FindNamePlayerController } from "./controllers/FindNamePlayerController";
import { addPlayerController } from "./controllers/addPlayerController";
import { FeedController } from "./controllers/FeedController";
import { Home } from "./controllers/home";

const router = Router();

const createPlayer = new CreatePlayerController();
const findIdPlayer = new FindIdPlayerController();
const findNamePlayer = new FindNamePlayerController();
const addPlayer = new addPlayerController();
const Feed = new FeedController();
const home = new Home();

router.post("/player/:id", createPlayer.handle);
router.post("/add", addPlayer.handle);

router.get("/search/:id", findIdPlayer.handle);
router.get("/search-name/:name", findNamePlayer.handle);
router.get("/feed", Feed.handle);
router.get("/", home.handle)

export { router };
