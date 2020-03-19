import * as express from 'express';
import * as fs from 'fs';
import { promisify } from 'util';

export const router: express.Router = express.Router();
const path: string = './assets/content.txt';
const stat = promisify(fs.stat);

router.get('/content', (req: express.Request, res: express.Response) => {
    const readStream: fs.ReadStream = fs.createReadStream(path, { encoding: "utf8" });

    readStream.on('data', (data: string) => {
        res.write(data.toUpperCase());
    });

    readStream.on('close', () => {
        res.status(200).end('');
    });

    readStream.on('error', () => {
        res.status(500).send('Error in reading the file statuses');
    });
});

router.get('/updateTime', (req: express.Request, res: express.Response) => {
    readLastModifyTime().then((data: Date) => res.send(data)).catch(() => res.status(500).send('Error in reading the file statuses'));
});

async function readLastModifyTime(): Promise<Date> {
    const stats: fs.StatsBase<any> = await stat(path);
    return stats.mtime;
}
