import express from 'express';
import { establishConnection } from './src/config/Dbconfig.js';
import reservationRouter from './src/router/reservationRouter.js';

import path from 'path';
import { fileURLToPath } from 'url';

const port = 9600;
const app = express();

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

app.use(express.json());
app.use(express.static(path.join(dirname, './src/public')));
app.use("/reservation", reservationRouter);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    establishConnection();
});
