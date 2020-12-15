import { Router } from 'express';

const router = Router();

// GET /api/lulz
router.get('/', (req, res) => res.json({ msg: 'LULZ' }));

export default router;