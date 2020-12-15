import { Router } from 'express';
import db from '../../db';

const router = Router();

// POST /auth/register
router.post('/', async (req, res) => {
    try {
        const newAuthorDTO = req.body;
        res.json(newAuthorDTO);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Register Error', error })
    }
})

export default router;