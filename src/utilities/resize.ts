import * as fs from "fs/promises";
import path = require("path")
import sharp from "sharp";

const resize = async (
    filename: string,
    width: number,
    height: number
): Promise<unknown> => {
    try {
        await fs.access(path.join(process.cwd(), "./assets/thumbnail/"));
    } catch (e) {
        fs.mkdir(path.join(process.cwd(), "./assets/thumbnail/"));
    }

    try {
        const fullImage = await fs.readFile(
            path.join(process.cwd(), `./assets/full/${filename}.jpg`)
        );
        await sharp(fullImage)
            .resize(width, height)
            .jpeg({ quality: 100 })
            .toFile(
                path.join(
                    process.cwd(),
                    `./assets/thumbnail/${filename}-${width}x${height}.jpg`
                )
            );
    } catch (e) {
        return "Something went wrong!";
    }
};

resize("fjord", 300, 300);

export default resize;
