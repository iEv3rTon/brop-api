"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePlayerController = void 0;
const prismaClient_1 = require("./database/prismaClient");
class CreatePlayerController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const { playerid, name, rank, totalpixels, dailyrank, dailypixels, br, data } = request.body;
            try {
                const find = yield prismaClient_1.prisma.player.findUnique({
                    where: {
                        playerid: Number(id)
                    },
                });
                if (find === null) {
                    const NewPlayer = yield prismaClient_1.prisma.player.create({
                        data: {
                            playerid,
                            name,
                            rank,
                            totalpixels,
                            dailypixels,
                            dailyrank,
                            br,
                            data,
                        },
                    });
                    console.log("New playerID: " + playerid);
                    return response.status(200).json(NewPlayer);
                }
                else {
                    const Updateplayer = yield prismaClient_1.prisma.player.update({
                        where: {
                            playerid: Number(id),
                        },
                        data: {
                            name,
                            rank,
                            totalpixels,
                            dailypixels,
                            dailyrank,
                            br,
                            data,
                        }
                    });
                    console.log("Update PlayerID: " + playerid);
                    return response.status(200).json(Updateplayer);
                }
            }
            catch (error) {
                //return response.status(404).json();
                console.log(error);
                return response.status(404).json(error);
            }
        });
    }
}
exports.CreatePlayerController = CreatePlayerController;
