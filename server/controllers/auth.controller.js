import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
import User from "../models/user.model.js";

export const signUpController = async (req, res, next) => {
    const { username, email, password } = req.body;
    console.log('encrp ****** ', req.body)

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

export const signinController = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const validUser = await User.findOne({ email });

        if (!validUser) {
            return res.status(404).json({ message: "User not found" });
        }

        const validPassword = bcryptjs.compareSync(password, validUser.password);

        if (!validPassword) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const jwToken = jwt.sign({ id: validUser._id }, process.env.JWT_PRIVATE_KEY);

        const { password: hasedPass, __v: version, ...userResponse } = validUser._doc;

        res.cookie('access_token', jwToken, { expires: new Date(Date.now() + 900000), httpOnly: true }).status(200).json({ message: "login successful", user: userResponse })

    } catch (error) {
        next(error)
        // res.status(500).json({error: error.message})
    }
}

// "username": "username"
// "email": "email"
// "password": "password"