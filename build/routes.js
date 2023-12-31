"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const CreatePlayerController_1 = require("./controllers/CreatePlayerController");
const FindIdPlayerController_1 = require("./controllers/FindIdPlayerController");
const FindNamePlayerController_1 = require("./controllers/FindNamePlayerController");
const addPlayerController_1 = require("./controllers/addPlayerController");
const FeedController_1 = require("./controllers/FeedController");
const PlayerController_1 = require("./controllers/PlayerController");
const DeleteController_1 = require("./controllers/DeleteController");
// discord ID
const EditDiscordController_1 = require("./controllers/discord/EditDiscordController");
const CreateDiscordController_1 = require("./controllers/discord/CreateDiscordController");
const DiscordController_1 = require("./controllers/discord/DiscordController");
const FeedDiscordController_1 = require("./controllers/discord/FeedDiscordController");
const DiscordDeleteController_1 = require("./controllers/discord/DiscordDeleteController");
const router = (0, express_1.Router)();
exports.router = router;
const createPlayer = new CreatePlayerController_1.CreatePlayerController();
const findIdPlayer = new FindIdPlayerController_1.FindIdPlayerController();
const findNamePlayer = new FindNamePlayerController_1.FindNamePlayerController();
const addPlayer = new addPlayerController_1.addPlayerController();
const Feed = new FeedController_1.FeedController();
const players = new PlayerController_1.PlayerController();
const Delete = new DeleteController_1.DeleteController();
// discord ID
const getDiscordID = new DiscordController_1.DiscordController();
const EditDiscord = new EditDiscordController_1.EditDiscordController();
const CreateDiscord = new CreateDiscordController_1.CreateDiscordController();
const FeedDiscord = new FeedDiscordController_1.FeedDiscordController();
const DiscordDelete = new DiscordDeleteController_1.DiscordDeleteController;
router.post("/player/:id", createPlayer.handle);
router.post("/add", addPlayer.handle);
router.get("/search/:id", findIdPlayer.handle);
router.get("/search-name/:name", findNamePlayer.handle);
router.get("/feed", Feed.handle);
router.get("/player", players.handle);
//router.delete("/delete/:id", Delete.handle);
// discord ID
router.post("/discord-create", CreateDiscord.handle);
router.post("/discord-edit", EditDiscord.handle);
router.get("/discordid/:id", getDiscordID.handle);
router.get("/discordid", FeedDiscord.handle);
router.delete("/discord-delete/:id", DiscordDelete.handle);
