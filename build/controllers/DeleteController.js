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
exports.DeleteController = void 0;
const prismaClient_1 = require("./database/prismaClient");
class DeleteController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            try {
                const user = yield prismaClient_1.prisma.player.delete({
                    where: {
                        playerid: Number(id),
                    },
                });
                console.log(`User is Deleted ID: ${id}`);
                return response.status(200).json(`User is Deleted ID: ${id}`);
            }
            catch (error) {
                return response.status(404).json({ error: `Player with ID ${id} already exist in the database` });
            }
        });
    }
}
exports.DeleteController = DeleteController;
