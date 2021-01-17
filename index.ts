import express from "express";
import path from "path";
import routes from "./routes";

const app = express();
const port = 3002 || process.env.PORT;

const bundler = express.static(path.join(__dirname,"..", "yellow-app/build"));

app.use(bundler);

app.all('*/api/*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
   });
app.use(routes);

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server started at http://localhost:${port}`);
  // tslint:disable-next-line:no-console
  console.log(`Client started at http://localhost:3000`);
});