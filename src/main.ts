import * as express from "express";
import { router } from "./routes/routes";

const app: express.Application = express();
const PORT: number = 3000;

app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});