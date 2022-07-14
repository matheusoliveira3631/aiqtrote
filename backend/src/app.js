import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { fRouter as router } from "./routes/index.js"
//import frontUrl from './config/urls'

const app = express();
app.disable("x-powered-by")

const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
/*app.use(cors({
  origin: frontUrl
}))*/

app.use(router);

app.listen(port, () => {
  console.log(`Servidor rodando no link http://localhost:${port}`);
});
