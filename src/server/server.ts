import * as express from 'express';
import * as helmet from 'helmet';
import * as compression from 'compression';
import * as cors from 'cors';
import * as morgan from 'morgan';
import * as path from 'path';
import routes from './routes';

const app = express();

app.use(helmet()); // this should be at the top so everything else filters through it
app.use(compression()); // everything after compression needs to be compressed
app.use(cors());
app.use(morgan('dev')); // every incoming route passes through morgan so it logs all activity across the server
app.use(express.static('public'));
app.use(express.json()); // body parser
app.use(routes); 
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html'))); // our code is actually running from dist/server.js
// tells the server: if a route doesn't start with /api, get out of the way, ignore it, it's front end

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
