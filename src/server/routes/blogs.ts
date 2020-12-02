import { Router } from 'express';
import db from '../db';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const blogs = await db.blogs.all();
        res.json(blogs);
    } catch(error) {
        console.log(error);
        res.status(500).json({ msg: 'my code sucks :(', error: error.message }); // sends only the  message portion of the error to postman instead of the giant block message
    }


}); // make this async because we will eventually have async code running

export default router;