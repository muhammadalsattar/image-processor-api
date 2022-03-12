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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const resize_1 = __importDefault(require("../../utilities/resize"));
describe('Resize function scenarios', () => {
    it('Should resolve given right params', () => __awaiter(void 0, void 0, void 0, function* () {
        const promise = (0, resize_1.default)('fjord', 300, 300);
        yield expectAsync(promise).toBeResolved();
    }));
    it('Should return proper error message when something goes wrong', () => __awaiter(void 0, void 0, void 0, function* () {
        const promise = yield (0, resize_1.default)('filename', 300, 300);
        expect(promise).toBe('Something went wrong!');
    }));
});
