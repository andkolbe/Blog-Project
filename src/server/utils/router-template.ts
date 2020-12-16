import { Router } from 'express';

const router = Router();

//router.use();
router.get('/', async (req, res) => {
    res.json('TEST');
})

export default router;