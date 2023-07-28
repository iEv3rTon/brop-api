"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const CreatePlayerController_1 = require("./controllers/CreatePlayerController");
const FindIdPlayerController_1 = require("./controllers/FindIdPlayerController");
const FindNamePlayerController_1 = require("./controllers/FindNamePlayerController");
const addPlayerController_1 = require("./controllers/addPlayerController");
const FeedController_1 = require("./controllers/FeedController");
const router = (0, express_1.Router)();
exports.router = router;
const createPlayer = new CreatePlayerController_1.CreatePlayerController();
const findIdPlayer = new FindIdPlayerController_1.FindIdPlayerController();
const findNamePlayer = new FindNamePlayerController_1.FindNamePlayerController();
const addPlayer = new addPlayerController_1.addPlayerController();
const Feed = new FeedController_1.FeedController();
router.post("/player/:id", createPlayer.handle);
router.post("/add", addPlayer.handle);
router.get("/search/:id", findIdPlayer.handle);
router.get("/search-name/:name", findNamePlayer.handle);
router.get("/feed", Feed.handle);
