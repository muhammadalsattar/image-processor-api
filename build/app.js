"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const fs = __importStar(require("fs/promises"));
const resize_1 = __importDefault(require("./utilities/resize"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(process.cwd(), './public/index.html'));
});
app.get('/images/:filename', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filename = req.params.filename;
    const width = parseInt(req.query.width);
    const height = parseInt(req.query.width);
    try {
        yield fs.access(path_1.default.join(process.cwd(), `./assets/full/${filename}.jpg`));
    }
    catch (e) {
        return res.status(404).sendFile(path_1.default.join(process.cwd(), './public/404.html'));
    }
    if (!width && !height) {
        res.sendFile(path_1.default.join(process.cwd(), `./assets/full/${filename}.jpg`));
    }
    const filePath = path_1.default.join(process.cwd(), `./assets/thumbnail/${filename}-${width}x${height}.jpg`);
    try {
        yield fs.access(filePath);
        res.sendFile(filePath);
    }
    catch (e) {
        yield (0, resize_1.default)(filename, width, height);
        res.sendFile(filePath);
    }
}));
app.get('/*', (req, res) => {
    res.sendFile(path_1.default.join(process.cwd(), './public/404.html'));
});
app.listen(port, () => {
    console.log(`Server is running! listening on port: ${port}`);
});
exports.default = app;
