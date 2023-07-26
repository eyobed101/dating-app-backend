import express from 'express';
import { createCard , getCard} from '../controller/cardsController.js';

const router = express.Router();


router.get("/", getCard);

router.post("/", createCard);

export default router