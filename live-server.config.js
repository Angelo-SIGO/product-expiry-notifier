import liveServer from 'live-server';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const params = {
    port: 8888,
    host: process.env.IP,
    root: "./public",
    open: true,
    file: "index.html",
    loglevel: 0,
    https: {
        cert: fs.readFileSync(__dirname + '/server/cert.pem'),
        key: fs.readFileSync(__dirname + '/server/key.pem')
    }
}

liveServer.start(params);
