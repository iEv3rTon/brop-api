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
exports.FeedController = void 0;
const prismaClient_1 = require("./database/prismaClient");
class FeedController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { searchString, skip, take, orderBy } = request.query;
            const or = searchString
                ? {
                    OR: [
                        { br: { contains: searchString } },
                        //{ playerid: { contains: searchString as string } },
                    ],
                }
                : {};
            const User = yield prismaClient_1.prisma.player.findMany({
                where: Object.assign({}, or),
                take: Number(take) || undefined,
                skip: Number(skip) || undefined,
                orderBy: {
                    rank: orderBy,
                },
            });
            response.status(200).json(User);
        });
    }
}
exports.FeedController = FeedController;
