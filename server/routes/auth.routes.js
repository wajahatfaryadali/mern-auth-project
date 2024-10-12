import express from "express";
import { signUpController } from "../controllers/auth.controller.js";

const routes = express.Router();

routes.post('/signup', signUpController)

export default routes