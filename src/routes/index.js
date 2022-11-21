import siteRouter from './site.js';
import infoRouter from './info.js';

function route(app) {
    app.use('/info', infoRouter);
    app.use('/', siteRouter);
}

export default route;
