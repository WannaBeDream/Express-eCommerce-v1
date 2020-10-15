import logger from'morgan';


export default (app) => {
    // app.use(logger('common', {
    //     stream: fs.createWriteStream('./access.log', {flags: 'a'})
    // }));
    app.use(logger('dev'));
}