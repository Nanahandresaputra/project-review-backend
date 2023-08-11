import express from 'express';
import {indexQusionare, createQusionare} from './controller.js';

const router = express.Router();

router.get('/quesionare', indexQusionare);
router.post('/quesionare', createQusionare);

export default router;

