import logger from'morgan';
import fs from "fs";

export default async (app) => {
  await app.use(logger('common', {
        stream: fs.createWriteStream('./access.log', {flags: 'a'})
    }));
    app.use(logger('combined'));
}