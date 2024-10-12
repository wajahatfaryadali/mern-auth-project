import User from "../models/user.model.js";

export const signUpController = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const newUser = new User({ username, email, password });

        await newUser.save()

        res.status(201).json({ message: "User created Successful" });

    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

// "username": "username"
// "email": "email"
// "password": "password"