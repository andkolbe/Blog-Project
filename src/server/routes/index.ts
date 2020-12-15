import { Router } from 'express'; // we only need to import the router function from express
import config from '../config';
import apiRouter from './api';
import authRouter from './auth';
import authorsRouter from './authors'; 
import blogsRouter from './blogs';
import blogtagsRouter from './blogtags';
import tagsRouter from './tags';

const router = Router(); // save the express middleware router in a variable 

router.use(config.app.prefix, apiRouter); // /api is for data and information
// config.app.prefix will hide the /api route data from any randos who go on the web page and try to type it in the url bar it
router.use('/auth', authRouter); // /auth is for authorization work
router.use('/authors', authorsRouter);
router.use('/blogs', blogsRouter); // /api/blogs
router.use('/blogtags', blogtagsRouter);
router.use('/tags', tagsRouter);

export default router;