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
exports.FindIdPlayerController = void 0;
const prismaClient_1 = require("./database/prismaClient");
class FindIdPlayerController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            try {
                const find = yield prismaClient_1.prisma.player.findUnique({
                    where: {
                        playerid: Number(id)
                    },
                });
                console.log(find);
                return response.status(200).json(find);
            }
            catch (error) {
                return response.status(200).json({ error: `Player with ID **${id}** not exist in the database` });
            }
        });
    }
}
exports.FindIdPlayerController = FindIdPlayerController;
