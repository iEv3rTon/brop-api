import { Router } from "express";
import { CreatePlayerController } from "./controllers/CreatePlayerController";
import { FindIdPlayerController } from "./controllers/FindIdPlayerController";
import { FindNamePlayerController } from "./controllers/FindNamePlayerController";
import { addPlayerController } from "./controllers/addPlayerController";
import { FeedController } from "./controllers/FeedController";
import { PlayerController } from "./controllers/PlayerController";
import { DeleteController } from "./controllers/DeleteController";
// discord ID
import { EditDiscordController } from "./controllers/discord/EditDiscordController";
import { CreateDiscordController } from "./controllers/discord/CreateDiscordController";
import { DiscordController } from "./controllers/discord/DiscordController";
import { FeedDiscordController } from "./controllers/discord/FeedDiscordController";

const router = Router();

const createPlayer = new CreatePlayerController();
const findIdPlayer = new FindIdPlayerController();
const findNamePlayer = new FindNamePlayerController();
const addPlayer = new addPlayerController();
const Feed = new FeedController();
const players = new PlayerController();
const Delete = new DeleteController();
// discord ID
const getDiscordID = new DiscordController();
const EditDiscord = new EditDiscordController();
const CreateDiscord = new CreateDiscordController()
const FeedDiscord = new FeedDiscordController();

router.post("/player/:id", createPlayer.handle);
router.post("/add", addPlayer.handle);

router.get("/search/:id", findIdPlayer.handle);
router.get("/search-name/:name", findNamePlayer.handle);
router.get("/feed", Feed.handle);
router.get("/player", players.handle);

router.delete("/delete", Delete.handle);

// discord ID
router.post("/discord-create", CreateDiscord.handle);
router.post("/discord-edit", EditDiscord.handle)
router.get("/discordid/:id", getDiscordID.handle)
router.get("/discordid", FeedDiscord.handle)

export { router };
