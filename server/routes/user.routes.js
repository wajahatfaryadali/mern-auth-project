import express from "express";
import { testUserController } from "../controllers/user.controller.js";

const router = express.Router()

router.get('/', testUserController)

export default router