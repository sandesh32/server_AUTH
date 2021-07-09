import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import control from './controllers/control.js';
const app = express();
app.use(express.json());

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
const port = process.env.PORT || 5000;


app.get('/', control.homepage);
app.post('/login', control.login);
app.post('/signup', control.signup);



app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})