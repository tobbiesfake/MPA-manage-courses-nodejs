import siteRouter from './site.js';
import infoRouter from './info.js';
import coursesRouter from './courses.js';

function route(app) {
    app.use('/me', infoRouter);
    app.use('/courses', coursesRouter);
    app.use('/', siteRouter);
}

export default route;
