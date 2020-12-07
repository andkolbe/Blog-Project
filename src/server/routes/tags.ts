import { Router } from 'express';
import db from '../db'; // points to the index.ts file in the db folder

const router = Router();

router.get('/', async (req, res) => {
    const id = Number(req.params.id); // will respond with NaN if a number isn't provided. NaN === falsy
    try {
        const blogs = await db.tags.all();
        res.json(blogs);

    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'my code sucks :(', error: error.message }) // sends only the  message portion of the error to postman instead of the giant block message
    }
})

router.post('/', async (req, res) => {
    const tagDTO = req.body;
    try {
        const { insertId } = await db.tags.insert(tagDTO); // destructure CannedResponse down to insertId
        res.json({ msg: 'Tag Added', id: insertId });

    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'my code sucks :(', error: error.message }) // sends only the  message portion of the error to postman instead of the giant block message
    }
})

export default router;