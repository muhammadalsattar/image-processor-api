import express from 'express'
import path from 'path'
import * as fs from 'fs/promises'
import resize from './utilities/resize'

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res): void => {
    res.sendFile(path.join(process.cwd(), './public/index.html'))
})

app.get('/images/:filename', async (req, res): Promise<void> => {
    const filename: string = req.params.filename
    const width: number = parseInt(req.query.width as unknown as string)
    const height: number = parseInt(req.query.height as unknown as string)
    try {
        await fs.access(
            path.join(process.cwd(), `./assets/full/${filename}.jpg`)
        )
    } catch (e) {
        return res
            .status(404)
            .sendFile(path.join(process.cwd(), './public/404.html'))
    }

    if (!width && !height) {
        res.sendFile(path.join(process.cwd(), `./assets/full/${filename}.jpg`))
    }

    const filePath: string = path.join(
        process.cwd(),
        `./assets/thumbnail/${filename}-${width}x${height}.jpg`
    )
    try {
        await fs.access(filePath)
        res.sendFile(filePath)
    } catch (e) {
        await resize(filename, width, height)
        res.sendFile(filePath)
    }
})

app.get('/*', (req, res): void => {
    res.sendFile(path.join(process.cwd(), './public/404.html'))
})

app.listen(port, (): void => {
    console.log(`Server is running! listening on port: ${port}`)
})

export default app
