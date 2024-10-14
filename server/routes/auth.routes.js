import express from "express";
import { signinController, signUpController } from "../controllers/auth.controller.js";

const routes = express.Router();

routes.post('/signup', signUpController)
routes.post('/signin', signinController)

export default routes