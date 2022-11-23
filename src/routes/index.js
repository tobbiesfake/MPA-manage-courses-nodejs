import siteRouter from './site.js';
import infoRouter from './info.js';
import coursesRouter from './courses.js';

function route(app) {
    app.use('/info', infoRouter);
    app.use('/courses', coursesRouter);
    app.use('/', siteRouter);
}

export default route;
