import { Router } from 'express'; // we only need to import the router function from express
import blogsRouter from './blogs';

const router = Router(); // save the express middleware router in a variable 

router.use('/blogs', blogsRouter); // /api/blogs

export default router;