import express from 'express';
import { engine } from 'express-handlebars';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import path, { join } from 'path';
import { fileURLToPath } from 'url';

import route from './routes/index.js';
import db from './config/db/index.js';

db.connect();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, 'public')));
// OR USE THIS
// app.use(express.static('src/public'));

app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

route(app);

app.listen(port, () => {
    console.log(
        `Your server is running on port ${port}. Link access "http://localhost:${port}/"`,
    );
});
