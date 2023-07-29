import { Router } from "express";
import { CreatePlayerController } from "./controllers/CreatePlayerController";
import { FindIdPlayerController } from "./controllers/FindIdPlayerController";
import { FindNamePlayerController } from "./controllers/FindNamePlayerController";
import { addPlayerController } from "./controllers/addPlayerController";
import { FeedController } from "./controllers/FeedController";
import { PlayerController } from "./controllers/PlayerController";
import { DeleteController } from "./controllers/DeleteController";

const router = Router();

const createPlayer = new CreatePlayerController();
const findIdPlayer = new FindIdPlayerController();
const findNamePlayer = new FindNamePlayerController();
const addPlayer = new addPlayerController();
const Feed = new FeedController();
const players = new PlayerController();
const Delete = new DeleteController();

router.post("/player/:id", createPlayer.handle);
router.post("/add", addPlayer.handle);

router.get("/search/:id", findIdPlayer.handle);
router.get("/search-name/:name", findNamePlayer.handle);
router.get("/feed", Feed.handle);
router.get("/player", players.handle);
router.delete("/delete", Delete.handle);

export { router };
