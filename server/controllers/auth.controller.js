import User from "../models/user.model.js";
import bcryptjs from "bcryptjs"

export const signUpController = async (req, res, next) => {
    const { username, email, password } = req.body;

    const encryptedPassword = bcryptjs.hashSync(password, 10);

    try {
        const newUser = new User({ username, email, password: encryptedPassword });
        await newUser.save()
        res.status(201).json({ message: "User created Successful" });
    } catch (error) {
        next(error)
        // res.status(500).json({error: error.message})
    }
}

// "username": "username"
// "email": "email"
// "password": "password"