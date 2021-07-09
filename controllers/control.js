import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const homepage = (req, res) => {
    res.send("Hey Sandesh Dh! I received the message!");
}

const login = (req, res) => {
    console.log("Login data received:");
    console.log(req.body);
    const token = jwt.sign({ email: req.body.email }, process.env.ACCESS_KEY);
    console.log("the token is   " + token);
    res.send({ token });
    console.log("token is sent");
}

const signup = (req, res) => {
    console.log("Signup data received:");
    console.log(req.body);
}

// const authenticate = (req, res, next) => {

// }

export default { homepage, login, signup };